import React from 'react';
import { useAppContext } from '../../context/AppContext';

const VSPDetail: React.FC = () => {
  const { dispatch } = useAppContext();

  return (
    <article className="max-w-[1300px] mx-auto px-8 py-24 text-black">
      
      {/* HEADER PRINCIPAL */}
      <header className="mb-32 border-b-[12px] border-black pb-16 relative">
        <div className="flex justify-between items-baseline mb-8">
          <span className="font-mono text-sm text-[#BC0000] font-black tracking-[0.3em] uppercase italic">
            Affirmation du Sujet Politique
          </span>
          <span className="font-mono text-xs opacity-40">BRUXELLES / EST. 2014</span>
        </div>
        <h1 className="font-anton text-[10vw] leading-[0.8] tracking-tighter uppercase">
          LA VOIX DES <br/>
          <span className="text-[#BC0000]">SANS-PAPIERS.</span>
        </h1>
        <div className="mt-12 max-w-4xl">
          <p className="font-serif text-4xl lg:text-5xl italic leading-tight text-black/90">
            Un collectif autogéré à Bruxelles, fondé en 2014, qui organise, revendique et rend visible les droits des personnes sans titre de séjour.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* CONTENU PRINCIPAL */}
        <div className="lg:col-span-8 space-y-32">

          {/* 01. IDENTITÉ & AUTOGESTION */}
          <section className="relative">
            <span className="absolute -left-12 top-0 font-anton text-6xl opacity-10">01</span>
            <h2 className="font-anton text-5xl uppercase mb-10 border-b-2 border-black inline-block">
              Identité & Auto-gestion
            </h2>
            <div className="font-mono text-lg leading-relaxed space-y-6">
              <p>
                La VSP Bruxelles est née en 2014 d'une occupation de bâtiment public pour revendiquer la régularisation de toutes les personnes sans papiers. Ce n’est pas une association classique : c’est un espace de vie collective et de lutte où les membres prennent toutes les décisions.
              </p>
              <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-anton text-2xl mb-4 text-[#BC0000]">Principes d'autogestion</h3>
                <ul className="list-none space-y-3 text-sm font-bold">
                  <li>— Décisions par assemblées générales souveraines</li>
                  <li>— Charte définie par et pour les membres</li>
                  <li>— Indépendance totale des alliés et partenaires extérieurs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 02. REVENDICATIONS POLITIQUES */}
          <section className="bg-black text-white p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-anton text-9xl opacity-5">LUTTE</div>
            <h2 className="font-anton text-5xl uppercase text-[#BC0000] mb-12">Plateforme de revendications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-[#BC0000] pl-6">
                <h4 className="font-anton text-xl mb-2">Régularisation totale</h4>
                <p className="font-mono text-xs opacity-60">
                  Droit inconditionnel pour toutes les personnes sans titre de séjour, indépendamment de leur emploi ou revenu. Illustré par des occupations et actions collectives.
                </p>
              </div>
              <div className="border-l-4 border-white/20 pl-6">
                <h4 className="font-anton text-xl mb-2">Abolition des centres</h4>
                <p className="font-mono text-xs opacity-60">
                  Fin des expulsions et des centres de rétention. La VSP participe activement aux campagnes de mobilisation nationale.
                </p>
              </div>
              <div className="border-l-4 border-white/20 pl-6">
                <h4 className="font-anton text-xl mb-2">Droits fondamentaux</h4>
                <p className="font-mono text-xs opacity-60">
                  Accès à la santé, l’éducation, le logement et le travail pour tous, sans condition de statut administratif.
                </p>
              </div>
              <div className="border-l-4 border-[#BC0000] pl-6">
                <h4 className="font-anton text-xl mb-2">Liberté de circulation</h4>
                <p className="font-mono text-xs opacity-60">
                  Reconnaissance de la contribution socio-économique et fiscale des personnes sans papiers, et droit de circuler librement.
                </p>
              </div>
            </div>
          </section>

          {/* 03. ACTIONS & STRATEGIES */}
          <section className="space-y-12">
            <h2 className="font-anton text-5xl uppercase border-b-2 border-black inline-block">Répertoire d'action</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="font-anton text-2xl italic">Occupation & Grèves</h3>
                <p className="font-mono text-sm leading-relaxed opacity-70">
                  La VSP organise des occupations de bâtiments et des grèves coordonnées (bâtiment, services) pour se faire entendre. Ces actions ne sont pas des cris de détresse : elles affirment le rôle de <strong>personnes actrices de leur destin politique</strong>.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-anton text-2xl italic">Culture & Récits</h3>
                <p className="font-mono text-sm leading-relaxed opacity-70">
                  Chorales de femmes, oralité et récits militants sont utilisés pour briser l’invisibilité sociale et créer des solidarités autour de l’expérience vécue.
                </p>
              </div>
            </div>
          </section>

          {/* 04. PRISME CONCEPTUEL */}
          <section className="bg-[#F2F0EB] p-16 border-y-4 border-black">
            <h2 className="font-anton text-4xl mb-8 uppercase tracking-tighter">Citoyenneté vs Statut</h2>
            <div className="font-serif text-2xl lg:text-3xl leading-snug space-y-8 opacity-90 italic">
              <p>
                La voix des sans-papiers engage une tension : être entendu comme sujet porteur de droits égaux aux citoyens titulaires.
              </p>
              <p className="text-xl not-italic font-mono opacity-70">
                L’« Active Citizenship » exercée sur le terrain se heurte à l’absence de redistribution juridique. Les actions concrètes de la VSP transforment cette théorie en pratiques de dignité et d’égalité.
              </p>
            </div>
          </section>

        </div>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4">
          <div className="sticky top-40 space-y-12">

            {/* Réseaux Européens */}
            <div className="p-8 border-4 border-black bg-white shadow-[10px_10px_0px_0px_rgba(188,0,0,1)]">
              <h3 className="font-anton text-2xl mb-6 uppercase">Échelle européenne</h3>
              <p className="font-mono text-xs opacity-60 mb-6 leading-relaxed">
                La VSP s’inscrit dans un réseau européen avec <strong>PICUM</strong> (Platform for International Cooperation on Undocumented Migrants) pour relier actions locales et plaidoyer international.
              </p>
              <div className="h-px bg-black/10 mb-6"></div>
              <span className="font-anton text-sm text-[#BC0000] tracking-widest uppercase">Solidarité Transnationale</span>
            </div>

            {/* Note philosophique */}
            <div className="p-8 bg-black text-white space-y-6">
              <h4 className="font-anton text-xl uppercase text-[#BC0000]">La personne politique</h4>
              <p className="font-serif text-lg italic opacity-80">
                La lutte pour les droits des sans-papiers est une affirmation de dignité politique et d’égalité substantielle.
              </p>
            </div>

            {/* CTA Soutien */}
            <div className="space-y-4">
              <button 
                onClick={() => dispatch({type: 'SET_VIEW', payload: 'cooperative'})}
                className="w-full bg-[#BC0000] text-white font-anton text-2xl py-8 hover:bg-black transition-all shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
              >
                SOUTENIR LE CYCLE
              </button>
              <p className="font-mono text-[10px] text-center opacity-40 uppercase">
                100% des bénéfices financent cette vision
              </p>
            </div>

          </div>
        </aside>
      </div>

      {/* FOOTER */}
      <footer className="mt-48 pt-24 border-t-8 border-black flex flex-col items-center">
        <h3 className="font-anton text-3xl mb-12">Explorer les autres composantes du bloc</h3>
        <div className="flex flex-wrap justify-center gap-12">
          <button onClick={() => dispatch({type:'SET_VIEW', payload:'project'})} className="font-mono text-sm font-bold border-b-2 border-black hover:text-[#BC0000] hover:border-[#BC0000]">Le modèle tournant</button>
          <button onClick={() => dispatch({type:'SET_VIEW', payload:'tour'})} className="font-mono text-sm font-bold border-b-2 border-black hover:text-[#BC0000] hover:border-[#BC0000]">La territorialisation</button>
          <button onClick={() => dispatch({type:'SET_VIEW', payload:'finances'})} className="font-mono text-sm font-bold border-b-2 border-black hover:text-[#BC0000] hover:border-[#BC0000]">Souveraineté financière</button>
        </div>
      </footer>

    </article>
  );
};

export default VSPDetail;
