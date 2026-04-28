/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        caldeira: {
          50: "#faf8f6",
          100: "#f5f1ed",
          200: "#ede6db",
          300: "#dcc7ae",
          400: "#c9a87f",
          500: "#b8915c",
          600: "#a37a4f",
          700: "#8c6843",
          800: "#6b513a",
          900: "#54402f",
          950: "#2d2218",
        },
        iron: {
          50: "#f8f7f6",
          100: "#e8e6e0",
          200: "#d1cdc1",
          300: "#b5afa1",
          400: "#9a928b",
          500: "#7d7670",
          600: "#645a53",
          700: "#4d4440",
          800: "#3d3935",
          900: "#2a2622",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Garamond", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-caldeira": "linear-gradient(135deg, #b8915c 0%, #8c6843 100%)",
        "gradient-dark": "linear-gradient(135deg, #54402f 0%, #2d2218 100%)",
      },
    },
  },
  plugins: [],
};
