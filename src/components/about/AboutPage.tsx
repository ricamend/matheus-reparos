import React from 'react';
import { ShieldCheck, HeartHandshake, Microscope } from 'lucide-react';
import { WhatsAppButton } from '../common/WhatsAppButton';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full py-12 bg-surface">
      <div className="max-w-container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-blue-100 text-secondary text-xs font-mono font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            Quem Somos
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight mb-4">
            Compromisso com Precisão &amp; Transparência
          </h1>
          <p className="font-sans text-base text-text-subdued leading-relaxed">
            Conheça a história de Matheus Reparos e como transformamos a experiência de assistência técnica com honestidade e padrão laboratorial.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-slate-700 font-sans leading-relaxed">
            <h2 className="font-heading font-bold text-2xl text-primary">
              Uma trajetória construída na confiança do cliente
            </h2>
            <p>
              Fundada por Matheus, técnico especialista com mais de 8 anos de experiência em hardware e microeletrônica, a <strong>Matheus Reparos</strong> nasceu para combater as práticas abusivas e a falta de clareza tão comuns no mercado de assistência técnica.
            </p>
            <p>
              Em vez de apenas "trocar peças", tratamos cada dispositivo como um equipamento de alto valor afetivo e profissional. Gravamos vídeos dos testes, mostramos os componentes substituídos e mantemos você informado em cada etapa do reparo.
            </p>
            <p>
              Hoje contamos com uma bancada moderna, microscópios de alta definição e insumos importados para recuperar o que muitas assistências rotulam como "sem conserto".
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-border-subtle shadow-sm">
                <span className="font-heading font-extrabold text-3xl text-secondary block">+3.500</span>
                <span className="text-xs font-mono text-text-subdued">Dispositivos Recuperados</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-border-subtle shadow-sm">
                <span className="font-heading font-extrabold text-3xl text-brand-green block">99.4%</span>
                <span className="text-xs font-mono text-text-subdued">Satisfação dos Clientes</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-border-subtle shadow-level-2 bg-white p-2">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpxSsZtPTDYLhhTIWjYaQlQo3gfOUskVnRc3MrW53lenxp93T1dCeXOEmLpMcvZLJTG-3Moi4u10jZk6IU5SA9Q6t9918YKPDKnPMke4VsAZGfKr9M9I3fKaBdNb4ZndaBNtrnC51roeOCubTflGGROTPlz-jFtk5B9faNlxqsVtkOT8IW6_hIf1JQoo2YKXreFq-bUkT_sFcptqc8QV17b3lFWuieBkDROcnokUw8WOGrWgNWZvK1"
                alt="Matheus no laboratório de eletrônica"
                className="rounded-xl w-full h-[360px] object-cover"
              />
              <div className="p-4 text-center font-mono text-xs text-text-subdued">
                Bancada antiestática de alta precisão calibrada periodicamente
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-secondary flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-primary mb-2">Integridade e Privacidade</h3>
            <p className="font-sans text-xs sm:text-sm text-text-subdued leading-relaxed">
              Respeito absoluto à sua privacidade e aos seus dados. Seus arquivos pessoais não são acessados nem modificados.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-brand-green flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-primary mb-2">Diagnóstico Honesto</h3>
            <p className="font-sans text-xs sm:text-sm text-text-subdued leading-relaxed">
              Se o problema for uma simples limpeza ou conector solto, você só paga pelo serviço realmente necessário.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <Microscope className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-primary mb-2">Rigor Científico</h3>
            <p className="font-sans text-xs sm:text-sm text-text-subdued leading-relaxed">
              Esquemas elétricos oficiais, multímetros calibrados Fluke e estações com temperatura regulada para cada tipo de chip.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-slate-900 rounded-2xl p-8 text-center text-white max-w-3xl mx-auto shadow-level-2">
          <h3 className="font-heading font-bold text-2xl mb-3">Traga seu aparelho para quem realmente entende</h3>
          <p className="text-slate-300 text-sm mb-6 max-w-lg mx-auto">
            Atendimento presencial com hora marcada ou envio facilitado via motoboy parceiro.
          </p>
          <WhatsAppButton message="Olá Matheus! Gostaria de agendar uma visita para avaliação do meu aparelho." />
        </div>

      </div>
    </div>
  );
};
