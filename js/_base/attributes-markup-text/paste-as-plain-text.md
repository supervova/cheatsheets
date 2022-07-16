Предположим, у нас есть текстовой редактор `#editor` и нам нужно вставить в него содержимое буфера обмена, очистив его от форматирования — чистый текст.

```javascript
const editorEle = document.getElementById('editor');

// Обработчик события `paste`
editorEle.addEventListener('paste', (e) => {
  // Предотвращаем действия браузера по умолчанию
  e.preventDefault();

  // Получаем текст из буфера
  const text = e.clipboardData
    ? (
        e.originalEvent || e
      ).clipboardData.getData('text/plain')
    : '';

  /* метод execCommand устарел - https://mzl.la/3oWCFle
  но используем, если поддерживается браузером */
  if (document.queryCommandSupported('insertText')) {
    document.execCommand('insertText', false, text);
  } else {
    // Вставляем текст в место положения курсора
    const range = document.getSelection().getRangeAt(0);
    range.deleteContents();

    const textNode = document.createTextNode(text);
    range.insertNode(textNode);
    range.selectNodeContents(textNode);
    range.collapse(false);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
});
```
