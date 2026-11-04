import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#FDF2F4',
          100: '#FCE7EA',
          200: '#F8D0D6',
          300: '#EE9EAA',
          400: '#DE6478',
          500: '#C53550',
          600: '#A41535',
          700: '#800020', // Brand Burgundy
          800: '#6B021C',
          900: '#59061A',
          950: '#34010C',
        },
        warm: {
          50: '#FFFDF9',
          100: '#FFF7ED', // Warm cream
          200: '#FEEFD8',
          300: '#FEDDB2',
          400: '#FDBA74',
          500: '#FB923C',
        },
        charcoal: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'sans-serif'],
        script: ['"Dancing Script"', '"Caveat"', 'cursive'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -1px rgba(128, 0, 32, 0.05), 0 1px 3px -1px rgba(0, 0, 0, 0.04)',
        'soft': '0 10px 25px -3px rgba(128, 0, 32, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.03)',
        'soft-lg': '0 20px 35px -4px rgba(128, 0, 32, 0.12), 0 8px 16px -4px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 25px rgba(128, 0, 32, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
