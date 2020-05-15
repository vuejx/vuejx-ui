# vuejx-text

> vuejxEditor

## Installation

### Using yarn

`yarn add vuejx-text`

### Using npm

`npm i --save vuejx-text`

## Demo and Docs

`npm run serve`

## Usage

### ES6 Modules / CommonJS

```js
import vuejxEditor from 'vuejx-text';
import 'vuejx-text/dist/vuejx-text.min.css';

Vue.component('vuejx-text', vuejxEditor);
```

```html
<vuejx-text text="Hello World!"></vuejx-text>
```

### UMD

```html
<vuejx-text text="Hello World!"></vuejx-text>

<script src="https://unpkg.com/vue" charset="utf-8"></script>
<script src="./dist/umd/vuejx-text.min.js" charset="utf-8"></script>
<link rel="stylesheet" type="text/css" href="./dist/umd/vuejx-text.min.css">

<script type="text/javascript">
  Vue.component('vuejx-text', window.vuejxEditor.default);
</script>
```

## Build

Build configuration is located in the `poi.config.js` file, to build just run: `npm run build`, it will build to `cjs` and `umd` directories.

## Tests

This template uses karma with chai by default, you can change test settings in poi.config.js

`npm run test`
`npm run test:watch`
`npm run test:cov`

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
