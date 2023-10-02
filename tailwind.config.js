/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {

      'montserrat': ['Montserrat'],
    },


    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },


    extend: {
      colors: {
        'color-black': '#000000',
        'color-darker': '#170C29',
        'color-dark': '#352F44',
        'color-primary': '#5C5470',
        'color-light': '#B9B4C7',
        'color-texts': '#FAF0E6',
        'color-titles': '#FBCB9B',
      },

      width:  {
        'main-width': '75vw'
      }

    },
  },
  plugins: [],
}

