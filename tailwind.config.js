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
        '0%': { transform: 'scale(1) translateY(0%)' },
        '50%': { transform: 'scale(0.3) translateY(0%)' },
        '100%': { transform: 'scale(0.3) translateY(-110%)' },
      }
    },
    animation: {
      entering: 'entering 2s ease-in-out 2s forwards'
    },
    extend: {},
  },
  plugins: [],
}
