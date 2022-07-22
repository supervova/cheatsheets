```js
const touchSupported =
  'ontouchstart' in window ||
  (
    window.DocumentTouch &&
    document instanceof DocumentTouch
  );
```
