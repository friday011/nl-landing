const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: "#CB313E",
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      serif: ["Inter", ...defaultTheme.fontFamily.serif],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
