Функция выделяет текст элемента `ele`. Не получает, и не сохраняет — только выделяет — также, как пользователь текст курсором)

```javascript
const selectText = (ele) => {
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(ele);
  selection.removeAllRanges();
  selection.addRange(range);
};
```
