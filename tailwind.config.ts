import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f0ff',
          100: '#c5d9ff',
          200: '#9ebfff',
          300: '#75a5ff',
          400: '#5290ff',
          500: '#0234aa',
          600: '#0234aa',
          700: '#01288a',
          800: '#011c6a',
          900: '#00104a',
        },
        brand: '#0234aa',
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(2, 52, 170, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(2, 52, 170, 0.8), 0 0 30px rgba(2, 52, 170, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

