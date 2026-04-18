
import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../context/AppContext';
import { TRANSLATIONS, APP_CONFIG } from '../constants';

const CrowdfundingTracker: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const t = TRANSLATIONS[state.language].common;
  const goal = APP_CONFIG.CROWDFUNDING_GOAL;
  const raisedInitial = APP_CONFIG.INITIAL_RAISED;

  const [currentRaised, setCurrentRaised] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    const duration = 2000;
    const startTime = performance.now();
    const startValue = currentRaised;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrentRaised(startValue + (raisedInitial - startValue) * eased);
      if (progress < 1) animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [raisedInitial]);

  const percentage = goal > 0 ? Math.min(Math.round((currentRaised / goal) * 100), 100) : 0;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] bg-white border-t border-black/10 shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
      <div className="max-w-6xl mx-auto flex items-stretch">
        {/* Label */}
        <div className="hidden sm:flex flex-col justify-center px-5 py-3 border-r border-black/10 shrink-0">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-black/40 leading-none">Phase 1</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#BC0000] leading-none mt-1">En cours</span>
        </div>

        {/* Stats */}
        <div className="flex-grow px-4 sm:px-6 py-3 flex items-center gap-6 sm:gap-10 overflow-hidden">
          {/* Montant */}
          <div className="flex flex-col shrink-0">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/40 mb-0.5">{t.raised}</span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-anton text-xl sm:text-2xl text-black">{Math.round(currentRaised).toLocaleString()}€</span>
              <span className="font-mono text-[10px] text-black/30">/ {goal.toLocaleString()}€</span>
            </div>
          </div>

          {/* Membres (desktop) */}
          <div className="hidden md:flex flex-col shrink-0">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/40 mb-0.5">Membres</span>
            <div className="flex items-baseline gap-1">
              <span className="font-anton text-2xl text-black">{APP_CONFIG.INITIAL_FOUNDERS}</span>
              <span className="font-mono text-[10px] text-black/30">/ {APP_CONFIG.TOTAL_FOUNDERS_GOAL}</span>
            </div>
          </div>

          {/* Barre de progression */}
          <div className="flex-grow flex flex-col gap-1 min-w-0">
            <div className="w-full h-0.5 bg-black/8 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#BC0000] transition-all duration-300 ease-out rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="font-mono text-[9px] text-black/30 hidden sm:block">{percentage}% de l'objectif Phase 1</span>
          </div>

          {/* Pourcentage mobile */}
          <span className="sm:hidden font-anton text-xl text-[#BC0000] shrink-0">{percentage}%</span>
        </div>

        {/* CTA */}
        <button
          onClick={() => dispatch({ type: 'TOGGLE_JOIN_MODAL', payload: true })}
          className="bg-[#BC0000] text-white font-medium text-xs sm:text-sm px-5 sm:px-8 hover:bg-[#a00000] transition-colors cursor-pointer shrink-0 whitespace-nowrap"
        >
          {t.subscribe}
        </button>
      </div>
    </div>
  );
};

export default CrowdfundingTracker;
