import React, { useState } from 'react';
import { Smartphone, Laptop, Check, AlertCircle } from 'lucide-react';
import { WhatsAppButton } from '../common/WhatsAppButton';

interface DeviceModel {
  name: string;
  type: 'smartphone' | 'notebook';
}

const POPULAR_DEVICES: DeviceModel[] = [
  { name: 'iPhone 15 / 15 Pro Max', type: 'smartphone' },
  { name: 'iPhone 14 / 14 Pro', type: 'smartphone' },
  { name: 'iPhone 13 / 13 Pro', type: 'smartphone' },
  { name: 'iPhone 11 / 12 Series', type: 'smartphone' },
  { name: 'Samsung Galaxy S23 / S24', type: 'smartphone' },
  { name: 'Samsung Galaxy A Series', type: 'smartphone' },
  { name: 'Xiaomi / Poco / Redmi', type: 'smartphone' },
  { name: 'MacBook Pro / Air (M1, M2, M3)', type: 'notebook' },
  { name: 'Dell Inspiron / G15 Gamer', type: 'notebook' },
  { name: 'Lenovo ThinkPad / Ideapad', type: 'notebook' },
  { name: 'Acer Nitro / Predator', type: 'notebook' },
  { name: 'ASUS Vivobook / TUF', type: 'notebook' },
];

interface DefectOption {
  id: string;
  label: string;
  basePrice: number;
  timeEst: string;
}

const DEFECTS_MAP: Record<'smartphone' | 'notebook', DefectOption[]> = {
  smartphone: [
    { id: 'screen', label: 'Tela quebrada / Touch não funciona', basePrice: 220, timeEst: '1 hora' },
    { id: 'battery', label: 'Bateria descarregando rápido / estufada', basePrice: 150, timeEst: '45 min' },
    { id: 'port', label: 'Não carrega / Conector com mau contato', basePrice: 130, timeEst: '1 hora' },
    { id: 'water', label: 'Caiu na água / Desoxidação', basePrice: 250, timeEst: '24 a 48h' },
    { id: 'board', label: 'Não liga / Curto na placa mãe', basePrice: 320, timeEst: '24 a 48h' },
    { id: 'camera', label: 'Câmera traseira tremendo ou preta', basePrice: 180, timeEst: '1 hora' },
  ],
  notebook: [
    { id: 'cleanup', label: 'Limpeza interna + Pasta térmica de alta performance', basePrice: 160, timeEst: '2 horas' },
    { id: 'screen_note', label: 'Tela do notebook com listras / trincada', basePrice: 380, timeEst: '24 horas' },
    { id: 'keyboard', label: 'Teclado falhando teclas / derramou líquido', basePrice: 210, timeEst: '24 horas' },
    { id: 'upgrade', label: 'Upgrade de SSD NVMe e Clonagem rápida', basePrice: 140, timeEst: '2 horas' },
    { id: 'hinge', label: 'Dobradiça quebrada / carcaça solta', basePrice: 190, timeEst: '24 horas' },
    { id: 'board_note', label: 'Notebook não liga / curto no circuito elétrico', basePrice: 350, timeEst: '24 a 72h' },
  ],
};

export const QuoteCalculator: React.FC = () => {
  const [deviceType, setDeviceType] = useState<'smartphone' | 'notebook'>('smartphone');
  const [selectedDevice, setSelectedDevice] = useState<string>(POPULAR_DEVICES[0].name);
  const [selectedDefects, setSelectedDefects] = useState<string[]>(['screen']);
  const [customModel, setCustomModel] = useState<string>('');

  const currentDefects = DEFECTS_MAP[deviceType];

  const handleToggleDefect = (id: string) => {
    if (selectedDefects.includes(id)) {
      if (selectedDefects.length > 1) {
        setSelectedDefects(selectedDefects.filter((d) => d !== id));
      }
    } else {
      setSelectedDefects([...selectedDefects, id]);
    }
  };

  const calculatedEstimate = selectedDefects.reduce((acc, defectId) => {
    const found = currentDefects.find((d) => d.id === defectId);
    return acc + (found ? found.basePrice : 0);
  }, 0);

  const selectedDefectLabels = selectedDefects
    .map((d) => currentDefects.find((item) => item.id === d)?.label)
    .filter(Boolean)
    .join(', ');

  const deviceToDisplay = customModel.trim() || selectedDevice;

  const whatsappMessage = `Olá Matheus! Fiz uma simulação pelo site para meu ${deviceToDisplay} com os seguintes problemas: ${selectedDefectLabels}. O valor estimado foi de aprox. R$ ${calculatedEstimate}. Gostaria de agendar ou confirmar o orçamento!`;

  return (
    <section id="calculadora-orcamento" className="w-full py-16 lg:py-24 bg-white border-y border-border-subtle">
      <div className="max-w-container mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-secondary px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-3">
            Simulador Online
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight">
            Calcule uma Estimativa para seu Reparo
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-subdued mt-2">
            Selecione seu aparelho e os serviços necessários para obter uma prévia com transparência.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Controls (7 cols) */}
          <div className="lg:col-span-7 bg-surface p-6 sm:p-8 rounded-2xl border border-border-subtle space-y-6">
            
            {/* Step 1: Device Type Switcher */}
            <div>
              <label className="block font-heading font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">
                1. Tipo de Dispositivo
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setDeviceType('smartphone');
                    setSelectedDevice(POPULAR_DEVICES[0].name);
                    setSelectedDefects(['screen']);
                  }}
                  className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border font-heading font-semibold text-sm transition-all ${
                    deviceType === 'smartphone'
                      ? 'bg-secondary text-white border-secondary shadow-sm'
                      : 'bg-white text-slate-700 border-border-subtle hover:border-slate-300'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Smartphone / Tablet</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setDeviceType('notebook');
                    setSelectedDevice('MacBook Pro / Air (M1, M2, M3)');
                    setSelectedDefects(['cleanup']);
                  }}
                  className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border font-heading font-semibold text-sm transition-all ${
                    deviceType === 'notebook'
                      ? 'bg-secondary text-white border-secondary shadow-sm'
                      : 'bg-white text-slate-700 border-border-subtle hover:border-slate-300'
                  }`}
                >
                  <Laptop className="w-4 h-4" />
                  <span>Notebook / MacBook</span>
                </button>
              </div>
            </div>

            {/* Step 2: Select or Type Model */}
            <div>
              <label className="block font-heading font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">
                2. Modelo do Aparelho
              </label>
              <select
                value={selectedDevice}
                onChange={(e) => setSelectedDevice(e.target.value)}
                className="w-full bg-white border border-border-subtle focus:border-secondary focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 text-sm font-sans text-primary outline-none transition-all mb-2"
              >
                {POPULAR_DEVICES.filter((d) => d.type === deviceType).map((d, i) => (
                  <option key={i} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Ou digite o modelo específico (ex: iPhone 12 Pro Max 128GB)"
                value={customModel}
                onChange={(e) => setCustomModel(e.target.value)}
                className="w-full bg-white border border-border-subtle focus:border-secondary focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-sans placeholder:text-slate-400 outline-none"
              />
            </div>

            {/* Step 3: Select Defects */}
            <div>
              <label className="block font-heading font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">
                3. Qual o problema apresentado? (Marque 1 ou mais)
              </label>
              <div className="space-y-2">
                {currentDefects.map((defect) => {
                  const isChecked = selectedDefects.includes(defect.id);
                  return (
                    <div
                      key={defect.id}
                      onClick={() => handleToggleDefect(defect.id)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                        isChecked
                          ? 'bg-blue-50/60 border-secondary'
                          : 'bg-white border-border-subtle hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                            isChecked ? 'bg-secondary text-white' : 'border border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="font-heading text-xs sm:text-sm font-semibold text-primary">
                          {defect.label}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-text-subdued">
                        ~{defect.timeEst}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-primary to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-level-2 sticky top-28">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                Resumo da Estimativa
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                Garantia 90 Dias
              </span>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <span className="text-xs text-slate-400 font-mono">Dispositivo Selecionado:</span>
                <p className="font-heading font-bold text-base text-white mt-0.5">
                  {deviceToDisplay}
                </p>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-mono">Serviços Selecionados:</span>
                <ul className="mt-1 space-y-1">
                  {selectedDefects.map((defId) => {
                    const item = currentDefects.find((d) => d.id === defId);
                    if (!item) return null;
                    return (
                      <li key={defId} className="flex items-center justify-between text-xs text-slate-300">
                        <span className="truncate max-w-[200px]">• {item.label}</span>
                        <span className="font-mono text-slate-400">R$ {item.basePrice}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs text-slate-400 font-mono block">Valor Estimado a partir de:</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
                    R$ {calculatedEstimate}
                  </span>
                  <span className="text-xs text-slate-400">em até 3x sem juros</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/60 mb-6 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-secondary-light flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-300 leading-snug">
                Os valores são estimativas baseadas na média de componentes originais/premium. O valor final é confirmado após inspeção física sem compromisso.
              </p>
            </div>

            <WhatsAppButton
              message={whatsappMessage}
              className="w-full !py-3.5 text-center text-sm"
            >
              Confirmar Orçamento no WhatsApp
            </WhatsAppButton>

            <p className="text-center font-mono text-[11px] text-slate-400 mt-3">
              ⚡ Resposta média em menos de 15 minutos
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
