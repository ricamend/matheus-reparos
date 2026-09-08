import React, { useState } from 'react';
import { Logo } from '../common/Logo';
import { WhatsAppButton } from '../common/WhatsAppButton';
import type { NavTab } from '../../types';
import { Menu, X, Search, PhoneCall } from 'lucide-react';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'rastreio', label: 'Consultar OS' },
    { id: 'sobre', label: 'Sobre Nós' },
    { id: 'contato', label: 'Contato' },
  ];

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-border-subtle shadow-sm transition-all">
      <div className="max-w-container mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <div onClick={() => handleNavClick('home')}>
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-heading text-sm font-semibold">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`transition-colors relative py-2 ${
                currentTab === item.id
                  ? 'text-secondary font-bold'
                  : 'text-text-subdued hover:text-text-main'
              }`}
            >
              {item.label}
              {currentTab === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('rastreio')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-medium text-slate-700 bg-surface-subtle hover:bg-slate-200 border border-border-subtle rounded-lg transition-colors"
            title="Consultar Ordem de Serviço"
          >
            <Search className="w-3.5 h-3.5 text-secondary" />
            <span>Rastrear OS</span>
          </button>

          <WhatsAppButton variant="pill" message="Olá Matheus! Gostaria de tirar uma dúvida sobre reparo.">
            <span className="hidden sm:inline">Orçamento Rápido</span>
            <span className="sm:hidden">WhatsApp</span>
          </WhatsAppButton>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-primary rounded-lg focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border-subtle bg-white px-6 py-5 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-3 font-heading font-semibold text-base">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between text-left py-2.5 px-3 rounded-lg transition-colors ${
                  currentTab === item.id
                    ? 'bg-blue-50 text-secondary font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {item.id === 'rastreio' && (
                  <span className="text-xs bg-blue-100 text-secondary px-2 py-0.5 rounded font-mono">
                    Online
                  </span>
                )}
              </button>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:11999998888"
                className="flex items-center justify-center gap-2 text-slate-600 font-medium py-2 text-sm"
              >
                <PhoneCall className="w-4 h-4 text-secondary" />
                <span>(11) 99999-8888</span>
              </a>
              <WhatsAppButton className="w-full">
                Solicitar Diagnóstico no WhatsApp
              </WhatsAppButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
