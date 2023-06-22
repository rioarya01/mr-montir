/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './product/**/*.{html,js}',
    './service/**/*.{html,js}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    theme: {
      container: {
        center: true,
        padding: '16px',
      },
    },
    extend: {
      colors: {
        primary: '#0081C9',
        secondary: '#5BC0F8',
        terteriary: '#FFC93C',
        dark: '#0F172A',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
