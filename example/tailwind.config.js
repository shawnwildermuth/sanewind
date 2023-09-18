const sanewind = require("@shawnwildermuth/sanewind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [sanewind]
}

