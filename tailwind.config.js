/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primaryBlue: '#0075FF',
        darkBlue: '#121241',
        darkPurple: '#1A1E3A',
        darkestPurple1: '#0E1139',
        darkestPurple2: '#030616',
        primaryGreen: '#01B574',
        primaryWhite: '#FFFFFF',
        baseGray: '#A0AEC0',

        lightGray: '#F6F6F6',
        primaryGray: '#262626',
        primaryRed: '#FF5630',
      },
      animation: {
        slideup: 'slideup 0.4s ease-in-out',
        slidedown: 'slidedown 0.4s ease-in-out',
        slideright: 'slideright 0.3s ease-in-out',
        slideleft: 'slideleft 0.3s ease-in-out',
        slowfade: 'slowfade 0.2s ease-in-out  ',
        slowfade2: 'slowfade 1s  ease-in-out  ',
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slowfade2: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)', },
          to: { opacity: 1, transform: 'translateY(0%)' },

        },
        slidedown: {
          from: { opacity: 0, transform: 'translateY(-25%)' },
          to: { opacity: 1, transform: 'translateY(0%)' },
        },
        slideright: {
          from: { opacity: 0, transform: 'translateX(25%)' },
          to: { opacity: 1, transform: 'translateX(0%)' },
        },
        slideleft: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(25%)' },
        },
      }
    },
  },
  plugins: [],
}

