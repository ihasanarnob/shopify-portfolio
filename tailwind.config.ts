import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Ency Signature Electric Blue & Dark Ink System
        encyBlue: '#0000FF',
        encyBlueDeep: '#0000C4',
        encyBlueLight: '#4B4BFF',
        encyInk: '#16105F',
        encyInkDark: '#0D093B',
        encyInkCard: '#1C1670',
        encyYellow: '#FFD60A',
        encyYellowMuted: '#FFF9D6',
        encyPaper: '#F6F7FF',
        encyMist: '#E6E8FB',
        encyMuted: '#565A92',
        encyText: '#16105F',
        encyBody: '#34376B',
        encyGreen: '#14A800',
        encyLive: '#3FBF7F',

        // Original palette aliases
        nearBlack: '#141615',
        charcoal: '#1C201D',
        warmWhite: '#F6F5F0',
        lightSurface: '#EBEAE3',
        mainDark: '#20231F',
        mutedDark: '#747970',
        accentLime: '#C6F277',
        borderDark: 'rgba(255, 255, 255, 0.08)',
        borderLight: '#E2E0D8',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        hand: ['var(--font-hand)', 'Caveat', 'cursive'],
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sticker: '0 15px 35px -8px rgba(0, 0, 0, 0.25), 0 4px 12px -2px rgba(0, 0, 0, 0.1)',
        encyCard: '0 20px 40px -15px rgba(22, 16, 95, 0.08), 0 2px 6px rgba(22, 16, 95, 0.04)',
      },
    },
  },
  plugins: [],
};

export default config;

