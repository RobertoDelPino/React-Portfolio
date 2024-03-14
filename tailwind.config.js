/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "title": "#50B3EA"
      }
    },
  },
  plugins: [
    '@tailwindcss/typography',
  ],
  darkMode: "class"
}
