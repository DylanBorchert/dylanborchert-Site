/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* CSS HEX */
        'smoky-black': '#121212',
        'primary-1': '#0292F2',
        'secondary-1': '#0261A1',
        'primary-2': '#FFBE0B',
        'primary-3': '#DB4437',
        'primary-4': '#0F9D58'

      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
