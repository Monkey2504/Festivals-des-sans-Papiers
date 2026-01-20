
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
          systemInstruction: `Tu es un ami et membre de l'ASBL THE MOVMENT. 
          Ton rôle est d'expliquer le projet avec enthousiasme et simplicité à quelqu'un qui ne le connaît pas.
          POINTS ESSENTIELS :
          - On commence par récolter 15 000€ pour créer nos outils de base.
          - Ensuite, on fait une tournée à Bruxelles pour rencontrer les gens et financer la suite.
          - Le but final est un grand festival de solidarité.
          - On a besoin que les gens proposent des salles dans leurs quartiers.
          TON : Chaleureux, humain, invitant. Ne parle pas comme une machine. Pas de termes comme "phase", "stratégie" ou "données" si possible.
          RÈGLES : Max 3 phrases courtes. Sois accueillant.`,
        }
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || 'Je n\'ai pas bien compris, on peut en reparler ?' }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: "Petit souci de connexion, je reviens tout de suite !" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-32 right-8 z-[110]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-black text-white p-5 border-4 border-white shadow-[10px_10px_0px_0px_rgba(188,0,0,1)] hover:scale-105 transition-all font-anton tracking-widest flex items-center gap-4"
        >
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          UNE QUESTION ?
        </button>
      ) : (
        <div className="w-[400px] h-[550px] bg-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] flex flex-col">
          <div className="bg-black text-white p-6 font-anton flex justify-between items-center text-xl">
            <span>PARLONS DU PROJET</span>
            <button onClick={() => setIsOpen(false)} className="hover:text-[#BC0000] text-3xl">×</button>
          </div>
          
          <div ref={scrollRef} className="flex-grow p-8 overflow-y-auto font-serif text-lg space-y-6 bg-[#F2F0EB]">
            <div className="p-4 bg-white border-2 border-black italic text-black/60 text-sm">
              Je suis là pour vous aider à comprendre notre démarche. Posez-moi vos questions simplement !
            </div>
            {messages.map((m, i) => (
              <div key={i} className={`${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-4 max-w-[90%] ${m.role === 'user' ? 'bg-[#BC0000] text-white' : 'bg-black text-white'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div className="font-mono text-xs animate-pulse text-black">EN TRAIN D'ÉCRIRE...</div>}
          </div>

          <form onSubmit={handleAudit} className="p-6 border-t-4 border-black flex gap-2 bg-white">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Écrivez ici..."
              className="flex-grow font-mono text-sm p-4 border-2 border-black focus:outline-none focus:border-[#BC0000]"
            />
            <button type="submit" className="bg-black text-white px-6 font-anton text-xl hover:bg-[#BC0000] transition-colors">ENVOYER</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default GeminiAuditor;
