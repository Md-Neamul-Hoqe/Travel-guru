/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        yellow: "#F9A51A",
      },

      fontFamily: {
        "bebas-Neue": "'Bebas Neue', sans-serif",
        Montserrat: "'Montserrat', sans-serif",
      },
    },
  },
};
