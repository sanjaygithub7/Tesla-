/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./bonsai.html"],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      
      }
    },
  },
  plugins: [ 
  require('@tailwindcss/forms'),
  require('tailwind-scrollbar'),
],
  


}

