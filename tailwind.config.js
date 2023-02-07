/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        primary: { 500: '#FF6363;', 800: '#FF1313;'}, 
        another: {300: '#191A24;' },
        box1: {200: '#1e1b29'},
        box2: {100: '#1e1828'},
        reddish: {400: '#FB6087'},	
        white: {600:'#8486A9'}
      }
    },
  },
  plugins: [],
}
