import React, { useState } from 'react';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    aparelho: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="w-full py-12 bg-surface">
      <div className="max-w-container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-blue-100 text-secondary text-xs font-mono font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            Atendimento Rápido
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight mb-4">
            Entre em Contato com a Gente
          </h1>
          <p className="font-sans text-base text-text-subdued leading-relaxed">
            Solicite um orçamento sem compromisso ou tire suas dúvidas técnicas diretamente com nossa equipe.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Direct Card */}
            <div className="bg-gradient-to-br from-emerald-600 to-brand-green text-white p-6 rounded-2xl shadow-level-2 space-y-4">
              <span className="bg-white/20 text-white text-[11px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase inline-block">
                Canal Mais Rápido
              </span>
              <h3 className="font-heading font-bold text-xl">Atendimento WhatsApp</h3>
              <p className="text-emerald-50 text-xs sm:text-sm leading-relaxed">
                Envie fotos, vídeos do defeito e receba uma estimativa inicial em poucos minutos.
              </p>
              <WhatsAppButton
                message="Olá Matheus! Gostaria de falar com você sobre o reparo do meu equipamento."
                className="w-full !bg-white !text-emerald-800 hover:!bg-emerald-50 shadow-md font-bold"
              >
                Chamar no WhatsApp Agora
              </WhatsAppButton>
            </div>

            {/* General Info */}
            <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm space-y-4 font-sans text-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary text-xs uppercase tracking-wider">Endereço do Laboratório</h4>
                  <p className="text-slate-700 text-xs mt-0.5">Av. Paulista, 1000 - Sala 42 (Atendimento com Hora Marcada)</p>
                  <p className="text-text-subdued text-[11px]">Bela Vista, São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-secondary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary text-xs uppercase tracking-wider">Horários</h4>
                  <p className="text-slate-700 text-xs mt-0.5">Segunda a Sexta: 08:00 às 18:00</p>
                  <p className="text-slate-700 text-xs">Sábado: 08:00 às 13:00</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary text-xs uppercase tracking-wider">Telefone / Mensagens</h4>
                  <p className="text-slate-700 text-xs mt-0.5">(11) 99999-8888</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-secondary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary text-xs uppercase tracking-wider">E-mail Técnico</h4>
                  <p className="text-slate-700 text-xs mt-0.5">contato@matheusreparos.com.br</p>
                </div>
              </div>
            </div>

          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-border-subtle shadow-sm">
            <h3 className="font-heading font-bold text-xl text-primary mb-2">Envie uma Mensagem</h3>
            <p className="font-sans text-xs text-text-subdued mb-6">
              Preencha o formulário abaixo e retornaremos em até 2 horas úteis.
            </p>

            {formSent ? (
              <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-xl">
                <CheckCircle className="w-12 h-12 text-brand-green mx-auto mb-3" />
                <h4 className="font-heading font-bold text-lg text-emerald-900 mb-1">Mensagem enviada com sucesso!</h4>
                <p className="text-xs text-emerald-700 mb-4">
                  Obrigado, {formData.nome}. Entraremos em contato pelo telefone informado.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="text-xs font-mono font-semibold text-emerald-800 underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-heading font-bold text-xs uppercase tracking-wider text-slate-600 mb-1.5">
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Ex: Carlos Silva"
                    className="w-full bg-surface border border-border-subtle focus:border-secondary focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 text-sm outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading font-bold text-xs uppercase tracking-wider text-slate-600 mb-1.5">
                      WhatsApp / Telefone
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="w-full bg-surface border border-border-subtle focus:border-secondary focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-heading font-bold text-xs uppercase tracking-wider text-slate-600 mb-1.5">
                      Modelo do Dispositivo
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.aparelho}
                      onChange={(e) => setFormData({ ...formData, aparelho: e.target.value })}
                      placeholder="Ex: MacBook Air M1"
                      className="w-full bg-surface border border-border-subtle focus:border-secondary focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-heading font-bold text-xs uppercase tracking-wider text-slate-600 mb-1.5">
                    Descreva o Problema
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Descreva o que aconteceu (ex: caiu na água, tela não dá sinal, aparelho esquentando...)"
                    className="w-full bg-surface border border-border-subtle focus:border-secondary focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 text-sm outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-slate-800 text-white font-heading font-semibold py-3.5 rounded-xl transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Solicitação</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
