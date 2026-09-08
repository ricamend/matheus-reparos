import React from 'react';
import { Logo } from '../common/Logo';
import type { NavTab } from '../../types';
import { ShieldCheck, MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-primary text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-container mx-auto px-4 md:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo lightMode={true} />
            <p className="text-slate-400 text-xs sm:text-sm font-sans leading-relaxed">
              Laboratório especializado em manutenção de alta precisão para smartphones, MacBooks e notebooks. Peças selecionadas, micro-solda nível 3 e 90 dias de garantia em todos os serviços.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantia de 90 dias com laudo técnico</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans text-slate-400">
              <li>
                <button onClick={() => onSelectTab('home')} className="hover:text-white transition-colors">
                  Página Inicial
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('servicos')} className="hover:text-white transition-colors">
                  Catálogo de Serviços
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('rastreio')} className="hover:text-white transition-colors">
                  Consultar Ordem de Serviço (OS)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('sobre')} className="hover:text-white transition-colors">
                  Sobre o Laboratório
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('contato')} className="hover:text-white transition-colors">
                  Fale Conosco &amp; Endereço
                </button>
              </li>
            </ul>
          </div>

          {/* Services Quicklist (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-400">
              <li>Troca de Tela OLED</li>
              <li>Baterias Originais</li>
              <li>Micro-Solda Nível 3</li>
              <li>Recuperação de Placa</li>
              <li>Upgrade SSD &amp; RAM</li>
              <li>Limpeza Térmica</li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Localização &amp; Horário
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400 font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary-light flex-shrink-0 mt-0.5" />
                <span>Av. Paulista, 1000 - Sala 42, São Paulo - SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-greenLight flex-shrink-0" />
                <span>(11) 99999-8888 (WhatsApp)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary-light flex-shrink-0" />
                <span>contato@matheusreparos.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Seg a Sex 08h-18h | Sáb 08h-13h</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Matheus Reparos. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
