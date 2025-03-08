# next-wait-to-display
> Wait element display in document.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
yarn add @jswork/next-wait-to-display
```

## usage
```js
import '@jswork/next-wait-to-display';

// check target:
nx.waitToDisplay('#target', 1000, (el) => {
  console.log('has element!', el);
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-wait-to-display/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-wait-to-display
[version-url]: https://npmjs.org/package/@jswork/next-wait-to-display

[license-image]: https://img.shields.io/npm/l/@jswork/next-wait-to-display
[license-url]: https://github.com/afeiship/next-wait-to-display/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-wait-to-display
[size-url]: https://github.com/afeiship/next-wait-to-display/blob/master/dist/next-wait-to-display.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-wait-to-display
[download-url]: https://www.npmjs.com/package/@jswork/next-wait-to-display