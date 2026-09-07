/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0F172A',
          blue: '#2563EB',
          blueLight: '#3B82F6',
          cyan: '#06B6D4',
          green: '#16A34A',
          greenHover: '#15803D',
          greenLight: '#22C55E',
        },
        primary: {
          DEFAULT: '#0F172A',
          container: '#131B2E',
          fixed: '#DAE2FD',
          dim: '#BEC6E0',
        },
        secondary: {
          DEFAULT: '#2563EB',
          container: '#316BF3',
          light: '#60A5FA',
        },
        tertiary: {
          DEFAULT: '#16A34A',
          hover: '#15803D',
          container: '#002109',
        },
        surface: {
          DEFAULT: '#F8FAFC',
          canvas: '#F8FAFC',
          card: '#FFFFFF',
          subtle: '#F1F5F9',
          tint: '#565E74',
          container: '#E5EEFF',
          containerLow: '#EFF4FF',
          containerHigh: '#DCE9FF',
          containerHighest: '#D3E4FE',
        },
        border: {
          subtle: '#E2E8F0',
          hover: '#CBD5E1',
        },
        text: {
          main: '#0F172A',
          subdued: '#64748B',
          muted: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '1rem',
        'xl': '1.5rem',
        'full': '9999px',
      },
      boxShadow: {
        'level-1': '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)',
        'level-2': '0 10px 25px -5px rgba(15, 23, 42, 0.06), 0 8px 10px -6px rgba(15, 23, 42, 0.03)',
        'level-3': '0 20px 35px -10px rgba(15, 23, 42, 0.12), 0 1px 3px 0 rgba(15, 23, 42, 0.04)',
        'whatsapp-glow': '0 4px 14px 0 rgba(22, 163, 74, 0.35)',
        'blue-glow': '0 4px 16px 0 rgba(37, 99, 235, 0.25)',
      },
      maxWidth: {
        'container': '1240px',
      }
    },
  },
  plugins: [],
}
