import React from 'react';
import { SearchCheck, ShieldCheck, Sparkles, Clock } from 'lucide-react';

export const CredibilityBar: React.FC = () => {
  const items = [
    {
      icon: SearchCheck,
      title: 'Diagnóstico Claro',
      subtitle: 'Sem surpresas no orçamento',
      iconBg: 'bg-blue-50 text-secondary'
    },
    {
      icon: ShieldCheck,
      title: 'Garantia 90 Dias',
      subtitle: 'Com laudo e termo assinado',
      iconBg: 'bg-emerald-50 text-brand-green'
    },
    {
      icon: Sparkles,
      title: 'Peças de Procedência',
      subtitle: 'Originais e Premium OEM',
      iconBg: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Clock,
      title: 'Rapidez na Entrega',
      subtitle: 'Reparos rápidos em até 1h',
      iconBg: 'bg-amber-50 text-amber-600'
    }
  ];

  return (
    <section className="w-full bg-surface border-y border-border-subtle py-8">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-slate-300 transition-colors"
              >
                <div className={`w-11 h-11 rounded-lg ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-primary leading-tight">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-text-subdued mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
