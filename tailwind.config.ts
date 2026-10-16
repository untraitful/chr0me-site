import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050505',
        paper: '#ececec',
        mute: '#8a8a8e',
        steel: '#5c5c62',
        line: 'rgba(255,255,255,0.09)',
      },
      fontFamily: {
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        tech: ['Michroma', '"Inter Tight"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
