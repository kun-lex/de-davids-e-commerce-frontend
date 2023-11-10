/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  extend: {
    backgroundImage: {
      "hero-bg": "url('../components/images/davidbg.png')",
    }
  },
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'inter': ['Source Sans 3', 'sans-serif'],
      'jomo': ['Jomolhari', 'serif'],
      'koushon': ['Kaushan Script', 'cursive']
    },
  },
  plugins: [],
}

