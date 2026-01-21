
import React, { useState, useEffect, useRef } from 'react';
import { TranslationSet } from '../types';
import { APP_CONFIG } from '../constants';
import { useAppContext } from '../context/AppContext';

interface Props {
  goal: number;
  raisedInitial: number;
  t: TranslationSet['common'];
}

const CrowdfundingTracker: React.FC<Props> = ({ goal, raisedInitial, t }) => {
  const { dispatch } = useAppContext();
  const [currentRaised, setCurrentRaised] = useState(0);
  const animationRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const duration = 2000;
    const startTime = performance.now();
    const startValue = currentRaised;
    const endValue = raisedInitial;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);

      setCurrentRaised(startValue + (endValue - startValue) * easedProgress);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [raisedInitial]);

  const percentage = goal > 0 ? Math.min(Math.round((currentRaised / goal) * 100), 100) : 0;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] bg-[#0F0F0F] text-white border-t-4 border-[#BC0000] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col md:flex-row items-stretch md:items-center">
        <div className="bg-[#BC0000] px-4 md:px-8 py-2 md:py-4 flex items-center shrink-0 border-r border-white/10">
          <div className="flex flex-col text-white">
            <span className="font-anton text-sm md:text-xl tracking-widest leading-none">CAPITAL</span>
            <span className="hidden md:inline font-mono text-[9px] font-bold tracking-[0.3em] opacity-80 mt-1 uppercase">Souveraineté</span>
          </div>
        </div>
        
        <div className="flex-grow px-4 md:px-8 py-2 md:py-0 flex items-center justify-between md:justify-start gap-4 md:gap-10 overflow-hidden">
          <div className="flex items-center gap-6 md:gap-12 shrink-0">
            <div className="flex flex-col">
              <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest opacity-40 mb-1">{t.raised}</span>
              <div className="flex items-baseline gap-2">
                <span className="font-anton text-2xl md:text-4xl">{Math.round(currentRaised).toLocaleString()}€</span>
                <span className="hidden sm:inline font-mono text-xs opacity-60">/ {goal.toLocaleString()}€</span>
              </div>
            </div>

            <div className="hidden lg:block w-px h-10 bg-white/10"></div>

            <div className="hidden lg:flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-widest opacity-40 mb-1">Membres</span>
              <div className="flex items-baseline gap-2">
                <span className="font-anton text-4xl">{APP_CONFIG.INITIAL_FOUNDERS}</span>
                <span className="font-mono text-[10px] opacity-40 uppercase">/ {APP_CONFIG.TOTAL_FOUNDERS_GOAL}</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block flex-grow relative h-2 bg-white/5 overflow-hidden border border-white/10">
            <div 
              className="absolute top-0 left-0 h-full bg-[#BC0000] transition-all duration-300 ease-out shadow-[0_0_15px_rgba(188,0,0,0.5)]"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          
          <div className="shrink-0 flex flex-col items-end">
             <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-widest opacity-40 mb-1">Phase 1</span>
             <span className="font-anton text-3xl md:text-5xl text-[#BC0000] leading-none">{percentage}%</span>
          </div>
        </div>

        <button 
          onClick={() => dispatch({ type: 'TOGGLE_JOIN_MODAL', payload: true })}
          className="bg-white text-black font-anton text-xl md:text-3xl px-6 md:px-12 py-4 md:py-8 hover:bg-[#BC0000] hover:text-white transition-all duration-500 active:scale-95 group relative overflow-hidden cursor-pointer shrink-0"
        >
          <span className="relative z-10">{t.subscribe}</span>
        </button>
      </div>
    </div>
  );
};

export default CrowdfundingTracker;
