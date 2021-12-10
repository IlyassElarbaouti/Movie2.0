module.exports = {
  mode: 'jit',
  content: ["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {},
    extend: {
      screens:{
        '3xl':'2000px'
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}