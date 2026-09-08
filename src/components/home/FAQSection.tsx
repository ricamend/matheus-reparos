import React, { useState } from 'react';
import { FAQS } from '../../data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { WhatsAppButton } from '../common/WhatsAppButton';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-white border-t border-border-subtle">
      <div className="max-w-container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 bg-blue-50 text-secondary px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              Tire Suas Dúvidas
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight mb-4">
              Perguntas Frequentes
            </h2>
            <p className="font-sans text-sm sm:text-base text-text-subdued mb-8 leading-relaxed">
              Confira as respostas para as principais dúvidas sobre prazos, peças, garantia de 90 dias e proteção dos seus dados.
            </p>

            <div className="bg-surface p-6 rounded-2xl border border-border-subtle space-y-3">
              <h4 className="font-heading font-bold text-sm text-primary">
                Ainda tem dúvidas ou seu caso é atípico?
              </h4>
              <p className="font-sans text-xs text-text-subdued leading-relaxed">
                Fale diretamente com o Matheus no WhatsApp e receba orientações personalizadas sem compromisso.
              </p>
              <WhatsAppButton
                message="Olá Matheus! Tenho uma dúvida sobre o conserto do meu aparelho."
                className="w-full !py-2.5 text-xs font-semibold"
              >
                Falar com Matheus
              </WhatsAppButton>
            </div>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-border-subtle overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className={`w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 transition-colors ${
                      isOpen ? 'bg-surface-subtle font-bold text-primary' : 'bg-white text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-heading text-sm sm:text-base font-semibold">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 bg-surface-subtle text-xs sm:text-sm text-slate-600 font-sans leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
