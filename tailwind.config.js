/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#e01f4f",
        secondary: "#8f8b18",
      },
      fontFamily: {
        faster: ["FasterOne"],
        default: ["Livvic"],
      },
    },
  },
  plugins: [],
};
