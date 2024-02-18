/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'words-primary': '#F236EA',
        'words-primary-darker': '#8E4189',
        'words-secondary': '#FFF',
        'words-accent': '#6ACFF6',
        'words-dark': '#151515', 
        'words-info': '#DCF8FF',
        'words-base': '#FFFFFF',
        'words-base-focus': '#EFFBFF',
        'words-neutral-10': '#F9F9F9',
        'words-neutral-20': '#EEEEEE',
        'words-neutral-30': '#AAB0B8',
        'words-neutral-40': '#6E757D',
        'words-neutral-50': '#3C3C3C',
        'words-neutral-50-70': '#3C3C3C30',
        'words-success': '#80EA4E',
        'words-danger': '#E4212B',
        'words-yellow': '#FBBD23',
        'words-yellow-40': '#FFFBC7',
        'words-shade': '#00000026',
      },
      width: {
        'main-container': '90%', 
      }, 
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        niconne: ["Niconne", 'cursive']
      },
      keyframes: {
        'cursor-animation': {
          from: {
            transform: 'scale(0)', 
            opacity: '1'
          }, 
          to: {
            transform: 'scale(2)', 
            opacity: '0'
          }
        }
      }, 
      animation: {
        'cursor-animation': 'cursor-animation 1s ease 1',
      }
    },
  },
  plugins: [],
}

