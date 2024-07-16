/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{css,js,jsx,tsx,ts}", ,],
  theme: {
    extend: {
      colors: {
        primary: "#078093",
        secondary: "#e4740e",
        darkShade: "#808080",
      },
      
    },
  },
  plugins: [],
};
