const sandwind = require("@wilderminds/sanewind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [sandwind]
}

