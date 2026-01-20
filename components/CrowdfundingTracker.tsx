
import React, { useState, useEffect, useRef } from 'react';
import { TranslationSet } from '../types';

interface Props {
  goal: number;
  raisedInitial: number;
  t: TranslationSet['common'];
}

const CrowdfundingTracker: React.FC<Props> = ({ goal, raisedInitial, t }) => {
  const [currentRaised, setCurrentRaised] = useState(0);
  const animationRef = useRef<number | null>(null);
  
  useEffect(() => {
    // Reset and stop existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    const startValue = currentRaised; // Animate from current value if changed
    const endValue = raisedInitial;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Simple easeOutCubic for professional feel
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
        {/* Ticker Section - Registry Focus */}
        <div className="bg-[#BC0000] px-8 py-4 flex items-center shrink-0 border-r border-white/10">
          <div className="flex flex-col">
            <span className="font-anton text-xl tracking-widest leading-none">ÉTAT DU CAPITAL</span>
            <span className="font-mono text-[9px] font-bold tracking-[0.3em] opacity-80 mt-1 uppercase">Mise à jour en direct</span>
          </div>
        </div>
        
        {/* Progress Section */}
        <div className="flex-grow px-8 py-4 md:py-0 flex items-center gap-10 overflow-hidden">
          <div className="flex items-center gap-12 shrink-0">
            <div className="flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-widest opacity-40 mb-1">{t.raised}</span>
              <div className="flex items-baseline gap-2">
                <span className="font-anton text-4xl">{Math.round(currentRaised).toLocaleString()}€</span>
                <span className="font-mono text-xs opacity-60">/ {goal.toLocaleString()}€</span>
              </div>
            </div>

            <div className="hidden lg:block w-px h-10 bg-white/10"></div>

            {/* Member Count - Reinforcing ESS (Human Capital) */}
            <div className="hidden lg:flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-widest opacity-40 mb-1">Sociétaires</span>
              <div className="flex items-baseline gap-2">
                <span className="font-anton text-4xl">154</span>
                <span className="font-mono text-[10px] opacity-40 uppercase">Co-fondateurs</span>
              </div>
            </div>
          </div>
          
          {/* Progress Bar Container */}
          <div className="hidden lg:block flex-grow relative h-3 bg-white/5 overflow-hidden border border-white/10">
            <div 
              className="absolute top-0 left-0 h-full bg-[#BC0000] transition-all duration-300 ease-out shadow-[0_0_15px_rgba(188,0,0,0.5)]"
              style={{ width: `${percentage}%` }}
            ></div>
            {/* Markers */}
            <div className="absolute top-0 left-1/4 h-full w-px bg-white/10"></div>
            <div className="absolute top-0 left-1/2 h-full w-px bg-white/10"></div>
            <div className="absolute top-0 left-3/4 h-full w-px bg-white/10"></div>
          </div>
          
          <div className="shrink-0 flex flex-col items-end">
             <span className="font-mono text-[9px] uppercase tracking-widest opacity-40 mb-1">Quota</span>
             <span className="font-anton text-5xl text-[#BC0000] leading-none">{percentage}%</span>
          </div>
        </div>

        {/* CTA Section - Cooperative Subscription */}
        <button className="bg-white text-black font-anton text-3xl px-12 py-8 hover:bg-[#BC0000] hover:text-white transition-all duration-500 active:scale-95 group relative overflow-hidden">
          <span className="relative z-10">{t.donate}</span>
          <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-5"></div>
        </button>
      </div>
    </div>
  );
};

export default CrowdfundingTracker;
