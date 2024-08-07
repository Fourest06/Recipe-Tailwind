/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    colors: {
      primary: "#FF6363",
      secondary: {
        100: "#E2E2D5",
        200: "#888883",
      },
    },
    extend: {
      fontFamily: {
        body: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
}
