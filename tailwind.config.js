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
    keyframes: {
      entering: {
        from: { height: '100%', width: '100%' },
        to: { height: '10%', width: '10%' }
      }
    },
    animation: {
      entering: 'entering 1s ease-in-out'
    },
    extend: {},
  },
  plugins: [],
}
