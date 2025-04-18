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
        'custom-white-fillstroke': '#F4F6FA',
        'custom-gray': '#B6B6B6',
        'custom-new-gray':"#7E7E7E",
        'custom-new-white':"#ECECEC",
        'custom-light-green':"#BCE3C9",
        'custom-button-light-green':"#DEF9EC",
        'custom-fade-gray':"#F5F5DC",
        'custom-text-gray':"#687188",
        'custom-text-lightgray':"#ADADAD",
        'custom-pink':"#F74B81",
        'custom-light-blue':"#67BCEE",
        'custom-orange':"#F59758",

      
        
      },
    },
  },
  plugins: [],
}
