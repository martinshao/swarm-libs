/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./packages/**/*/*.{tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#297EFF'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
