
import React, { useState, useRef } from 'react';
import { GoogleGenAI, Modality } from '@google/genai';

const ai = process.env.API_KEY ? new GoogleGenAI({ apiKey: process.env.API_KEY }) : null;

interface Props {
  text: string;
  label?: string;
}

const ManifestoAudio: React.FC<Props> = ({ text, label = "Écouter" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const handleSpeak = async () => {
    if (isPlaying || loading || !ai) return;

    // Close previous AudioContext before creating a new one
    if (audioContextRef.current) {
      await audioContextRef.current.close();
      audioContextRef.current = null;
    }

    setLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Lis ceci avec une voix ferme et souveraine : ${text}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Zephyr' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const audioCtx = new AudioContext({ sampleRate: 24000 });
        audioContextRef.current = audioCtx;

        const bytes = Uint8Array.from(atob(base64Audio), c => c.charCodeAt(0));
        const dataInt16 = new Int16Array(bytes.buffer);
        const buffer = audioCtx.createBuffer(1, dataInt16.length, 24000);
        const channelData = buffer.getChannelData(0);
        for (let i = 0; i < dataInt16.length; i++) {
          channelData[i] = dataInt16[i] / 32768.0;
        }

        const source = audioCtx.createBufferSource();
        source.buffer = buffer;
        source.connect(audioCtx.destination);
        source.onended = () => {
          setIsPlaying(false);
          audioCtx.close();
          audioContextRef.current = null;
        };

        setIsPlaying(true);
        source.start();
      }
    } catch (err) {
      console.error("Erreur audio", err);
    } finally {
      setLoading(false);
    }
  };

  if (!ai) return null;

  return (
    <button
      onClick={handleSpeak}
      disabled={loading || isPlaying}
      className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-sm border transition-colors cursor-pointer ${
        isPlaying
          ? 'bg-[#BC0000]/10 border-[#BC0000]/30 text-[#BC0000]'
          : 'bg-white border-black/10 text-black/60 hover:text-black hover:border-black/30'
      } disabled:opacity-50`}
      aria-label={isPlaying ? 'Lecture en cours' : label}
    >
      <span className={`w-2 h-2 rounded-full shrink-0 ${isPlaying ? 'bg-[#BC0000] animate-pulse' : 'bg-black/30'}`} />
      {loading ? 'Chargement…' : isPlaying ? 'En cours…' : label}
    </button>
  );
};

export default ManifestoAudio;
