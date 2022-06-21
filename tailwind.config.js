/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      brand: ' #4CC1CB',
      whithish: '#F8F8F6'
    },
    fontFamily: {
      buttonText: ['"Gentium Basic"', 'serif']
    },
    extend: {},
  },
  plugins: [],
}
