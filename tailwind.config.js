const colors = require('tailwindcss/colors')
const scrollbar = require("tailwind-scrollbar");

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        amber: colors.amber,
        lime: colors.lime,
        teal: colors.teal,
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        rose: colors.rose
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [scrollbar],
};
