/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.ts'],
  },
}

