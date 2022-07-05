/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      // custom warna dan ukuran layar di sini
      colors: {
        'primary-black': '#252525',
        'primary-white': '#F0F0F0',
      },
      borderWidth: {
        '6': '6px'
      },
      screens: {
        'maxmd': {'max': '1023px'},
        'fhd': { 'max': '1080px' },
        'hd': { 'max': '720px' },
        'xs': { 'max': '480px' },
        'xxs': { 'max': '360px' },
        'xxxs': { 'max': '240px' },
      }
    },
  },
  plugins: [],
}
