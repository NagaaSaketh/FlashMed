/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.tsx'],
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      transform: {
        'rotate-y-180': 'rotateY(180deg)',
      },
    },
  },
  plugins: [],
}

