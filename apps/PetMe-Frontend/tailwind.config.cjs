/* stylelint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        'smoke': '0 8px 15px rgba(255, 87, 51, 0.7)',
      }
    },
  },
  plugins: [],
};
