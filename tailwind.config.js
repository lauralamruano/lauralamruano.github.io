const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        thulian_pink: {
          DEFAULT: "#cb769e",
          100: "#2f121f",
          200: "#5d233e",
          300: "#8c355d",
          400: "#b9487d",
          500: "#cb769e",
          600: "#d592b1",
          700: "#e0adc5",
          800: "#eac8d8",
          900: "#f5e4ec",
        },
        licorice: {
          DEFAULT: "#191018",
          100: "#050305",
          200: "#0a060a",
          300: "#0f0a0e",
          400: "#140d13",
          500: "#191018",
          600: "#52354f",
          700: "#8b5986",
          800: "#b68db1",
          900: "#dac6d8",
        },
        madder: {
          DEFAULT: "#9e0031",
          100: "#20000a",
          200: "#3f0014",
          300: "#5f001e",
          400: "#7e0028",
          500: "#9e0031",
          600: "#e40048",
          700: "#ff2c6f",
          800: "#ff729f",
          900: "#ffb9cf",
        },
        beige: {
          DEFAULT: "#f2f3d9",
          100: "#444616",
          200: "#888c2c",
          300: "#c3c74d",
          400: "#dadd92",
          500: "#f2f3d9",
          600: "#f5f5e0",
          700: "#f7f8e8",
          800: "#fafaef",
          900: "#fcfdf7",
        },
        lavender_blush: {
          DEFAULT: "#fff3fd",
          100: "#640053",
          200: "#c800a7",
          300: "#ff2ddc",
          400: "#ff91ed",
          500: "#fff3fd",
          600: "#fff7fe",
          700: "#fff9fe",
          800: "#fffbfe",
          900: "#fffdff",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

