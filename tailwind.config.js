/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{css,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
};
