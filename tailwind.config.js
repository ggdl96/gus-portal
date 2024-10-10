/** @type {import('tailwindcss').Config} */

const colors = require('./styles/colors');
const screens = require('./styles/screens');

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./{app,components}/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      screens: {
        ...screens,
      },
      fontFamily: {
        body: ['"SpectralRegular"'],
      },
    },
  },
  plugins: [],
};
