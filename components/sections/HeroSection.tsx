import React, { useCallback, useMemo, useEffect, useState, useRef } from 'react';

interface HeroSectionProps {
  onScrollTo?: (sectionId: string) => void;
  scrollProgress?: number;
}

const HeroSectionEnhanced: React.FC<HeroSectionProps> = ({ 
  onScrollTo, 
  scrollProgress = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  
  // Suivi de la position de la souris pour effets parallaxe
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calcul des transformations parallaxe
  const parallaxTransform = useMemo(() => {
    const intensity = 20;
    return {
      transform: `translate(${mousePosition.x * intensity}px, ${mousePosition.y * intensity}px)`
    };
  }, [mousePosition]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerHeight = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      if (onScrollTo) {
        onScrollTo(id);
      }
    }
  }, [onScrollTo]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  // Données animées
  const stats = useMemo(() => [
    { label: 'Artistes engagés', value: '50+', suffix: '', color: '#BC0000' },
    { label: 'Communautés représentées', value: '15', suffix: '+', color: '#000' },
    { label: 'Villes partenaires', value: '5', suffix: '', color: '#000' },
    { label: 'Mois de préparation', value: '12', suffix: '', color: '#000' },
  ], []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#F2F0EB] via-white to-[#F2F0EB]"
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* Background dynamique */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Motifs décoratifs animés */}
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-[#BC0000] opacity-5 rounded-full"
          style={parallaxTransform}
          aria-hidden="true"
        ></div>
        <div 
          className="absolute top-3/4 right-1/4 w-96 h-96 border-2 border-black opacity-5 rounded-full"
          style={{
            ...parallaxTransform,
            transform: `${parallaxTransform.transform} rotate(${scrollProgress * 0.5}deg)`
          }}
          aria-hidden="true"
        ></div>
        
        {/* Grille subtile */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
          {Array.from({ length: 144 }).map((_, i) => (
            <div 
              key={i}
              className="border-r border-b border-black/5"
              aria-hidden="true"
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        {/* Badge animé */}
        <div className={`mb-8 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-4">
            <span className="font-mono text-xs font-black uppercase tracking-widest bg-[#BC0000] text-white px-4 py-2 rounded-full animate-pulse">
              🚀 Lancement 2025
            </span>
            <div className="h-px w-16 bg-black/20"></div>
            <span className="font-mono text-xs uppercase tracking-widest opacity-60">
              Étape 1/4
            </span>
          </div>
        </div>

        {/* Titre principal avec effet de révélation */}
        <h1 
          id="hero-title"
          className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9vw] leading-[0.8] tracking-tighter mb-8 md:mb-16 uppercase"
        >
          <span className={`block transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            FESTIVAL DES
          </span>
          <span className={`block text-[#BC0000] transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            SANS-PAPIERS
          </span>
          <span className={`block transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            À BRUXELLES
          </span>
        </h1>

        {/* Sous-titre */}
        <div className={`max-w-3xl mb-12 md:mb-24 transition-all duration-800 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl italic leading-tight border-l-4 border-[#BC0000] pl-6 md:pl-8">
            "Un espace où la culture devient outil de lutte, et la lutte devient culture."
          </blockquote>
        </div>

        {/* Stats animées */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-24 transition-all duration-900 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-4 md:p-6 border-2 border-black rounded-lg shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="font-anton text-3xl md:text-4xl mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}<span className="text-lg">{stat.suffix}</span>
              </div>
              <div className="font-mono text-xs uppercase tracking-widest opacity-70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Boutons d'action */}
        <div className={`flex flex-col sm:flex-row gap-4 md:gap-8 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button
            onClick={() => scrollTo('but')}
            className="group bg-black text-white font-anton text-lg md:text-2xl px-8 md:px-12 py-4 md:py-6 rounded-lg hover:bg-[#BC0000] transition-all duration-300 transform hover:-translate-y-1 shadow-[8px_8px_0px_0px_rgba(188,0,0,1)] flex items-center justify-center gap-3"
            aria-label="Découvrir notre mission"
          >
            <span>Découvrir le projet</span>
            <svg 
              className="w-6 h-6 group-hover:translate-y-1 transition-transform"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
          
          <button
            onClick={() => scrollTo('transparence')}
            className="group bg-white text-black border-2 border-black font-anton text-lg md:text-2xl px-8 md:px-12 py-4 md:py-6 rounded-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-3"
            aria-label="Voir la transparence financière"
          >
            <span>Transparence financière</span>
            <svg 
              className="w-6 h-6 group-hover:rotate-12 transition-transform"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>

        {/* Indicateur de défilement */}
        <div 
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1200 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          role="navigation"
          aria-label="Défiler vers le bas"
        >
          <button
            onClick={() => scrollTo('but')}
            className="flex flex-col items-center gap-2 group"
            aria-label="Défiler vers la section suivante"
          >
            <span className="font-mono text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
              Défiler
            </span>
            <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center p-1 group-hover:border-[#BC0000] transition-colors">
              <div className="w-1 h-3 bg-black rounded-full animate-bounce group-hover:bg-[#BC0000] transition-colors"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionEnhanced;