/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        translateYAndFade: {
          '0%': { transform: 'translateY(100%)', opacity: '0.4' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        translateXFromRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0.4' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        translateXFromLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0.4' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        translateYAndFade: 'translateYAndFade 1s ease-in-out',
        translateXFromRight: 'translateXFromRight 1s ease-in-out',
        translateXFromLeft: 'translateXFromLeft 1s ease-in-out',
      },
    },
  },
  plugins: [],
}