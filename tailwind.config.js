/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "linear-gradient(102.27deg, #5948B7 0%, #602DA2 100%)",
        "gradient-card1":
          "linear-gradient(95.04deg, #52449B 15.04%, #7D12AF 89.27%);",
      },
    },
  },
  plugins: [],
};
