import React from 'react';

interface WhatsAppButtonProps {
  message?: string;
  phone?: string;
  className?: string;
  variant?: 'primary' | 'outline' | 'pill' | 'floating';
  children?: React.ReactNode;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = "Olá Matheus! Gostaria de um orçamento para reparo do meu dispositivo.",
  phone = "5511999998888",
  className = "",
  variant = "primary",
  children
}) => {
  const encodedMsg = encodeURIComponent(message);
  const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

  const baseStyles = "inline-flex items-center justify-center gap-2 font-heading font-semibold transition-all duration-200";

  if (variant === 'floating') {
    return (
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-brand-green hover:bg-brand-greenHover text-white px-5 py-3.5 rounded-full shadow-whatsapp-glow hover:scale-105 transition-all group ${className}`}
        aria-label="Falar no WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.981.54 1.83.82 2.796.82 3.183 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.766-5.769-5.766zm9.969 5.766c0 5.519-4.481 10-10 10-1.745 0-3.385-.45-4.819-1.238l-5.181 1.357 1.385-5.048c-.878-1.493-1.385-3.23-1.385-5.071 0-5.519 4.481-10 10-10 5.519 0 10 4.481 10 10z"/>
        </svg>
        <span className="text-sm font-bold tracking-tight hidden md:inline">Orçamento Rápido no WhatsApp</span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping absolute -top-1 -right-1"></span>
      </a>
    );
  }

  if (variant === 'outline') {
    return (
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} border border-brand-green text-brand-green hover:bg-emerald-50 px-5 py-2.5 rounded-lg text-sm ${className}`}
      >
        {children || "Conversar no WhatsApp"}
      </a>
    );
  }

  if (variant === 'pill') {
    return (
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} bg-brand-green hover:bg-brand-greenHover text-white px-5 py-2 rounded-full text-xs md:text-sm shadow-sm hover:scale-105 ${className}`}
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.981.54 1.83.82 2.796.82 3.183 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.766-5.769-5.766zm9.969 5.766c0 5.519-4.481 10-10 10-1.745 0-3.385-.45-4.819-1.238l-5.181 1.357 1.385-5.048c-.878-1.493-1.385-3.23-1.385-5.071 0-5.519 4.481-10 10-10 5.519 0 10 4.481 10 10z"/>
        </svg>
        {children || "WhatsApp"}
      </a>
    );
  }

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} bg-brand-green hover:bg-brand-greenHover text-white px-6 py-3 rounded-xl shadow-whatsapp-glow hover:-translate-y-0.5 text-sm md:text-base font-bold ${className}`}
    >
      <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.981.54 1.83.82 2.796.82 3.183 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.766-5.769-5.766zm9.969 5.766c0 5.519-4.481 10-10 10-1.745 0-3.385-.45-4.819-1.238l-5.181 1.357 1.385-5.048c-.878-1.493-1.385-3.23-1.385-5.071 0-5.519 4.481-10 10-10 5.519 0 10 4.481 10 10z"/>
      </svg>
      <span>{children || "Solicitar Orçamento Grátis"}</span>
    </a>
  );
};
