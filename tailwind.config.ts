import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#131313',
        'surface-container': '#201f1f',
        'surface-container-low': '#1c1b1b',
        'surface-container-lowest': '#0e0e0e',
        'surface-container-high': '#2a2a2a',
        'surface-container-highest': '#353534',
        primary: '#ffffff',
        accent: '#00dddd',
        magenta: '#ff00ff',
        green: '#00ff00',
        'on-surface': '#e5e2e1',
        'on-surface-variant': '#b9cac9',
        outline: '#839493',
        'outline-variant': '#3a4a49',
        error: '#ffb4ab',
        'error-container': '#93000a',
        text: {
          primary: '#e6e6e6',
          muted: '#999999'
        }
      },
      fontFamily: {
        syne: ['Arial Narrow', 'Agency FB', 'Arial', 'sans-serif'],
        mono: ['SFMono-Regular', 'Cascadia Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      spacing: {
        gutter: '24px',
        'margin-mobile': '16px',
        'margin-desktop': '64px',
        'technical-gap': '2px',
        unit: '4px',
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M32 0H0v32h32V0zM31 1H1v30h30V1z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        'scanline-pattern': "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.015) 51%)"
      }
    },
  },
  plugins: [],
};

export default config;
