/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedFaint: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkFaintBlue: 'hsl(227, 12%, 61%)',
        DeepDarkBlue: 'hsl(233, 12%, 13%)',
        FaintRed: 'hsl(13, 100%, 96%)',
        LightGray: 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}
