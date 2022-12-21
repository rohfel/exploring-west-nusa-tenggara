/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
