/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        courier: ["Courier Prime", "monospace"],
      },
      colors: {
        coklat: "#e6e2de",
        itam: "#333",
      },
    },
  },
  plugins: [],
};
