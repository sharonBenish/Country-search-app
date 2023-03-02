/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body:['Nunito Sans']
      },
      colors:{
        'light-bg':'hsl(0, 0%, 98%)',
        'dark-blue':'hsl(209, 23%, 22%)',
        'dark-bg':'hsl(207, 26%, 17%)',
        'grey':'hsl(0, 0%, 52%);'
      }
    },
  },
  plugins: [],
}
