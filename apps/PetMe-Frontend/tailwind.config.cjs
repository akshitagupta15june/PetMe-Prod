/* eslint-disable no-undef */
export const purge = ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'];
export const darkMode = false;
export const theme = {
  extend: {},
};
export const variants = {
  extend: {},
};
export const plugins = [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
  require('@tailwindcss/aspect-ratio'),
];
