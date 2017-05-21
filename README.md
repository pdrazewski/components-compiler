# Components compiler

Webpack compiler for creating frontend components. Build on top of Vuejs, Twig templates, Scss and ES6 javascript. Used as a compile *engine* in https://github.com/pdrazewski/components-kit

## Features

- Compile Vue.js templates with vue-loader
- Compile HTML / TWIG templates with twig-loader
- Compile JS with babel-loader (ES2015 preset)
- Compile CSS with scss-loader, css-loader and postcss-loader (autoprefixer)
- Bundle fonts and images with url-loader and file-loader
- Source maps are set up for both CSS and JS
- Live update with webpack-dev-server
