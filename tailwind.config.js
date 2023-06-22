/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{html,js,tsx}", "./pages/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(253 164 175)",
        default: "rgb(244,245,247)",
      },
    },
  },
  plugins: [],
}

