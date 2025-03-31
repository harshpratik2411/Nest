/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        'custom-green': '#3BB77E',
        'custom-blue': '#253D4E',
        'custom-white': '#FFFFFF',
        'custom-gray': '#B6B6B6',
        'custom-new-gray':"#7E7E7E",
        'custom-new-white':"#ECECEC",
      
        
      },
    },
  },
  plugins: [],
}
