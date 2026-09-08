import { useState } from 'react';
import { SERVICES_DATA } from '../../data/mockData';
import { Smartphone, Laptop, Cpu, Clock, Shield } from 'lucide-react';
import { WhatsAppButton } from '../common/WhatsAppButton';

export const ServicesGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'smartphone' | 'notebook' | 'placa'>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'smartphone': return Smartphone;
      case 'notebook': return Laptop;
      case 'placa': return Cpu;
      default: return Cpu;
    }
  };

  return (
    <section id="servicos-grid" className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100/70 text-secondary font-mono text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              Nossas Especialidades
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight">
              Serviços de Alta Precisão &amp; Manutenção
            </h2>
            <p className="font-sans text-text-subdued text-base max-w-xl mt-2">
              Equipamentos de ponta e técnicas avançadas para recuperar seu dispositivo com total segurança.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-border-subtle rounded-xl shadow-sm overflow-x-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-heading font-semibold transition-colors whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-subdued hover:text-primary hover:bg-slate-50'
              }`}
            >
              Todos os Serviços
            </button>
            <button
              onClick={() => setActiveCategory('smartphone')}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-heading font-semibold transition-colors whitespace-nowrap ${
                activeCategory === 'smartphone'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-subdued hover:text-primary hover:bg-slate-50'
              }`}
            >
              Smartphones
            </button>
            <button
              onClick={() => setActiveCategory('notebook')}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-heading font-semibold transition-colors whitespace-nowrap ${
                activeCategory === 'notebook'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-subdued hover:text-primary hover:bg-slate-50'
              }`}
            >
              Notebooks
            </button>
            <button
              onClick={() => setActiveCategory('placa')}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-heading font-semibold transition-colors whitespace-nowrap ${
                activeCategory === 'placa'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-subdued hover:text-primary hover:bg-slate-50'
              }`}
            >
              Placa / Micro-Solda
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const Icon = getCategoryIcon(service.category);
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-6 border border-border-subtle hover:border-blue-300 hover:shadow-level-2 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Popular pill */}
                {service.popular && (
                  <span className="absolute -top-3 right-4 bg-secondary text-white font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                    POPULAR
                  </span>
                )}

                <div>
                  {/* Icon & Category */}
                  <div className="w-12 h-12 rounded-xl bg-surface-containerLow group-hover:bg-blue-600 transition-colors flex items-center justify-center text-secondary group-hover:text-white mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg text-primary group-hover:text-secondary transition-colors mb-2 leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-text-subdued line-clamp-3 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Specs */}
                  <div className="space-y-2 py-3 border-y border-slate-100 font-mono text-xs text-slate-600 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-text-subdued">
                        <Clock className="w-3.5 h-3.5 text-secondary" />
                        Tempo estimado:
                      </span>
                      <span className="font-semibold text-primary">{service.estimatedTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-text-subdued">
                        <Shield className="w-3.5 h-3.5 text-brand-green" />
                        Garantia:
                      </span>
                      <span className="font-semibold text-primary">{service.warranty}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-slate-100 text-slate-600 text-[10px] font-mono px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="block font-mono text-[10px] text-text-subdued uppercase">A partir de</span>
                    <span className="font-heading font-extrabold text-xl text-primary">
                      R$ {service.startingPrice}
                    </span>
                  </div>

                  <WhatsAppButton
                    message={`Olá Matheus! Gostaria de cotar o serviço: ${service.title}.`}
                    variant="pill"
                    className="!px-3 !py-1.5 text-xs"
                  >
                    Cotar
                  </WhatsAppButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-level-2">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300 flex-shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg">
                Não encontrou o defeito do seu aparelho?
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm">
                Fazemos diagnóstico minucioso em bancada para casos raros e defeitos intermitentes.
              </p>
            </div>
          </div>
          <WhatsAppButton
            message="Olá Matheus! Meu aparelho está com um problema específico e gostaria de uma avaliação personalizada."
            className="whitespace-nowrap w-full sm:w-auto text-center"
          >
            Falar com Matheus
          </WhatsAppButton>
        </div>

      </div>
    </section>
  );
};
