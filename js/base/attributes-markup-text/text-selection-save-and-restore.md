```javascript
/**
* Сохранить выделение
* @returns экземпляр Range, если на странице что-то выделено
*/
const save = () => {
  const selection = window.getSelection();
  return selection.rangeCount === 0 ? null : selection.getRangeAt(0);
};

// Восстановить выделение
// `range` is a `Range` object
/**
* Восстановление выделения
* @param {object} range объект Range, фрагмент документа
*/
const restore = (range) => {
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
};
```
