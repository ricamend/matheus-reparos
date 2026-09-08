import React from 'react';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { ShieldCheck, Cpu, CheckCircle2, ArrowRight, Award, Zap } from 'lucide-react';
import type { NavTab } from '../../types';

interface HeroSectionProps {
  onNavigate: (tab: NavTab) => void;
  onOpenCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenCalculator }) => {
  return (
    <section className="relative w-full overflow-hidden bg-surface pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle ambient lighting glows */}
      <div className="absolute -top-28 -left-28 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] rounded-full bg-blue-50/80 blur-3xl pointer-events-none" />

      <div className="max-w-container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 bg-blue-50/90 border border-blue-100 px-4 py-1.5 rounded-full shadow-sm mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
              <span className="font-mono text-xs text-secondary font-bold tracking-wide uppercase">
                ⚡ Atendimento Ágil &amp; Diagnóstico Transparente
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight leading-[1.15] mb-6">
              Resolva os problemas de seus eletrônicos{' '}
              <span className="text-secondary relative whitespace-nowrap">
                com quem entende
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2.5 text-blue-200 fill-current -z-10"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path d="M0,5 C50,0 150,8 200,4 L200,8 L0,8 Z" />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg text-text-subdued max-w-2xl mb-8 leading-relaxed">
              Pequenos reparos, instalações e manutenção especializada para seu smartphone e notebook. Agilidade, peças de procedência e garantia de 90 dias com quem cuida do seu dispositivo como se fosse próprio.
            </p>

            {/* CTAs */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <WhatsAppButton
                message="Olá Matheus! Vi o seu site e gostaria de um orçamento para reparo do meu equipamento."
                className="w-full sm:w-auto text-center"
              >
                Pedir Orçamento Grátis via WhatsApp
              </WhatsAppButton>

              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-primary border border-border-subtle hover:border-slate-300 px-6 py-3 rounded-xl font-heading font-semibold text-sm md:text-base shadow-sm transition-all"
              >
                <span>Calcular Valor Estimado</span>
                <ArrowRight className="w-4 h-4 text-secondary" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
              <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md border border-emerald-100 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                Sem perda de dados
              </span>
              <button
                type="button"
                onClick={() => onNavigate('sobre')}
                className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 font-semibold transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                Laboratório ESD Antiestático
              </button>
              <button
                type="button"
                onClick={() => onNavigate('servicos')}
                className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 font-semibold transition-colors"
              >
                <Cpu className="w-3.5 h-3.5 text-secondary" />
                Micro-Solda Nível 3
              </button>
            </div>
          </div>

          {/* Right Column (5 cols) - Visual Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md bg-white p-2.5 rounded-2xl shadow-level-2 border border-border-subtle">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-slate-100 group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpxSsZtPTDYLhhTIWjYaQlQo3gfOUskVnRc3MrW53lenxp93T1dCeXOEmLpMcvZLJTG-3Moi4u10jZk6IU5SA9Q6t9918YKPDKnPMke4VsAZGfKr9M9I3fKaBdNb4ZndaBNtrnC51roeOCubTflGGROTPlz-jFtk5B9faNlxqsVtkOT8IW6_hIf1JQoo2YKXreFq-bUkT_sFcptqc8QV17b3lFWuieBkDROcnokUw8WOGrWgNWZvK1"
                  alt="Laboratório técnico de reparos em smartphones e notebooks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="font-heading text-xs font-bold tracking-wide">BANCADA OFICIAL MATHEUS REPAROS</p>
                  <p className="text-[11px] text-slate-300 font-mono">Microscópio Estereoscópico &amp; Estação Yihua</p>
                </div>
              </div>

              {/* Floating Counter Card */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-xl p-3.5 shadow-level-3 border border-slate-100 flex items-center gap-3 max-w-[260px]">
                <div className="w-11 h-11 rounded-lg bg-emerald-100 flex items-center justify-center text-brand-green flex-shrink-0">
                  <Award className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <p className="font-heading font-extrabold text-2xl text-primary leading-tight">+3.500</p>
                  <p className="font-mono text-[11px] text-text-subdued leading-tight">aparelhos recuperados com sucesso</p>
                </div>
              </div>

              {/* Floating Lab Quality Pill */}
              <div className="absolute -top-3.5 -right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-level-2 border border-blue-100 flex items-center gap-1.5 text-secondary">
                <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span className="font-mono text-xs font-bold text-primary">Lab Nível 3 Micro-Solda</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
