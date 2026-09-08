import React, { useState } from 'react';
import { SAMPLE_ORDERS } from '../../data/mockData';
import type { OrderStatus } from '../../types';
import { Search, CheckCircle2, Clock, FileText, AlertCircle, Sparkles } from 'lucide-react';
import { WhatsAppButton } from '../common/WhatsAppButton';

export const OrderStatusTracker: React.FC = () => {
  const [searchCode, setSearchCode] = useState<string>('MR-2026-0842');
  const [currentOrder, setCurrentOrder] = useState<OrderStatus | null>(SAMPLE_ORDERS['MR-2026-0842']);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = searchCode.trim().toUpperCase();
    if (SAMPLE_ORDERS[cleanCode]) {
      setCurrentOrder(SAMPLE_ORDERS[cleanCode]);
      setErrorMsg(null);
    } else {
      setErrorMsg(`Ordem de serviço "${cleanCode}" não encontrada no sistema de demonstração. Tente: MR-2026-0842, MR-2026-0915 ou MR-2026-0770.`);
    }
  };

  const selectSample = (code: string) => {
    setSearchCode(code);
    setCurrentOrder(SAMPLE_ORDERS[code]);
    setErrorMsg(null);
  };

  return (
    <section id="rastreio-os" className="w-full py-16 lg:py-24 bg-surface-subtle">
      <div className="max-w-container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-secondary px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            Transparência em Tempo Real
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight">
            Acompanhe o Status do seu Aparelho
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-subdued mt-2">
            Consulte a evolução do diagnóstico, bancada e testes de stress através do número da sua Ordem de Serviço (OS).
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                placeholder="Digite o código da OS (ex: MR-2026-0842)"
                className="w-full bg-white border border-border-subtle focus:border-secondary focus:ring-2 focus:ring-blue-100 rounded-xl pl-12 pr-4 py-3.5 text-sm font-mono text-primary uppercase placeholder:normal-case shadow-sm outline-none transition-all"
              />
            </div>
            <button
              type="submit"
              className="bg-secondary hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-heading font-semibold text-sm shadow-sm transition-all"
            >
              Consultar OS
            </button>
          </form>

          {/* Quick Click Samples */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 font-mono text-xs text-text-subdued">
            <span>Exemplos para testar:</span>
            <button
              onClick={() => selectSample('MR-2026-0842')}
              className="px-2 py-0.5 rounded bg-white hover:bg-blue-50 border border-slate-200 text-secondary font-semibold"
            >
              MR-2026-0842 (MacBook)
            </button>
            <button
              onClick={() => selectSample('MR-2026-0915')}
              className="px-2 py-0.5 rounded bg-white hover:bg-blue-50 border border-slate-200 text-secondary font-semibold"
            >
              MR-2026-0915 (iPhone 15)
            </button>
            <button
              onClick={() => selectSample('MR-2026-0770')}
              className="px-2 py-0.5 rounded bg-white hover:bg-blue-50 border border-slate-200 text-secondary font-semibold"
            >
              MR-2026-0770 (Dell G15)
            </button>
          </div>

          {errorMsg && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>

        {/* Order Details Card */}
        {currentOrder && (
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-border-subtle shadow-level-2 overflow-hidden animate-fadeIn">
            
            {/* Top Bar of the Order */}
            <div className="bg-primary text-white p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1 font-mono text-xs text-slate-300">
                  <span>OS: <strong className="text-white font-bold">{currentOrder.osNumber}</strong></span>
                  <span>•</span>
                  <span>Entrada: {currentOrder.entryDate}</span>
                </div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                  {currentOrder.device}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  Serial / IMEI: {currentOrder.serialNumber} | Cliente: {currentOrder.clientName}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                  STATUS: {currentOrder.statusBadge}
                </span>

                <WhatsAppButton
                  message={`Olá Matheus! Estou acompanhando a OS ${currentOrder.osNumber} (${currentOrder.device}) e gostaria de saber novidades.`}
                  variant="pill"
                  className="!px-3.5 !py-1.5 text-xs"
                >
                  Falar sobre esta OS
                </WhatsAppButton>
              </div>
            </div>

            {/* 5-Step Tracker Gauge (as defined in DESIGN.md) */}
            <div className="p-6 md:p-8 bg-white border-b border-border-subtle">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-400 mb-8">
                Linha do Tempo de Diagnóstico &amp; Bancada
              </h4>

              <div className="relative">
                {/* Connecting horizontal line for desktop */}
                <div className="hidden md:block absolute top-5 left-8 right-8 h-1 bg-slate-200 -z-0" />

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-2 relative z-10">
                  {currentOrder.steps.map((step, idx) => {
                    const isCompleted = step.completed;
                    const isCurrent = step.current;

                    return (
                      <div key={idx} className="flex md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-2">
                        {/* Node Pip */}
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 transition-all ${
                            isCompleted
                              ? 'bg-brand-green text-white shadow-sm ring-4 ring-emerald-50'
                              : isCurrent
                              ? 'bg-secondary text-white shadow-blue-glow ring-4 ring-blue-100 animate-pulse'
                              : 'bg-slate-100 text-slate-400 border border-slate-300'
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : (
                            <span>{idx + 1}</span>
                          )}
                        </div>

                        {/* Text */}
                        <div>
                          <p className={`font-heading font-bold text-xs ${isCurrent ? 'text-secondary' : isCompleted ? 'text-primary' : 'text-slate-400'}`}>
                            {step.title}
                          </p>
                          <p className="font-mono text-[10px] text-text-subdued mt-0.5">
                            {step.date}
                          </p>
                          <p className="font-sans text-[11px] text-slate-500 mt-1 max-w-[170px] hidden md:block">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Diagnostic Technical Notes */}
            <div className="p-6 md:p-8 bg-slate-50 grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 bg-white p-5 rounded-xl border border-border-subtle">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-secondary">
                  <FileText className="w-4 h-4" />
                  <span>Parecer Técnico do Especialista</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {currentOrder.diagnosticsNotes}
                </p>
              </div>

              <div className="md:col-span-4 bg-white p-5 rounded-xl border border-border-subtle flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-text-subdued block">Valor Fechado do Reparo:</span>
                  <p className="font-heading font-extrabold text-2xl text-primary mt-1">
                    R$ {currentOrder.totalValue.toFixed(2)}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-emerald-700 font-mono text-[11px] font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-brand-green" />
                  <span>Inclui Garantia de 90 Dias</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
