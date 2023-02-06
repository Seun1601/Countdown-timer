/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        primary: { 500: '#FF6363;', 800: '#FF1313;'}, 
        another: {300: '#1e1f29;' },	
      }
    },
  },
  plugins: [],
}
