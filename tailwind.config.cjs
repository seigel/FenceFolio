/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        normal:
        "linear-gradient(to bottom, rgba(77, 57, 75, 0.5), rgba(77, 27, 36, 0.8)), url('/nathanael-desmeules-iI_6_Z1VodQ-unsplash.jpg')",
        // "linear-gradient(to bottom, rgba(7, 0, 0, 0.5), rgba(9, 0, 0, 0.8)), url('/bg-sharks-world.jpg')",
        main: "linear-gradient(to bottom, rgba(77, 57, 75, 0.2), rgba(77, 27, 36, 0.2)), url('/micaela-parente-YGgKE6aHaUw-unsplash.jpg')",
      },
      fontFamily: {
        Berkshire: ["Berkshire Swash", "cursive"],
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
