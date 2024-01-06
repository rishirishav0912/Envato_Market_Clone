/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg-1.jpg')",
        "features-pattern": "url('/src/assets/bg-5.jpg')"
      }
    },
  },
  plugins: [],
}

