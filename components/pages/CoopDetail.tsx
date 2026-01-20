
import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { APP_CONFIG } from '../../constants';

const CoopDetail: React.FC = () => {
  const { dispatch } = useAppContext();

  return (
    <article className="max-w-[1200px] mx-auto px-8 py-24 text-black">
      <header className="mb-24 border-b-8 border-black pb-16">
        <span className="font-mono text-sm text-[#BC0000] font-black tracking-widest block mb-4 uppercase italic">L'Infrastructure de Lutte</span>
        <h1 className="font-anton text-[8vw] leading-[0.9] tracking-tighter uppercase mb-8">LA <br/><span className="text-[#BC0000]">COOPÉRATIVE.</span></h1>
        <p className="font-serif text-3xl italic max-w-3xl leading-tight opacity-70">
          Une structure conçue pour être possédée par ceux qui l'utilisent. Voici comment nous bâtissons notre souveraineté.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Colonne Principale */}
        <div className="lg:col-span-8 space-y-24">
          
          <section className="space-y-6">
            <h2 className="font-anton text-4xl uppercase border-b-2 border-black pb-2">Stratégie de Fondation : Deux Phases</h2>
            <div className="font-mono text-lg leading-relaxed space-y-4">
              <p>Notre autonomie se construit sur deux piliers financiers et humains distincts mais complémentaires :</p>
              <ul className="list-none space-y-6 pl-6 border-l-4 border-[#BC0000]">
                <li>
                  <strong className="text-[#BC0000]">PHASE 1 : Le Capital d'Outil (15 000€)</strong><br/>
                  Un crowdfunding immédiat pour financer l'achat du matériel technique, la création juridique de l'ASBL "The Movment" et le lancement de la tournée. C'est le moteur de départ.
                </li>
                <li>
                  <strong className="text-[#BC0000]">PHASE 2 : La Souveraineté Humaine (150 Fondateurs)</strong><br/>
                  La recherche de 150 co-fondateurs pour porter l'infrastructure. Ce collège de fondateurs garantit la stabilité et la vision politique à long terme de l'outil.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-anton text-4xl uppercase border-b-2 border-black pb-2">Accessibilité : Le Membre en Lutte</h2>
            <div className="font-mono text-lg leading-relaxed space-y-4">
              <p>La coopérative refuse d'être un club d'investisseurs. Sa force réside dans sa capacité à être habitée par les personnes sans-papiers elles-mêmes.</p>
              <div className="p-8 bg-black text-white space-y-4 border-l-8 border-[#BC0000]">
                <h3 className="font-anton text-2xl uppercase">Le modèle à 3€ / mois</h3>
                <p>Pour permettre aux personnes sans titre de séjour d'être membres à part entière de la coopérative malgré l'urgence économique, nous instaurons une <strong>part de solidarité active</strong>.</p>
                <p>En contribuant à hauteur de <strong>3€ par mois</strong>, tout membre d'un collectif en lutte accède au même droit de vote et à la même souveraineté décisionnelle qu'un co-fondateur ayant investi 100€.</p>
              </div>
              <p>Cette approche garantit que la direction politique de l'outil reste entre les mains des personnes concernées, indépendamment de leur capital financier.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-anton text-4xl uppercase border-b-2 border-black pb-2">Répartition du Capital initial (15 000€)</h2>
            <div className="font-mono text-lg leading-relaxed space-y-4">
              <p>Chaque euro du crowdfunding est fléché vers l'autonomie technique :</p>
              <div className="overflow-x-auto border-4 border-black">
                <table className="w-full text-left">
                  <thead className="bg-black text-white">
                    <tr>
                      <th className="p-4 font-anton uppercase">Poste de Souveraineté</th>
                      <th className="p-4 font-anton uppercase text-right">Montant</th>
                    </tr>
                  </thead>
                  <tbody>
                    {APP_CONFIG.BUDGET_DETAILS.map((b, i) => (
                      <tr key={i} className="border-b border-black/10 hover:bg-[#BC0000]/5 transition-colors">
                        <td className="p-4 uppercase text-xs font-bold">{b.label}</td>
                        <td className="p-4 text-right font-anton text-2xl">{b.amount}€</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar d'Action */}
        <aside className="lg:col-span-4">
          <div className="sticky top-40 space-y-8">
            <div className="bg-white p-8 border-4 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-anton text-3xl mb-6 uppercase text-[#BC0000]">ÉTAT DE L'OUTIL</h3>
              <div className="space-y-6 font-mono text-sm uppercase font-bold">
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <span>Crowdfunding (15k)</span>
                  <span className="text-xl">7.450€</span>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <span>Fondateurs (150)</span>
                  <span className="text-xl">74</span>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <span>Membres en Lutte</span>
                  <span className="text-xl text-[#BC0000]">80+</span>
                </div>
              </div>
            </div>

            <div className="p-8 border-4 border-black bg-black text-white space-y-6">
              <h4 className="font-anton text-2xl uppercase">Rejoindre la structure</h4>
              <p className="font-mono text-xs opacity-70 leading-relaxed">
                Que vous soyez co-fondateur (100€) ou membre en lutte (3€/mois), votre voix est identique.
              </p>
              <button className="w-full bg-[#BC0000] text-white font-anton text-xl py-4 hover:bg-white hover:text-black transition-all cursor-pointer">
                SOUSCRIRE À L'OUTIL
              </button>
            </div>
            
            <div className="p-6 border-2 border-black border-dashed font-mono text-[10px] uppercase opacity-50">
              Note : La coopérative "The Movment" est une ASBL à finalité sociale. Aucun profit n'est redistribué aux membres.
            </div>
          </div>
        </aside>
      </div>

      <footer className="mt-32 pt-16 border-t-4 border-black text-center">
        <button 
          onClick={() => dispatch({type: 'SET_VIEW', payload: 'pact'})}
          className="font-anton text-4xl hover:text-[#BC0000] transition-all uppercase cursor-pointer"
        >
          LIRE LE PACTE DE GOUVERNANCE →
        </button>
      </footer>
    </article>
  );
};

export default CoopDetail;
