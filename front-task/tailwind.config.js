/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      colors: {
        /** Можно использовать цвета из main.scss var(--some-color), но тогда не работает opacity через классы tailwind */
        "primary": "#3d06d7",
        "primary-light": "#906fee",
        "dark": "#1e0e4c",
        "light-grey": "#cfcadf",
      }
    },
    fontFamily: {
      'koulen': ['Koulen', 'Arial', 'sans-serif'],
      'inter': ['Inter', 'Arial', 'sans-serif'],
    }
  },
  plugins: [],
}
