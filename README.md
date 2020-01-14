# next-wait-to-display
> Wait element display in document.

## installation
```bash
npm install -S @feizheng/next-wait-to-display
```

## usage
```js
import '@feizheng/next-wait-to-display';

// check target:
nx.waitToDisplay('#target', 1000, (el) => {
  console.log('has element!', el);
});
```
