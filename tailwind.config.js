/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        app_white: "#DFF3E4",
        app_yellow: "#F6AE2D",
        app_brown: "#423B0B",
        app_blue: "#01253D",
        app_milk: "#dbcdc6",
      },
      screens: {
        sm: "420px",
      },
    },
  },
  plugins: [],
};
