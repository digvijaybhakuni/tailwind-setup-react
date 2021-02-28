# the-blog

This demo app to learn React With Tailwind and later we will add firebase support to it


## tailwindcss 

Setup process for the tailwindcss,  

> Install tailwindcss using `npm`

```bash
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

```

Create React App doesn't support PostCSS 8 yet so you need to install the Tailwind CSS v2.0 PostCSS 7 compatibility build for now as we've shown above.


### Install and configure CRACO

Since Create React App doesn't let you override the PostCSS configuration natively, we also need to install CRACO to be able to configure Tailwind:

```bash
npm install @craco/craco
```

Once it's installed, update your `scripts` in your `package.json` file to use craco instead of `react-scripts` for all scripts except `eject`:

Next, create a `craco.config.js` at the root of our project and add the `tailwindcss` and `autoprefixer` as PostCSS plugins:

```js
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

Next, generate your tailwind.config.js file:

```bash
npx tailwindcss init
```


This will create a minimal tailwind.config.js file at the root of your project:

```js
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

In your `tailwind.config.js` file, configure the `purge` option with the paths to all of your components so Tailwind can tree-shake unused styles in production builds:

`purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],`


### Include Tailwind in your CSS

```css
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```