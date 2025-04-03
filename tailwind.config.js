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
        quicksand: ['quicksand', 'sans-serif'],

      },
      colors: {
        'custom-green': '#3BB77E',
        'custom-blue': '#253D4E',
        'custom-white': '#FFFFFF',
        'custom-white-stroke': '#F2F3F4',
        'custom-gray': '#B6B6B6',
        'custom-new-gray':"#7E7E7E",
        'custom-new-white':"#ECECEC",
        'custom-light-green':"#BCE3C9",
        'custom-mustard':"#F5F5DC",
      
        
      },
    },
  },
  plugins: [],
}
