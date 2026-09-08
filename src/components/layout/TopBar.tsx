import React from 'react';
import { ShieldCheck, Cpu, Zap, Clock } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-primary text-slate-300 py-1.5 hidden md:block border-b border-slate-800 text-xs">
      <div className="max-w-container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-6 font-mono text-[11px]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-greenLight" />
            <span>Garantia de 90 Dias</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-secondary-light" />
            <span>Peças Originais e Premium OEM</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Atendimento Rápido via WhatsApp</span>
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>Seg a Sex: 08h às 18h | Sáb: 08h às 13h</span>
        </div>
      </div>
    </div>
  );
};
