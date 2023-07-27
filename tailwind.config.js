/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'], 
        'quick-sand': ['Quicksand', 'sans-serif']
      },
      colors: {
        'main-red': '#EB1F0D'
      }
    },
  },
  plugins: [],
}

