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
        'background': 'rgb(var(--background) / <alpha-value>)',
        'surface': 'rgb(var(--surface) / <alpha-value>)',
        'surface-container': 'rgb(var(--surface-container) / <alpha-value>)',
        'surface-container-low': 'rgb(var(--surface-container-low) / <alpha-value>)',
        'surface-container-lowest': 'rgb(var(--surface-container-lowest) / <alpha-value>)',
        'surface-container-high': 'rgb(var(--surface-container-high) / <alpha-value>)',
        'surface-container-highest': 'rgb(var(--surface-container-highest) / <alpha-value>)',
        'primary': 'rgb(var(--primary) / <alpha-value>)',
        'accent': 'rgb(var(--accent) / <alpha-value>)',
        'magenta': 'rgb(var(--magenta) / <alpha-value>)',
        'green': 'rgb(var(--green) / <alpha-value>)',
        'on-surface': 'rgb(var(--on-surface) / <alpha-value>)',
        'on-surface-variant': 'rgb(var(--on-surface-variant) / <alpha-value>)',
        'outline': 'rgb(var(--outline) / <alpha-value>)',
        'outline-variant': 'rgb(var(--outline-variant) / <alpha-value>)',
        'error': 'rgb(var(--error) / <alpha-value>)',
        'error-container': 'rgb(var(--error-container) / <alpha-value>)',
        secondary: 'rgb(var(--on-surface-variant) / <alpha-value>)',
        text: { primary: 'rgb(var(--on-surface) / <alpha-value>)', muted: 'rgb(var(--outline) / <alpha-value>)' },
      },
      fontFamily: {
        syne: ['Inter', 'Arial', 'sans-serif'],
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
