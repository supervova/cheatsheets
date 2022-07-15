```javascript
// Стили документа
const styles = window.getComputedStyle(ele);

// Размер без рамки и padding
const height =
  ele.clientHeight -
  parseFloat(styles.paddingTop) -
  parseFloat(styles.paddingBottom);
const width =
  ele.clientWidth -
  parseFloat(styles.paddingLeft) -
  parseFloat(styles.paddingRight);

// Размер c padding
const { clientHeight } = ele;
const { clientWidth } = ele;

// Размер c рамкой и padding
const { offsetHeight } = ele;
const { offsetWidth } = ele;

// Размер c рамкой, padding и margin
const heightWithMargin =
  ele.offsetHeight +
  parseFloat(styles.marginTop) +
  parseFloat(styles.marginBottom);
const widthWithMargin =
  ele.offsetWidth +
  parseFloat(styles.marginLeft) +
  parseFloat(styles.marginRight);
```
