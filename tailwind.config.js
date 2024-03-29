// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{njk,md,js}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'inherit',
          },
        },
      }),
      colors: {
        bleu: '#3549cd',
      },
      fontFamily: {
        neo:['Arial','sans-serif'],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
