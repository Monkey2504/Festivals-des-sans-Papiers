
import React, { useMemo, useState, useEffect, useRef } from 'react';
import { APP_CONFIG } from '../../constants';

// Composant de graphique circulaire
const DonutChart: React.FC<{ data: Array<{ label: string; amount: number }> }> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Calcul des totaux et pourcentages
  const { total, percentages, colors } = useMemo(() => {
    const totalAmount = data.reduce((sum, item) => sum + item.amount, 0);

    const percentages = data.map(item => {
      return (item.amount / totalAmount) * 100;
    });

    // Palette de couleurs
    const colors = [
      '#BC0000', // Rouge principal
      '#FF5252', // Rouge clair
      '#4ECDC4', // Turquoise
      '#FFD166', // Jaune
      '#06D6A0', // Vert
      '#118AB2', // Bleu
      '#EF476F'  // Rose
    ];

    return { total: totalAmount, percentages, colors };
  }, [data]);

  // Dessin du graphique
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Dimensions
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.4;
    const donutThickness = radius * 0.6;

    // Efface le canvas
    ctx.clearRect(0, 0, width, height);

    // Dessin du graphique
    let startAngle = 0;
    
    percentages.forEach((percentage, index) => {
      const sliceAngle = (percentage / 100) * 2 * Math.PI;
      const endAngle = startAngle + sliceAngle;
      
      // Segment du graphique
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      
      // Couleur avec effet de survol
      const color = hoveredIndex === index 
        ? colors[index] + 'CC' // Plus transparent au survol
        : colors[index];
      
      ctx.fillStyle = color;
      ctx.fill();
      
      // Bordure
      ctx.strokeStyle = '#121212';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      startAngle = endAngle;
    });

    // Trou central (effet donut)
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius - donutThickness, 0, 2 * Math.PI);
    ctx.fillStyle = '#F2F0EB';
    ctx.fill();
    ctx.strokeStyle = '#121212';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Texte au centre
    ctx.fillStyle = '#121212';
    ctx.font = 'bold 24px Anton';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${total.toLocaleString('fr-BE')}€`, centerX, centerY);
    
    ctx.font = '10px Mono';
    ctx.fillStyle = '#666';
    ctx.fillText('BUDGET TOTAL', centerX, centerY + 20);

  }, [percentages, colors, hoveredIndex, total]);

  return (
    <div className="relative">
      <canvas 
        ref={canvasRef}
        width={300}
        height={300}
        className="w-full max-w-xs mx-auto"
        aria-label="Graphique circulaire de répartition budgétaire"
        role="img"
      />
      
      {/* Légende interactive */}
      <div className="mt-8 space-y-2">
        {data.map((item, index) => {
          const percentage = percentages[index];
          const amount = item.amount;
          
          return (
            <div 
              key={index}
              className="flex items-center gap-3 p-2 rounded hover:bg-black/5 transition-colors cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              tabIndex={0}
              role="button"
              aria-label={`${item.label}: ${percentage.toFixed(1)}%, ${amount.toLocaleString('fr-BE')}€`}
            >
              <div 
                className="w-4 h-4 rounded"
                style={{ backgroundColor: colors[index] }}
                aria-hidden="true"
              ></div>
              <span className="font-mono text-xs flex-1">
                {item.label}
              </span>
              <span className="font-mono text-xs font-bold text-[#BC0000]">
                {percentage.toFixed(1)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FinancialSectionEnhanced: React.FC = () => {
  const budget = APP_CONFIG.BUDGET_DETAILS;
  const [activeTab, setActiveTab] = useState<'table' | 'chart'>('table');

  const totalBudget = useMemo(() => {
    return budget.reduce((sum, i) => sum + i.amount, 0);
  }, [budget]);

  return (
    <section 
      id="transparence" 
      className="px-4 sm:px-8 py-24 md:py-48 bg-[#F2F0EB] border-y-4 border-black scroll-mt-32"
      aria-labelledby="financial-title"
      role="region"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* En-tête avec onglets */}
        <div className="mb-12 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="font-mono text-xs text-[#BC0000] font-black tracking-widest block mb-2 uppercase">
                Gestion des fonds
              </span>
              <h2 id="financial-title" className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tighter uppercase">
                CHAQUE EURO <span className="text-[#BC0000]">COMPTE.</span>
              </h2>
            </div>
            
            {/* Onglets de navigation */}
            <div className="flex gap-2" role="tablist" aria-label="Choix de la vue budgétaire">
              <button
                role="tab"
                aria-selected={activeTab === 'table'}
                aria-controls="budget-table"
                id="tab-table"
                className={`px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                  activeTab === 'table' 
                    ? 'bg-black text-white' 
                    : 'bg-white text-black hover:bg-black/10'
                }`}
                onClick={() => setActiveTab('table')}
              >
                Vue détaillée
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 'chart'}
                aria-controls="budget-chart"
                id="tab-chart"
                className={`px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                  activeTab === 'chart' 
                    ? 'bg-black text-white' 
                    : 'bg-white text-black hover:bg-black/10'
                }`}
                onClick={() => setActiveTab('chart')}
              >
                Vue graphique
              </button>
            </div>
          </div>
          
          <p className="font-serif text-xl md:text-2xl italic max-w-3xl opacity-80">
            "La transparence financière est notre engagement premier envers nos sociétaires et la communauté."
          </p>
        </div>

        {/* Contenu conditionnel selon l'onglet */}
        <div className="mb-12">
          <div 
            role="tabpanel"
            id="budget-table"
            aria-labelledby="tab-table"
            className={activeTab === 'table' ? 'block' : 'hidden'}
          >
            {/* Tableau des dépenses */}
            <div className="overflow-x-auto border-4 border-black bg-white">
              <table className="w-full" aria-label="Tableau détaillé du budget">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="p-4 text-left font-anton uppercase">Poste de dépense</th>
                    <th className="p-4 text-right font-anton uppercase">Montant</th>
                    <th className="p-4 text-right font-anton uppercase">Pourcentage</th>
                  </tr>
                </thead>
                <tbody>
                  {budget.map((item, index) => {
                    const amount = item.amount;
                    const percentage = totalBudget > 0 ? Math.round((amount / totalBudget) * 100) : 0;
                    
                    return (
                      <tr key={index} className="border-b border-black/20">
                        <td className="p-4 font-mono text-sm">{item.label}</td>
                        <td className="p-4 text-right font-mono font-bold text-[#BC0000]">
                          {amount.toLocaleString('fr-BE')}€
                        </td>
                        <td className="p-4 text-right font-mono">{percentage}%</td>
                      </tr>
                    );
                  })}
                  <tr className="bg-black/5 font-bold">
                    <td className="p-4 font-anton uppercase">Total de lancement</td>
                    <td className="p-4 text-right font-mono text-[#BC0000]">{totalBudget.toLocaleString('fr-BE')}€</td>
                    <td className="p-4 text-right font-mono">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div 
            role="tabpanel"
            id="budget-chart"
            aria-labelledby="tab-chart"
            className={activeTab === 'chart' ? 'block' : 'hidden'}
          >
            <DonutChart data={budget} />
          </div>
        </div>

        {/* Section des principes financiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 border-4 border-black">
            <h3 className="font-anton text-2xl mb-4 text-[#BC0000]">Zéro profit</h3>
            <p className="font-mono text-sm">
              100% des bénéfices sont réinvestis dans la lutte. Pas de dividendes, pas d'enrichissement personnel.
            </p>
          </div>
          
          <div className="bg-white p-6 border-4 border-black">
            <h3 className="font-anton text-2xl mb-4 text-[#BC0000]">Audit public</h3>
            <p className="font-mono text-sm">
              Les comptes sont audités annuellement et accessibles à tous les membres de la coopérative.
            </p>
          </div>
          
          <div className="bg-white p-6 border-4 border-black">
            <h3 className="font-anton text-2xl mb-4 text-[#BC0000]">Équité salariale</h3>
            <p className="font-mono text-sm">
              Tous les membres de l'équipe, quel que soit leur rôle, reçoivent la même rémunération de base.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialSectionEnhanced;
