/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        ocean: {
          deep: '#0A1628',
          dark: '#0D1F3C',
          mid: '#112847',
          light: '#1A3A5C',
        },
        whale: {
          teal: '#00B4A6',
          'teal-light': '#00D4C4',
          'teal-dark': '#009488',
        },
        gold: {
          accent: '#C9A227',
          light: '#E0BE4A',
          dark: '#A68520',
        },
        sky: {
          blue: '#4A90D9',
          light: '#6BAAE8',
        },
        coral: {
          red: '#FF6B6B',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'Noto Sans SC', 'sans-serif'],
        body: ['Noto Sans SC', 'Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'DIN', 'monospace'],
      },
      animation: {
        'wave-slow': 'wave 8s ease-in-out infinite',
        'wave-medium': 'wave 6s ease-in-out infinite reverse',
        'wave-fast': 'wave 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-25px) translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
