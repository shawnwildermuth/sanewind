# SandWind

This is a small @tailwindcss plugin to provide a minimal, sane defaults to several kinds of elements in tailwindcss:

- Buttons
- Form Elements
- Headers

This isn't meant to replace existing plugins like @tailwindcss/typography and @tailwind/forms. This is specifically meant to accept the CSS reset but give these commonly used elements a default look that can be the basis of styling. This should be helpful for prototyping or setting up greenfield projects. I built it specifically for demos that I write, but could help others in different situations. 

If you have other elements that need a sane default, feel free to PR or add an Issue - but keep in mind that it needs to be a simple default look, not a specific stylized look and feel. That's not what this is here for.

## Installation

To get started, add the package to your project:

```
> npm install @shawnwildermuth/sanewind -D
```

Next, you need to add the plugin to the `tailwind.config.js` file. Just import it and add it to the plugins:

```js
const sanewind = require("@wilderminds/sanewind");

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
```

