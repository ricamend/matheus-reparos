import React from 'react';
import { Microscope, ShieldAlert, Cpu, Wrench, CheckCircle } from 'lucide-react';
import { WhatsAppButton } from '../common/WhatsAppButton';

export const LabShowcase: React.FC = () => {
  const labFeatures = [
    {
      icon: Microscope,
      title: 'Microscópio Estereoscópico Trinocular',
      description: 'Inspeção cirúrgica de microtrilhas de até 0.02mm, solda de resistores SMD tamanho 0201 e jumpers de precisão.'
    },
    {
      icon: ShieldAlert,
      title: 'Proteção Antiestática ESD Nível 1',
      description: 'Mantas condutivas dissipativas, pulseiras aterradas e ionizadores de ar para proteger seus chips contra choques eletrostáticos invisíveis.'
    },
    {
      icon: Cpu,
      title: 'Estações de Solda & Retrabalho BGA',
      description: 'Controle microprocessado de temperatura digital com perfil de aquecimento sem empenar placas mãe de iPhones e MacBooks.'
    },
    {
      icon: Wrench,
      title: 'Chaves e Insumos Originais',
      description: 'Pastas térmicas Thermal Grizzly Kryonaut, estanho em pasta com fluxo limpo e ferramentas de torque calibrado.'
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-primary text-white relative overflow-hidden">
      {/* Circuit background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-blue-400/30">
              Infraestrutura Técnica
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-6">
              Padrão Laboratorial de Limpeza e Micro-Solda
            </h2>
            <p className="font-sans text-slate-300 text-base mb-8 leading-relaxed">
              Muitas assistências realizam trocas de peças sem os devidos cuidados eletrostáticos. No laboratório do Matheus, cada etapa segue normas internacionais de bancada eletrônica para garantir a longevidade do seu dispositivo.
            </p>

            <div className="space-y-4 mb-8">
              {labFeatures.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white">{item.title}</h4>
                      <p className="font-sans text-xs text-slate-300 mt-0.5 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <WhatsAppButton
              message="Olá Matheus! Gostaria de saber se você realiza reparo de placa para o meu modelo."
              className="w-full sm:w-auto text-center"
            >
              Consultar Especialista em Micro-Solda
            </WhatsAppButton>
          </div>

          {/* Right Showcase Image Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800 p-3">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpxSsZtPTDYLhhTIWjYaQlQo3gfOUskVnRc3MrW53lenxp93T1dCeXOEmLpMcvZLJTG-3Moi4u10jZk6IU5SA9Q6t9918YKPDKnPMke4VsAZGfKr9M9I3fKaBdNb4ZndaBNtrnC51roeOCubTflGGROTPlz-jFtk5B9faNlxqsVtkOT8IW6_hIf1JQoo2YKXreFq-bUkT_sFcptqc8QV17b3lFWuieBkDROcnokUw8WOGrWgNWZvK1"
                alt="Equipamentos técnicos e laboratório de reparos"
                className="rounded-xl w-full h-[380px] object-cover"
              />

              <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-greenLight" />
                  <span>Bancada Certificada ESD</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-greenLight" />
                  <span>Câmeras de Segurança 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-greenLight" />
                  <span>Termo de Sigilo de Dados</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
