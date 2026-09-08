import React from 'react';
import { TESTIMONIALS } from '../../data/mockData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-secondary px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-3">
            Avaliações Verificadas
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight">
            A Opinião de Quem Confia no Nosso Trabalho
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-subdued mt-2">
            Mais de 3.500 clientes atendidos com transparência, rapidez e peças de primeira linha.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-border-subtle shadow-sm hover:shadow-level-2 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200" />
                </div>

                <p className="font-sans text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-primary flex items-center gap-1.5">
                    {item.author}
                    <span title="Cliente Verificado">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                    </span>
                  </h4>
                  <p className="font-mono text-xs text-text-subdued">{item.role}</p>
                </div>
                <span className="font-mono text-[11px] bg-slate-100 text-slate-600 px-2 py-1 rounded">
                  {item.device}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
