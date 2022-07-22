```js
// Стили документа
const styles = window.getComputedStyle(el);

// Размер без рамки и padding
const height =
  el.clientHeight -
  parseFloat(styles.paddingTop) -
  parseFloat(styles.paddingBottom);
const width =
  el.clientWidth -
  parseFloat(styles.paddingLeft) -
  parseFloat(styles.paddingRight);

// Размер c padding
const { clientHeight } = el;
const { clientWidth } = el;

// Размер c рамкой и padding
const { offsetHeight } = el;
const { offsetWidth } = el;

// Размер c рамкой, padding и margin
const heightWithMargin =
  el.offsetHeight +
  parseFloat(styles.marginTop) +
  parseFloat(styles.marginBottom);
const widthWithMargin =
  el.offsetWidth +
  parseFloat(styles.marginLeft) +
  parseFloat(styles.marginRight);
```
