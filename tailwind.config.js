/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "title": "#1E3A8A",
        "title-dark": "#50B3EA",
      }
    },
  },
  plugins: [
    '@tailwindcss/typography',
  ],
  darkMode: "class"
}
