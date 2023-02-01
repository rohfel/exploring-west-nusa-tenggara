/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        'fredoka-one': ['Fredoka One']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
