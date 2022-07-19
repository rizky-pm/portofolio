/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      heading: ['Montserrat', 'sans-serif'],
      body: ['Lato', 'sans-serif'],
    },
    screens: {
      xs: '414px',
      ...defaultTheme.screens,
    },
    extend: {
      // screens: {
      //   xs: '414px',
      //   sm: '640px',
      //   md: '768px',
      //   lg: '1024px',
      //   xl: '1280px',
      //   '2xl': '1536px',
      // },
      colors: {
        dark: '#000000',
        lightGray: 'hsla(240, 8%, 65%, 1)',
        gray: '#3B485F',
        blue: 'hsla(215, 45%, 53%, 1)',
        lightBlue: 'hsla(210, 63%, 77%, 1)',
        veryLightBlue: 'hsla(212, 53%, 83%, 1)',
        light: '#FEFCFD',

        englishViolet: '#3B3355',
        purpleNavy: '#5D5D81',
      },
    },
  },
  plugins: [],
};
