/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mac: {
          white: "#ffffff",
          black: "#000000",
          gray: "#c0c0c0",
          darkgray: "#808080",
          shadow: "#8a8a8a",
        },
      },
      fontFamily: {
        chicago: ["Chicago", "system-ui", "sans-serif"],
      },
      boxShadow: {
        mac: "2px 2px 0 #8a8a8a",
        inset: "inset 1px 1px 0 #fff, inset -1px -1px 0 #808080",
      },
      spacing: {
        px1: "1px",
        px2: "2px",
        px4: "4px",
        px8: "8px",
      },
      borderRadius: {
        sm: "2px",
      },
      backgroundImage: {
        macPattern: "url('/patterns/mac-pattern.png')",
      },
    },
  },
  plugins: [],
};
