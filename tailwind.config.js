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
      "app-white": "#FFF",
      "app-bg-card": "#53183B",
      "app-green": "#08F403",
      "app-yellow": "#F4C73E",
      "app-gray": "#808080",
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      xl2: ["30px", "32px"],
      link: "10px",
    },
    extend: {},
  },
  plugins: [],
};
