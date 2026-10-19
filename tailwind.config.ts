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
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
