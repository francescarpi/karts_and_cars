/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#c21919",
        secondary: "#2e67a8",
      },
      fontFamily: {
        faster: ["FasterOne"],
        default: ["Livvic"],
      },
    },
  },
  plugins: [],
};
