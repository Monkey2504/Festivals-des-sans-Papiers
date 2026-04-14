
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const GeminiAuditor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2-flash',
        contents: userMsg,
        config: {
          systemInstruction: `Tu es un membre de THE MOVMENT / Festival des Sans-Papiers.
Réponds avec clarté et bienveillance sur le projet, la charte, la coopérative, et les soirées locales.
Sois direct, humain, et concis (3 phrases max).`,
        }
      });
      setMessages(prev => [...prev, { role: 'ai', text: response.text || 'Merci pour votre question.' }]);
    } catch {
      setMessages(prev => [...prev, { role: 'ai', text: 'Une erreur est survenue. Contactez-nous à contact@festivalsanspapiers.be' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-[110]">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-11 h-11 rounded-full bg-white border border-black/10 shadow-md flex items-center justify-center hover:shadow-lg hover:border-[#BC0000]/30 transition-all cursor-pointer"
          title="Une question ?"
          aria-label="Ouvrir l'assistant"
        >
          <span className="font-serif italic text-black text-lg leading-none">?</span>
        </button>
      ) : (
        <div className="w-[calc(100vw-2rem)] sm:w-[380px] h-[min(500px,70vh)] bg-white border border-black/10 shadow-xl rounded-sm flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#0F0F0F] text-white px-5 py-4 flex justify-between items-center shrink-0">
            <div>
              <p className="text-sm font-medium">Une question ?</p>
              <p className="text-xs text-white/40 mt-0.5">Festival des Sans-Papiers</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors text-xl leading-none cursor-pointer"
              aria-label="Fermer"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-3 bg-[#F2F0EB]/40">
            {messages.length === 0 && (
              <p className="text-xs text-black/40 font-serif italic text-center py-4">
                Posez votre question sur le projet, la charte ou la coopérative.
              </p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-sm text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-[#BC0000]/10 text-black border border-[#BC0000]/20'
                    : 'bg-white text-black border border-black/8 shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-black/8 px-4 py-3 rounded-sm shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-black/30 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 bg-black/30 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-black/30 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-black/8 flex gap-2 shrink-0 bg-white">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Votre question..."
              className="flex-grow text-sm px-3 py-2.5 border border-black/15 rounded-sm focus:outline-none focus:border-[#BC0000] transition-colors"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-[#BC0000] text-white text-xs font-medium px-4 py-2.5 rounded-sm hover:bg-[#a00000] disabled:opacity-40 transition-colors cursor-pointer"
            >
              Envoyer
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default GeminiAuditor;
