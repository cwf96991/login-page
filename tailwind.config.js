/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");

// eslint-disable-next-line no-undef
module.exports = withMT({
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
});
