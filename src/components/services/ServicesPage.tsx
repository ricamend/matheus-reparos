import React from 'react';
import { SERVICES_DATA } from '../../data/mockData';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { Smartphone, Laptop, Cpu } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="w-full py-12 bg-surface">
      <div className="max-w-container mx-auto px-4 md:px-8">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-blue-100 text-secondary text-xs font-mono font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            Catálogo Completo
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight mb-4">
            Serviços &amp; Tabela de Procedimentos
          </h1>
          <p className="font-sans text-base text-text-subdued leading-relaxed">
            Consulte nossos serviços para smartphones e computadores. Todos os reparos contam com checklist de entrada e saída, garantia de 90 dias e peças de qualidade atestada.
          </p>
        </div>

        {/* Categories Detail Section */}
        <div className="space-y-16">
          
          {/* 1. Smartphones */}
          <div>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border-subtle">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-secondary flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl text-primary">Smartphones &amp; Tablets</h2>
                <p className="font-mono text-xs text-text-subdued">Apple iPhone, Samsung Galaxy, Xiaomi, Motorola</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SERVICES_DATA.filter(s => s.category === 'smartphone').map(item => (
                <div key={item.id} className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-base text-primary mb-2">{item.title}</h3>
                    <p className="font-sans text-xs text-text-subdued mb-4 leading-relaxed">{item.description}</p>
                    <div className="space-y-1.5 font-mono text-xs text-slate-600 mb-4 bg-slate-50 p-3 rounded-lg">
                      <div className="flex justify-between">
                        <span>Tempo estimado:</span>
                        <strong className="text-primary">{item.estimatedTime}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Garantia:</span>
                        <strong className="text-brand-green">{item.warranty}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-heading font-bold text-lg text-primary">A partir de R$ {item.startingPrice}</span>
                    <WhatsAppButton message={`Olá! Gostaria de cotar: ${item.title}`} variant="pill" className="!px-3 !py-1 text-xs">
                      Cotar
                    </WhatsAppButton>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Notebooks */}
          <div>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border-subtle">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl text-primary">Notebooks &amp; MacBooks</h2>
                <p className="font-mono text-xs text-text-subdued">MacBook Air/Pro, Dell, Lenovo ThinkPad, Acer, ASUS</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SERVICES_DATA.filter(s => s.category === 'notebook').map(item => (
                <div key={item.id} className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-base text-primary mb-2">{item.title}</h3>
                    <p className="font-sans text-xs text-text-subdued mb-4 leading-relaxed">{item.description}</p>
                    <div className="space-y-1.5 font-mono text-xs text-slate-600 mb-4 bg-slate-50 p-3 rounded-lg">
                      <div className="flex justify-between">
                        <span>Tempo estimado:</span>
                        <strong className="text-primary">{item.estimatedTime}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Garantia:</span>
                        <strong className="text-brand-green">{item.warranty}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-heading font-bold text-lg text-primary">A partir de R$ {item.startingPrice}</span>
                    <WhatsAppButton message={`Olá! Gostaria de cotar: ${item.title}`} variant="pill" className="!px-3 !py-1 text-xs">
                      Cotar
                    </WhatsAppButton>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Micro-Solda & Placas */}
          <div>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border-subtle">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-xl text-primary">Laboratório Nível 3: Micro-Soldagem &amp; Recuperação</h2>
                <p className="font-mono text-xs text-text-subdued">Equipamentos que não ligam, curto-circuito, contato com água e queda severa</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES_DATA.filter(s => s.category === 'placa').map(item => (
                <div key={item.id} className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                      Alta Complexidade
                    </span>
                    <h3 className="font-heading font-bold text-lg text-primary mb-2">{item.title}</h3>
                    <p className="font-sans text-xs sm:text-sm text-text-subdued mb-4 leading-relaxed">{item.description}</p>
                    <div className="space-y-1.5 font-mono text-xs text-slate-600 mb-4 bg-slate-50 p-3 rounded-lg">
                      <div className="flex justify-between">
                        <span>Tempo estimado:</span>
                        <strong className="text-primary">{item.estimatedTime}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Garantia:</span>
                        <strong className="text-brand-green">{item.warranty}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-heading font-bold text-xl text-primary">A partir de R$ {item.startingPrice}</span>
                    <WhatsAppButton message={`Olá! Gostaria de cotar: ${item.title}`} variant="pill" className="!px-4 !py-1.5 text-xs">
                      Avaliar Placa
                    </WhatsAppButton>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
