/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",  // Add other custom folder paths if needed
    "./screen/**/*.{js,jsx,ts,tsx}",  // Add additional directories as necessary
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
