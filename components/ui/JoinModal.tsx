
import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const JoinModal: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', type: 'fondateur' });

  if (!state.isJoinModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    // Simuler un envoi
    setTimeout(() => {
      dispatch({ type: 'TOGGLE_JOIN_MODAL', payload: false });
      setStep(1);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl">
      <div className="bg-white w-full max-w-2xl border-8 border-[#BC0000] shadow-[20px_20px_0px_0px_rgba(255,255,255,1)] p-8 md:p-12 relative overflow-y-auto max-h-[90vh]">
        <button 
          onClick={() => dispatch({ type: 'TOGGLE_JOIN_MODAL', payload: false })}
          className="absolute top-4 right-4 text-4xl font-anton hover:text-[#BC0000] cursor-pointer"
        >
          ×
        </button>

        {step === 1 ? (
          <>
            <h2 className="font-anton text-5xl md:text-7xl leading-none mb-8 tracking-tighter uppercase">
              REJOINDRE LE <br/><span className="text-[#BC0000]">MOUVEMENT.</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase font-black tracking-widest opacity-40">Votre Nom / Collectif</label>
                <input 
                  required
                  type="text" 
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full border-4 border-black p-4 font-anton text-2xl focus:border-[#BC0000] outline-none" 
                  placeholder="EX: COLLECTIF EST"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase font-black tracking-widest opacity-40">Email de contact</label>
                <input 
                  required
                  type="email" 
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  className="w-full border-4 border-black p-4 font-anton text-2xl focus:border-[#BC0000] outline-none" 
                  placeholder="NOM@DOMAINE.COM"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                  type="button"
                  onClick={() => setForm({...form, type: 'fondateur'})}
                  className={`p-6 border-4 font-anton text-xl transition-all ${form.type === 'fondateur' ? 'bg-[#BC0000] text-white border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-black opacity-50'}`}
                >
                  CO-FONDATEUR (100€)
                </button>
                <button 
                  type="button"
                  onClick={() => setForm({...form, type: 'lutte'})}
                  className={`p-6 border-4 font-anton text-xl transition-all ${form.type === 'lutte' ? 'bg-[#BC0000] text-white border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-black opacity-50'}`}
                >
                  MEMBRE EN LUTTE (3€/m)
                </button>
              </div>
              <button type="submit" className="w-full bg-black text-white font-anton text-3xl py-8 hover:bg-[#BC0000] transition-all cursor-pointer">
                AFFIRMER MON ENGAGEMENT →
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-20 animate-pulse">
            <h2 className="font-anton text-6xl text-[#BC0000] mb-8 uppercase">SOLIDARITÉ <br/>ENREGISTRÉE.</h2>
            <p className="font-serif text-3xl italic">"Nous bâtissons l'outil ensemble."</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinModal;
