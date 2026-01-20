
import React from 'react';
import { useAppContext } from '../../context/AppContext';

const TourDetail: React.FC = () => {
  const { dispatch } = useAppContext();

  return (
    <article className="max-w-[1200px] mx-auto px-8 py-24 text-black">
      <header className="mb-24 border-b-8 border-black pb-16">
        <span className="font-mono text-sm text-[#BC0000] font-black tracking-widest block mb-4 uppercase italic">Organisation Territoriale</span>
        <h1 className="font-anton text-[8vw] leading-[0.9] tracking-tighter uppercase mb-8">LA TOURNÉE DES <br/><span className="text-[#BC0000]">QUARTIERS.</span></h1>
        <p className="font-serif text-3xl italic max-w-3xl leading-tight opacity-70">
          Cette page détaille le fonctionnement de la tournée, ses objectifs financiers et les modalités de collaboration avec les lieux d'accueil.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Colonne Principale */}
        <div className="lg:col-span-8 space-y-24">
          
          <section className="space-y-6">
            <h2 className="font-anton text-4xl uppercase border-b-2 border-black pb-2">Qu'est-ce que la tournée ?</h2>
            <div className="font-mono text-lg leading-relaxed space-y-4">
              <p>La tournée est la phase de territorialisation du projet. Elle consiste en un cycle de soirées organisées dans les différentes communes de Bruxelles.</p>
              <p>Il ne s'agit pas d'une série d'événements promotionnels, mais d'une partie intégrante du festival. La tournée et le festival national forment un bloc indivisible.</p>
              <p>Chaque soirée est un moment de prise de parole politique et un outil de levée de fonds pour la structure globale.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-anton text-4xl uppercase border-b-2 border-black pb-2">Quels sont les objectifs de la tournée ?</h2>
            <div className="font-mono text-lg leading-relaxed space-y-4">
              <p>La tournée poursuit deux objectifs précis et indissociables :</p>
              <ul className="list-none space-y-6 pl-6 border-l-4 border-[#BC0000]">
                <li>
                  <strong>1. Financer le festival national :</strong> 
                  Le budget global est estimé entre 100 000 et 150 000 euros. Les recettes générées par les soirées (bar, entrées) sont prioritairement affectées à l'atteinte de cet objectif.
                </li>
                <li>
                  <strong>2. Visibiliser le collectif parrain :</strong> 
                  Chaque étape est une tribune pour La Voix des Sans-Papiers (VSP). C'est l'occasion de présenter leurs revendications et leur actualité à un public local, quartier par quartier.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-anton text-4xl uppercase border-b-2 border-black pb-2">Comment fonctionne une soirée de quartier ?</h2>
            <div className="font-mono text-lg leading-relaxed space-y-4">
              <p>L'organisation repose sur une collaboration entre la coopérative, le collectif parrain et un lieu d'accueil (centre culturel, café associatif, salle privée).</p>
              <p><strong>Concrètement :</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>La coopérative assure la logistique technique et la coordination.</li>
                <li>Le collectif VSP assure le contenu politique et la prise de parole.</li>
                <li>Le lieu d'accueil met à disposition son infrastructure et son ancrage local.</li>
              </ul>
              <p>Les bénéfices de la soirée sont intégralement reversés au budget du festival. Ce choix est assumé pour garantir l'indépendance et la tenue de l'événement national.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-anton text-4xl uppercase border-b-2 border-black pb-2">Territorialisation et Soutien des Salles</h2>
            <div className="font-mono text-lg leading-relaxed space-y-4">
              <p>Pour les salles partenaires, accueillir une étape de la tournée est un acte de soutien politique clair. Il s'agit de mettre l'institution culturelle au service de la lutte.</p>
              <p>Nous recherchons des lieux qui acceptent que les recettes du bar ou des entrées soient fléchées vers le festival, reconnaissant ainsi que l'infrastructure culturelle est un levier de souveraineté pour les sans-papiers.</p>
            </div>
          </section>

        </div>

        {/* Sidebar d'Action */}
        <aside className="lg:col-span-4">
          <div className="sticky top-40 space-y-8">
            <div className="bg-[#F2F0EB] p-8 border-4 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-anton text-3xl mb-6 uppercase text-[#BC0000]">CHIFFRES CLÉS</h3>
              <div className="space-y-6 font-mono text-sm uppercase font-bold">
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <span>Objectif Global</span>
                  <span>150.000€</span>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <span>Étapes Quartiers</span>
                  <span>10 à 12 soirées</span>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <span>Bénéficiaire</span>
                  <span>VSP BXL</span>
                </div>
              </div>
            </div>

            <div className="p-8 border-4 border-black bg-black text-white space-y-6">
              <h4 className="font-anton text-2xl uppercase">Accueillir la tournée</h4>
              <p className="font-mono text-xs opacity-70">
                Si vous représentez un lieu prêt à participer à la territorialisation de la lutte.
              </p>
              <a 
                href="mailto:fhzegert@gmail.com?subject=Territorialisation - Proposition de lieu"
                className="block w-full bg-[#BC0000] text-white text-center font-anton text-xl py-4 hover:bg-white hover:text-black transition-all cursor-pointer"
              >
                CONTACTER LA COORDINATION
              </a>
            </div>
          </div>
        </aside>
      </div>

      <footer className="mt-32 pt-16 border-t-4 border-black text-center">
        <button 
          onClick={() => dispatch({type: 'SET_VIEW', payload: 'project'})}
          className="font-anton text-4xl hover:text-[#BC0000] transition-all uppercase"
        >
          DÉCOUVRIR LE MODÈLE DE PARRAINAGE →
        </button>
      </footer>
    </article>
  );
};

export default TourDetail;
