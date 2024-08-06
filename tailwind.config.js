/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#52B6DF",
        "card-black": "#2d2f31",
        "light-black": "#6a6f73",
        "grey-dark": "#4d3105",
        "yellow": "#eceb98",
        "footer-main": "#457b9d",
        "blue-600": "#264653",
        "in-progress": "#FFA500",
        "completed": "#008000",
        "cancelled": "#FF0000",
        "hover-blue": "#3D9AC4",
      },
      gradientColorStops: (theme) => ({
        "custom-blue": "#52B6DF",
        "custom-coral": "#FF6B6B",
      }),
    },
  },
  plugins: [],
};
