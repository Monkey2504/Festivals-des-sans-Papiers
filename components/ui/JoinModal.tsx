
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
    setTimeout(() => {
      dispatch({ type: 'TOGGLE_JOIN_MODAL', payload: false });
      setStep(1);
    }, 3000);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 bg-black/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) dispatch({ type: 'TOGGLE_JOIN_MODAL', payload: false }); }}
    >
      <div className="bg-white w-full max-w-lg rounded-sm shadow-xl border border-black/10 p-8 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={() => dispatch({ type: 'TOGGLE_JOIN_MODAL', payload: false })}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-black/30 hover:text-black transition-colors cursor-pointer rounded-full hover:bg-black/5"
          aria-label="Fermer"
        >
          ×
        </button>

        {step === 1 ? (
          <>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#BC0000] mb-4">Rejoindre le mouvement</p>
            <h2 className="font-serif italic text-3xl text-black leading-tight mb-8">
              Devenir co-fondateur de la coopérative.
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1.5">
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">
                  Votre nom / collectif
                </label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full border-b border-black/20 bg-transparent py-2 text-sm text-black placeholder:text-black/25 focus:border-[#BC0000] focus:outline-none transition-colors"
                  placeholder="Ex : Collectif Est"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">
                  Email de contact
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full border-b border-black/20 bg-transparent py-2 text-sm text-black placeholder:text-black/25 focus:border-[#BC0000] focus:outline-none transition-colors"
                  placeholder="nom@domaine.com"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">
                  Type d'engagement
                </label>
                <div className="grid grid-cols-2 gap-3 mt-1">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, type: 'fondateur' })}
                    className={`p-4 text-left rounded-sm border text-sm transition-all cursor-pointer ${
                      form.type === 'fondateur'
                        ? 'bg-[#BC0000]/5 border-[#BC0000] text-black'
                        : 'bg-[#F2F0EB] border-transparent text-black/50 hover:text-black'
                    }`}
                  >
                    <span className="block font-semibold mb-0.5">Co-fondateur</span>
                    <span className="text-xs text-black/40">100 €</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, type: 'lutte' })}
                    className={`p-4 text-left rounded-sm border text-sm transition-all cursor-pointer ${
                      form.type === 'lutte'
                        ? 'bg-[#BC0000]/5 border-[#BC0000] text-black'
                        : 'bg-[#F2F0EB] border-transparent text-black/50 hover:text-black'
                    }`}
                  >
                    <span className="block font-semibold mb-0.5">Membre en lutte</span>
                    <span className="text-xs text-black/40">3 € / mois</span>
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#BC0000] text-white text-sm font-medium py-3 rounded-sm hover:bg-[#a00000] transition-colors cursor-pointer mt-2"
              >
                Confirmer mon engagement →
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#BC0000] mb-4">Merci</p>
            <h2 className="font-serif italic text-3xl text-black mb-4">Solidarité enregistrée.</h2>
            <p className="text-sm text-black/50 italic">"Nous bâtissons l'outil ensemble."</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinModal;
