/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "app-BG": "#2A0D2E",
      "app-title-color": "#FA5075",
      "app-dot": "#AF3851",
    },
    extend: {},
  },
  plugins: [],
};
