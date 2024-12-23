/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-color": "#3d9dbc",
        "secondary-color": "#5686ca",
        "backShape-color": "#fbfbfb",
        "footer-color": "#2f4f66",

        "textLight-color": "#f5f5f5",
        "subTitle-color": "#7f7f7f",
        "midLight-color": "#d9d9d9",

        "background-linear": "#daebfe",
      },
    },
  },
  plugins: [],
};
