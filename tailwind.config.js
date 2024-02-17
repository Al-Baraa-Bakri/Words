/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'words-primary': '#F236EA',
        'words-accent': '#6ACFF6',
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
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

