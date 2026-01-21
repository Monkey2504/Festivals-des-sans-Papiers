
import React, { useState } from 'react';
import { GoogleGenAI, Modality } from '@google/genai';

interface Props {
  text: string;
  label?: string;
}

const ManifestoAudio: React.FC<Props> = ({ text, label = "ÉCOUTER LE RÉCIT" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSpeak = async () => {
    if (isPlaying || loading) return;
    
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Lis ceci avec une voix ferme, radicale et souveraine, comme un manifestant qui s'exprime : ${text}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Zephyr' }, // Voix masculine ferme
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        const binaryString = atob(base64Audio);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        
        const dataInt16 = new Int16Array(bytes.buffer);
        const buffer = audioContext.createBuffer(1, dataInt16.length, 24000);
        const channelData = buffer.getChannelData(0);
        for (let i = 0; i < dataInt16.length; i++) {
          channelData[i] = dataInt16[i] / 32768.0;
        }

        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.onended = () => setIsPlaying(false);
        
        setIsPlaying(true);
        source.start();
      }
    } catch (err) {
      console.error("Erreur d'affirmation sonore", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleSpeak}
      disabled={loading || isPlaying}
      className={`flex items-center gap-4 border-4 border-black p-4 font-anton text-xl transition-all ${isPlaying ? 'bg-[#BC0000] text-white animate-pulse' : 'bg-white text-black hover:bg-black hover:text-white'} cursor-pointer`}
    >
      <div className={`w-4 h-4 rounded-full ${isPlaying ? 'bg-white' : 'bg-[#BC0000]'}`}></div>
      {loading ? 'PRÉPARATION DE LA VOIX...' : isPlaying ? 'AFFIRMATION EN COURS...' : label}
    </button>
  );
};

export default ManifestoAudio;
