export type NavTab = 'home' | 'servicos' | 'sobre' | 'contato' | 'rastreio';

export interface ServiceItem {
  id: string;
  category: 'smartphone' | 'notebook' | 'placa';
  title: string;
  description: string;
  estimatedTime: string;
  warranty: string;
  startingPrice: number;
  popular?: boolean;
  tags: string[];
}

export interface OrderStatus {
  osNumber: string;
  clientName: string;
  device: string;
  serialNumber: string;
  entryDate: string;
  currentStep: number; // 1 to 5
  steps: {
    title: string;
    description: string;
    date: string;
    completed: boolean;
    current?: boolean;
  }[];
  diagnosticsNotes: string;
  totalValue: number;
  statusBadge: 'RECEBIDO' | 'DIAGNOSTICO' | 'EM_REPARO' | 'TESTES' | 'PRONTO';
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  device: string;
  comment: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
