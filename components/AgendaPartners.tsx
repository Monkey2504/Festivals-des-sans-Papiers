
import React from 'react';
import { PARTNERS } from '../constants';
import { TranslationSet } from '../types';

interface Props {
  t: TranslationSet['common'];
}

const AgendaPartners: React.FC<Props> = ({ t }) => {
  return (
    <div className="space-y-4">
      {PARTNERS.map((partner, idx) => (
        <article
          key={partner.id}
          className="group bg-white border border-black/8 rounded-sm overflow-hidden shadow-sm flex flex-col sm:flex-row"
        >
          <div className="w-full sm:w-48 h-40 sm:h-auto shrink-0 overflow-hidden">
            <img
              src={partner.imageUrl}
              alt={partner.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <div className="flex-grow p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/40 mb-1">
                  {partner.location}
                </p>
                <h3 className="font-serif italic text-xl text-black group-hover:text-[#BC0000] transition-colors">
                  {partner.name}
                </h3>
              </div>
              <span className="font-mono text-[10px] text-[#BC0000] tracking-widest shrink-0">
                {idx < 9 ? `0${idx + 1}` : idx + 1}
              </span>
            </div>

            <p className="text-sm text-black/60 leading-relaxed mb-4">{partner.description}</p>

            <div className="flex items-center gap-4">
              <span className="bg-[#F2F0EB] text-black/50 font-mono text-[9px] px-2.5 py-1 rounded-sm uppercase tracking-widest">
                Lieu d'accueil
              </span>
              <span className="bg-[#BC0000]/5 text-[#BC0000] font-mono text-[9px] px-2.5 py-1 rounded-sm uppercase tracking-widest">
                Zone de solidarité
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default AgendaPartners;
