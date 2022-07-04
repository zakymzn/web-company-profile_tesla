/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      // custom warna dan ukuran layar di sini
      screens: {
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
