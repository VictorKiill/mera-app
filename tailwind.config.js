/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
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
        '50%': { transform: 'scale(0.35) translateY(0%)' },
        '100%': { transform: 'scale(0.35) translateY(-90%)' },
      },
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' }
      },
      spin: {
        from: {
          transform: 'rotate(0deg)'
        },
        to: {
          transform: 'rotate(360deg)'
        }
      }
    },
    animation: {
      entering: 'entering 2s ease-in-out 2s forwards',
      fadeIn: 'fadeIn 1.5s ease-in-out 3s forwards',
      spin: 'spin 1s linear infinite'
    },
    extend: {},
  },
  plugins: [],
}
