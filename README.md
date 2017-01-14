# Webpack Blocks Presets

This is a common set of presets for [webpack-blocks](https://github.com/andywer/webpack-blocks/).

## Usage

Simply import any of the presets or configs and use them within your webpack-blocks' `createConfig()`.

```js
const { createConfig } = require('@webpack-blocks/webpack2');
const { bundle } = require('@treshugart/webpack-blocks');

module.exports = createConfig(bundle());
```

That will generate a `dist/index.js` file in dev mode and a `dist/index.min.js` file in production. In Webpack 2, dev mode is on by default. To enable prod mode, pass `-p`. If you want to build both for your dist, then simply run `webpack` twice and specify the `-p` option on one of the runs.

```sh
webpack && webpack -p
```

## Presets

### `bundle()`

Creates a bundle in `dist/index.js` using Babel. If prod mode is specified it is minified with Uglify and saved as `dist/index.min.js`.

### `bundleWithDeps()`

Same as `bundle()` but with bundle in your dependencies, too.

## configs
