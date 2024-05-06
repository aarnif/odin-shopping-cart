/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Caribbean Tool", "sans-serif"],
        nav: ["Merienda", "sans-serif"],
        body: ["Merienda", "sans-serif"],
      },
    },
  },
  plugins: [],
};
