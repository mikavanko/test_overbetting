/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        "dark": "var(--color-dark)",
        "light-grey": "var(--color-light-grey)",
      }
    },
    fontFamily: {
      'koulen': ['Koulen', 'Arial', 'sans-serif'],
      'inter': ['Inter', 'Arial', 'sans-serif'],
    }
  },
  plugins: [],
}
