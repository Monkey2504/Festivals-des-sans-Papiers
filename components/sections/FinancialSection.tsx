
import React, { useMemo, useState } from 'react';
import { APP_CONFIG } from '../../constants';
import { useInView } from '../../hooks/useInView';

const FinancialSectionEnhanced: React.FC = () => {
  const budget = APP_CONFIG.BUDGET_DETAILS;
  const [activeTab, setActiveTab] = useState<'table' | 'chart'>('table');
  const { ref, isInView } = useInView(0.1);

  const totalBudget = useMemo(() => budget.reduce((sum, i) => sum + i.amount, 0), [budget]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="transparence"
      className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white"
      aria-labelledby="financial-title"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#BC0000] mb-4">
            Transparence financière
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
            <h2 id="financial-title" className="font-serif italic text-3xl md:text-4xl text-black leading-tight">
              Chaque euro compte.
            </h2>
            <div className="flex gap-2" role="tablist">
              {(['table', 'chart'] as const).map(tab => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs font-medium rounded-sm transition-colors cursor-pointer ${
                    activeTab === tab ? 'bg-[#0F0F0F] text-white' : 'bg-[#F2F0EB] text-black/60 hover:text-black'
                  }`}
                >
                  {tab === 'table' ? 'Tableau' : 'Graphique'}
                </button>
              ))}
            </div>
          </div>
          <p className="font-serif italic text-base text-black/60 leading-relaxed">
            "La transparence financière est notre engagement premier envers nos sociétaires et la communauté."
          </p>
        </div>

        {/* Budget table */}
        <div className={`mb-10 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {activeTab === 'table' ? (
            <div className="overflow-x-auto border border-black/10 rounded-sm bg-white shadow-sm">
              <table className="w-full" aria-label="Budget de lancement">
                <thead>
                  <tr className="border-b border-black/10 bg-[#F2F0EB]">
                    <th className="px-5 py-3 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">Poste</th>
                    <th className="px-5 py-3 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">Montant</th>
                    <th className="px-5 py-3 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">%</th>
                  </tr>
                </thead>
                <tbody>
                  {budget.map((item, i) => {
                    const pct = totalBudget > 0 ? Math.round((item.amount / totalBudget) * 100) : 0;
                    return (
                      <tr key={i} className="border-b border-black/5 table-row-hover">
                        <td className="px-5 py-4">
                          <p className="text-sm font-medium text-black">{item.label}</p>
                          <p className="text-xs text-black/40 mt-0.5">{item.desc}</p>
                        </td>
                        <td className="px-5 py-4 text-right font-mono text-sm font-semibold text-[#BC0000]">
                          {item.amount.toLocaleString('fr-BE')}€
                        </td>
                        <td className="px-5 py-4 text-right font-mono text-xs text-black/40">{pct}%</td>
                      </tr>
                    );
                  })}
                  <tr className="bg-[#F2F0EB]">
                    <td className="px-5 py-4 text-sm font-semibold text-black">Total de lancement</td>
                    <td className="px-5 py-4 text-right font-mono text-sm font-bold text-[#BC0000]">
                      {totalBudget.toLocaleString('fr-BE')}€
                    </td>
                    <td className="px-5 py-4 text-right font-mono text-xs text-black/40">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="space-y-3">
              {budget.map((item, i) => {
                const pct = totalBudget > 0 ? Math.round((item.amount / totalBudget) * 100) : 0;
                return (
                  <div key={i} className="bg-[#F2F0EB] rounded-sm p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-black">{item.label}</span>
                      <span className="font-mono text-sm font-semibold text-[#BC0000]">{item.amount.toLocaleString('fr-BE')}€</span>
                    </div>
                    <div className="w-full h-1 bg-black/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#BC0000] rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
                    </div>
                    <p className="text-xs text-black/40 mt-1.5">{pct}% du budget total</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 3 principes */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {[
            { title: 'Zéro profit', body: '100% des bénéfices sont réinvestis dans la lutte. Pas de dividendes.' },
            { title: 'Audit public', body: 'Les comptes sont audités annuellement et accessibles à tous les membres.' },
            { title: 'Équité salariale', body: 'Tous les membres de l\'équipe reçoivent la même rémunération de base.' },
          ].map((p, i) => (
            <div key={i} className="bg-[#F2F0EB] rounded-sm p-5 border border-black/5">
              <h3 className="text-sm font-semibold text-black mb-2">{p.title}</h3>
              <p className="text-xs text-black/60 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialSectionEnhanced;
