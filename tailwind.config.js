/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#8B9E70',
        secondary: '#B5C1A3',
        footer: '#8B9E70',
        plastic: '#9BC188',
        battery: '#323516',
      },
      colors: {
        primary: '#323516',
        white200: '#E6E6E6',
      },
      borderColor: {
        primary: '#8B9E70',
        secondary: '#323516',
      },
    },
  },
  plugins: [],
};
