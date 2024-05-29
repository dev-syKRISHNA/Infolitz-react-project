/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      '2xl':'1920px',
      'xl': '1441px',
      'lg': '1125px',
      'md': '769px',
      'sm': '390px',
    }
  },
  plugins: [],
}

