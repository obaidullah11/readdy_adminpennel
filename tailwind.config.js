/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          50: '#ffebe6',
          100: '#ffd6cc',
          200: '#ffad99',
          300: '#ff8566',
          400: '#ff5c33',
          500: '#ff3008',
          600: '#ff3008',
          700: '#992500',
          800: '#661900',
          900: '#330c00',
        },
      },
    },
  },
  plugins: [],
}
