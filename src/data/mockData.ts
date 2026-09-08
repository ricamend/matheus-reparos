import type { ServiceItem, OrderStatus, Testimonial, FAQItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'tela-smartphone',
    category: 'smartphone',
    title: 'Troca de Tela Original & Premium',
    description: 'Substituição de displays OLED/AMOLED e LCD com calibração de True Tone, biometria facial e touch preservados.',
    estimatedTime: '40 a 90 min',
    warranty: '90 dias',
    startingPrice: 180,
    popular: true,
    tags: ['iPhone', 'Samsung Galaxy', 'Xiaomi', 'Motorola']
  },
  {
    id: 'bateria-smartphone',
    category: 'smartphone',
    title: 'Substituição de Bateria com Saúde 100%',
    description: 'Baterias com células de alta densidade e sem mensagem de erro no sistema operacional. Autonomia renovada.',
    estimatedTime: '30 a 60 min',
    warranty: '90 dias',
    startingPrice: 140,
    popular: true,
    tags: ['Sem aviso de peça', 'Ciclo Zero', 'Original']
  },
  {
    id: 'conector-carga',
    category: 'smartphone',
    title: 'Reparo de Conector & Carga Rápida',
    description: 'Troca ou reparo de porta USB-C / Lightning com solda precisa e recuperação das linhas de dados para sincronização.',
    estimatedTime: '1 a 2 horas',
    warranty: '90 dias',
    startingPrice: 120,
    tags: ['USB-C', 'Lightning', 'Carregamento Turbo']
  },
  {
    id: 'micro-solda-placa',
    category: 'placa',
    title: 'Micro-soldagem & Recuperação de Placas',
    description: 'Diagnóstico em microscópio óptico para curto-circuito, falha de PMIC, backlight, reparo em chips BGA e desoxidação.',
    estimatedTime: '24 a 48 horas',
    warranty: '90 dias',
    startingPrice: 280,
    popular: true,
    tags: ['Nível 3 Laboratório', 'Curto em Placa', 'Aparelho Apagado']
  },
  {
    id: 'limpeza-notebook',
    category: 'notebook',
    title: 'Manutenção Preventiva & Troca de Pasta Térmica',
    description: 'Desmontagem completa, higienização dos coolers, troca de thermal pads e aplicação de pasta térmica de prata (Thermal Grizzly/Arctic).',
    estimatedTime: '2 a 4 horas',
    warranty: '90 dias',
    startingPrice: 150,
    popular: true,
    tags: ['Notebooks Gamers', 'MacBook', 'Redução de Temperatura']
  },
  {
    id: 'upgrade-ssd-ram',
    category: 'notebook',
    title: 'Upgrade SSD NVMe & Memória RAM',
    description: 'Acelere seu notebook em até 10x com clonagem sem perda de arquivos ou formatação limpa otimizada.',
    estimatedTime: '1 a 3 horas',
    warranty: '90 dias',
    startingPrice: 120,
    tags: ['Clonagem 1:1', 'NVMe Gen4', 'Dual Channel']
  },
  {
    id: 'recuperacao-agua',
    category: 'placa',
    title: 'Desoxidação Pós-Contato com Líquidos',
    description: 'Banho químico ultrassônico com álcool isopropílico 99,8% e reconstrução de trilhas oxidadas sob microscópio.',
    estimatedTime: '24 a 72 horas',
    warranty: '90 dias',
    startingPrice: 220,
    tags: ['Banho Químico', 'Ultrassom', 'Reconstrução de Trilha']
  },
  {
    id: 'reparo-dobradica',
    category: 'notebook',
    title: 'Reconstrução de Dobradiças e Carcaça',
    description: 'Restauração estrutural em resina epóxi reforçada e alinhamento de hastes para evitar quebra da tela.',
    estimatedTime: '24 horas',
    warranty: '90 dias',
    startingPrice: 160,
    tags: ['Dell Inspiron', 'Lenovo', 'Acer', 'HP']
  }
];

export const SAMPLE_ORDERS: Record<string, OrderStatus> = {
  'MR-2026-0842': {
    osNumber: 'MR-2026-0842',
    clientName: 'Carlos Eduardo M.',
    device: 'MacBook Pro 14" M1 Pro',
    serialNumber: 'C02G901QMD6R',
    entryDate: '05/09/2026 - 10:30',
    currentStep: 4,
    steps: [
      { title: '1. Recebimento & Check-in', description: 'Checklist inicial, fotos e abertura formal de OS.', date: '05/09 - 10:30', completed: true },
      { title: '2. Diagnóstico Técnico', description: 'Identificado curto na linha de alimentação PPBUS_G3H.', date: '05/09 - 14:15', completed: true },
      { title: '3. Reparo em Bancada', description: 'Substituição de capacitor SMD e MOSFET de controle.', date: '06/09 - 11:20', completed: true },
      { title: '4. Testes de Stress e Validação', description: 'Executando benchmarks térmicos, ciclos de carga e monitoramento de bateria.', date: '07/09 - 09:00', completed: false, current: true },
      { title: '5. Pronto para Retirada', description: 'Higienização externa, laudo e emissão do termo de garantia.', date: 'Previsto: Hoje às 17h', completed: false }
    ],
    diagnosticsNotes: 'Equipamento não ligava após sobretensão. Circuito de alimentação principal restaurado sem alteração nos dados do SSD.',
    totalValue: 580.00,
    statusBadge: 'TESTES'
  },
  'MR-2026-0915': {
    osNumber: 'MR-2026-0915',
    clientName: 'Mariana Silveira',
    device: 'iPhone 15 Pro Max',
    serialNumber: 'F2LXK980MN12',
    entryDate: '07/09/2026 - 09:15',
    currentStep: 3,
    steps: [
      { title: '1. Recebimento & Check-in', description: 'Recebido com tela trincada após queda.', date: '07/09 - 09:15', completed: true },
      { title: '2. Diagnóstico Técnico', description: 'Painel OLED danificado, aro e Face ID intactos.', date: '07/09 - 09:40', completed: true },
      { title: '3. Reparo em Bancada', description: 'Instalação de novo display OLED Super Retina com reprogramação do eeprom TrueTone.', date: '07/09 - 11:00', completed: false, current: true },
      { title: '4. Testes de Stress e Validação', description: 'Calibração de touch, sensor de proximidade e câmeras.', date: 'Pendente', completed: false },
      { title: '5. Pronto para Retirada', description: 'Liberação e emissão de nota.', date: 'Pendente', completed: false }
    ],
    diagnosticsNotes: 'Troca de tela em andamento. True Tone e Face ID testados e preservados.',
    totalValue: 890.00,
    statusBadge: 'EM_REPARO'
  },
  'MR-2026-0770': {
    osNumber: 'MR-2026-0770',
    clientName: 'Fernando Costa',
    device: 'Notebook Gamer Dell G15',
    serialNumber: '87HJ4B2',
    entryDate: '04/09/2026 - 15:40',
    currentStep: 5,
    steps: [
      { title: '1. Recebimento & Check-in', description: 'Notebook superaquecendo (98°C) em jogos.', date: '04/09 - 15:40', completed: true },
      { title: '2. Diagnóstico Técnico', description: 'Coolers obstruídos e pasta térmica ressecada.', date: '05/09 - 09:00', completed: true },
      { title: '3. Reparo em Bancada', description: 'Desmontagem, limpeza química e aplicação de Arctic MX-6.', date: '05/09 - 14:00', completed: true },
      { title: '4. Testes de Stress e Validação', description: 'Temperaturas estabilizadas em 74°C sob carga máxima.', date: '06/09 - 10:00', completed: true },
      { title: '5. Pronto para Retirada', description: 'Aparelho disponível para retirada ou entrega via motoboy.', date: '06/09 - 16:30', completed: true }
    ],
    diagnosticsNotes: 'Serviço concluído com sucesso. Temperatura reduzida em 24°C com desempenho máximo liberado.',
    totalValue: 240.00,
    statusBadge: 'PRONTO'
  }
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Renato Albuquerque',
    role: 'Engenheiro de Software',
    device: 'MacBook Air M2',
    comment: 'Meu MacBook não dava sinal de vida após derramar café. Em duas outras assistências condenaram a placa. O Matheus fez a desoxidação e reparo pontual de trilhas em 48h com todos os meus arquivos salvos!',
    rating: 5,
    date: 'Setembro 2026'
  },
  {
    id: '2',
    author: 'Juliana Paiva',
    role: 'Designer Gráfica',
    device: 'iPhone 14 Pro',
    comment: 'Troquei a tela e mantive o True Tone e a qualidade de cores intacta. Transparência total no atendimento pelo WhatsApp e fotos de cada etapa do processo.',
    rating: 5,
    date: 'Agosto 2026'
  },
  {
    id: '3',
    author: 'Marcos Vinicius',
    role: 'Empresário',
    device: 'Dell Latitude corporativo',
    comment: 'Fazemos a manutenção de todos os notebooks da nossa empresa com o Matheus. Pontualidade britânica, peças de procedência e laudos técnicos detalhados.',
    rating: 5,
    date: 'Agosto 2026'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Eu perco os dados e fotos do meu celular durante o conserto?',
    answer: 'Em mais de 98% dos casos de troca de tela, bateria, conectores ou reparos de hardware, seus dados permanecem 100% preservados. Sempre recomendamos backup prévio por precaução, mas não formatamos seu aparelho sem sua autorização expressa.',
    category: 'Segurança'
  },
  {
    question: 'Quanto tempo dura a garantia do serviço?',
    answer: 'Oferecemos garantia legal e contratual de 90 dias para todos os reparos e componentes instalados, acompanhada de termo de garantia e nota fiscal.',
    category: 'Garantia'
  },
  {
    question: 'Qual a diferença entre peças originais e de primeira linha?',
    answer: 'Peças originais são as mesmas utilizadas pelas fabricantes, garantindo brilho, contraste e fidelidade absoluta. Peças de primeira linha (OEM premium) são opções selecionadas de alta qualidade com ótimo custo-benefício. Explicamos e mostramos a diferença antes de você aprovar o orçamento.',
    category: 'Peças'
  },
  {
    question: 'Como funciona a avaliação e o orçamento?',
    answer: 'O orçamento preliminar é gratuito e imediato via WhatsApp. Após o recebimento no laboratório, realizamos o diagnóstico minucioso e enviamos fotos e vídeos das medições com valor fechado. Você só paga após a aprovação e conclusão do serviço.',
    category: 'Orçamento'
  },
  {
    question: 'Vocês têm serviço de busca e entrega (Leva e Traz)?',
    answer: 'Sim! Atendemos via motoboy parceiro com lacre de segurança e rastreamento em tempo real para toda a região metropolitana.',
    category: 'Atendimento'
  }
];
