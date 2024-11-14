/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e12121',
        secondary: "#be1717",
      },

      borderWidth: {
        '1.5': '1.5px',
      },
    },
  },
  plugins: [],
}

