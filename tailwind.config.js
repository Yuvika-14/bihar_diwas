/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          900: '#0B0B13',
          800: '#14142B',
          700: '#1D1D41',
          light: '#F5F5FA',
          accent: '#D4AF37', // Gold for heritage feel
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // For premium heritage headings
      },
      animation: {
        'blob': "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        }
      }
    },
  },
  plugins: [],
}
