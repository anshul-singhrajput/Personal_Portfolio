/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navyBlue: '#001f3f', // Define navy blue color
      },
      screens: {
        'tablet': '768px', // Customize this size as per your needs
      },
    },
  },
  plugins: [],
}