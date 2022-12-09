/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-BG": "#2A0D2E",
        "app-BG-Selected": "#3F1744",
        "app-title-color": "#FA5075",
        "app-dot": "#AF3851",
        "app-bg-card": "#53183B",
        "app-green": "#08F403",
        "app-yellow": "#F4C73E",
        "app-gray": "#808080",
        "app-dourado": "#daa520",
        "app-prata": "#C0C0C0",
      },
      fontSize: {
        link: "10px",
        minimo: "6px",
      },
    },
  },
  plugins: [],
};
