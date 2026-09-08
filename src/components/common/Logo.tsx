import React from 'react';

interface LogoProps {
  className?: string;
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-9 w-auto", lightMode = false }) => {
  return (
    <div className={`flex items-center gap-2.5 cursor-pointer select-none ${className}`}>
      <svg
        viewBox="0 0 44 44"
        className="w-10 h-10 flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="44" height="44" rx="12" fill="#2563EB" />
        {/* Phone outline */}
        <rect
          x="10"
          y="8"
          width="16"
          height="28"
          rx="3"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          fill="none"
        />
        <circle cx="18" cy="32" r="1.5" fill="#FFFFFF" />
        {/* Precision screwdrivers / cross tech paths */}
        <path
          d="M22 16L34 28M34 16L22 28"
          stroke="#93C5FD"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="28" cy="22" r="2" fill="#60A5FA" />
      </svg>
      <div className="flex flex-col">
        <span className={`font-heading font-extrabold text-[17px] leading-tight tracking-tight ${lightMode ? 'text-white' : 'text-primary'}`}>
          MATHEUS <span className="text-secondary">REPAROS</span>
        </span>
        <span className={`font-mono text-[9px] font-semibold tracking-wider uppercase ${lightMode ? 'text-slate-400' : 'text-text-subdued'}`}>
          Smartphones &amp; Notebooks
        </span>
      </div>
    </div>
  );
};
