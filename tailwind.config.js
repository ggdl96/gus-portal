/** @type {import('tailwindcss').Config} */

const r = require('./styles/colors/index');

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./{app,components}/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        ...r,
      },
    },
  },
  plugins: [],
};
