import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Nunito', 'sans-serif'],
      },
      colors: {
        lavender: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        glow: {
          purple: '#d8b4fe',
          pink: '#f9a8d4',
          amber: '#fcd34d',
        }
      },
      backgroundImage: {
        'glow-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'badge-bounce': 'badgeBounce 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(168, 85, 247, 0.8)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        badgeBounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(168, 85, 247, 0.3)',
        'glow-md': '0 0 30px rgba(168, 85, 247, 0.4)',
        'glow-lg': '0 0 50px rgba(168, 85, 247, 0.5)',
        'glow-shopee': '0 0 20px rgba(238, 77, 45, 0.4)',
        'glow-tiktok': '0 0 20px rgba(0, 0, 0, 0.4)',
        'card': '0 4px 24px rgba(168, 85, 247, 0.12)',
        'card-hover': '0 12px 40px rgba(168, 85, 247, 0.25)',
      },
    },
  },
  plugins: [],
}
export default config
