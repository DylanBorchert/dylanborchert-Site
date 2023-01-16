/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* CSS HEX */
        'smoky-black': '#121212ff',
        'primary-1': '#0292F2',
        'secondary-1': '#0261A1',
        'primary-2': '#FFBE0B',

      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}