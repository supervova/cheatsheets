Функция выделяет текст элемента `. Не получает, и не сохраняет — только выделяет — также, как пользователь текст курсором)

```js
const selectText = (el) => {
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(el);
  selection.removeAllRanges();
  selection.addRange(range);
};
```
