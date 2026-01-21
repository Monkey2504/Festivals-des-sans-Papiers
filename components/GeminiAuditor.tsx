
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const GeminiAuditor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `Tu es un membre souverain de THE MOVMENT. 
          Ton rôle est d'affirmer notre projet avec force, en utilisant exclusivement notre lexique de lutte.
          
          LEXIQUE OBLIGATOIRE :
          - Territorialisation de la lutte (au lieu de tournée).
          - Bloc indivisible (Tournée + Festival).
          - Collectif Parrain (pour désigner la VSP cette année).
          - Souveraineté financière (au lieu de budget).
          - Affirmation (au lieu de visibilité).
          - Passation de l'outil (modèle tournant).
          
          LOGIQUE POLITIQUE :
          - 100% des bénéfices du cycle vont à la VSP BXL.
          - Le festival commence dès la première soirée de quartier.
          - On bâtit l'outil technique pour que les collectifs l'habitent.
          
          RÈGLES D'EXPRESSION :
          - INTERDICTION d'utiliser des formes de négation (ne pas, sans, jamais, etc.).
          - Utilise exclusivement des affirmations puissantes.
          
          TON : Radical, déterminé, souverain. Max 3 phrases courtes.`,
        }
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || 'Nous affirmons notre souveraineté ensemble.' }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: "L'affirmation technique suit son cours, nous restons debout." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-32 right-8 z-[110]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-black text-white p-5 border-4 border-white shadow-[10px_10px_0px_0px_rgba(188,0,0,1)] hover:scale-105 transition-all font-anton tracking-widest flex items-center gap-4 cursor-pointer"
        >
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          UNE QUESTION ?
        </button>
      ) : (
        <div className="w-[400px] h-[550px] bg-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] flex flex-col">
          <div className="bg-black text-white p-6 font-anton flex justify-between items-center text-xl">
            <span>AFFIRMATION TOTALE</span>
            <button onClick={() => setIsOpen(false)} className="hover:text-[#BC0000] text-3xl cursor-pointer">×</button>
          </div>
          
          <div ref={scrollRef} className="flex-grow p-8 overflow-y-auto font-serif text-lg space-y-6 bg-[#F2F0EB] text-black">
            <div className="p-4 bg-white border-2 border-black italic text-black/60 text-sm">
              Nous répondons avec transparence sur notre souveraineté et notre modèle.
            </div>
            {messages.map((m, i) => (
              <div key={i} className={`${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-4 max-w-[90%] ${m.role === 'user' ? 'bg-[#BC0000] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-black text-white shadow-[4px_4px_0px_0px_rgba(188,0,0,1)]'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div className="font-mono text-xs animate-pulse text-black text-center">ÉLABORATION DE LA PAROLE...</div>}
          </div>

          <form onSubmit={handleAudit} className="p-6 border-t-4 border-black flex gap-2 bg-white">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Affirmez votre question..."
              className="flex-grow font-mono text-sm p-4 border-2 border-black focus:outline-none focus:border-[#BC0000] text-black"
            />
            <button type="submit" className="bg-black text-white px-6 font-anton text-xl hover:bg-[#BC0000] transition-colors cursor-pointer">POSER</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default GeminiAuditor;
