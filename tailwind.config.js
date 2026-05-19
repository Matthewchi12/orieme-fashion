/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          dark: '#B8941F',
          light: '#F4E4BC'
        },
        luxury: {
          black: '#000000',
          charcoal: '#1a1a1a',
          gray: '#2d2d2d'
        }
      }
    },
  },
  plugins: [],
}
