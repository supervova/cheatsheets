Задача. Предоставить пользователю скопировать в буфер обмена пример кода по нажатию кнопки.

```html
<pre id="sample-code"><code>...</code></pre>
<button id="copy-button">Copy</button>
```

Копирование выполняется в три этапа:

- Выделяем содержимое тега `<code>`.
- Копируем в буфер, используя метод `document.execCommand('copy')`
  ☝️🧐 Метод `execCommand()` официально считается устаревшим, но альтернативы пока нет. Если нужны команды для работы с контентом в режиме редактирования документа — `document.designMode` — пока приходится пользоваться `execCommand()` */
- Предыдущие шаги связаны с изменением пользовательского выделения. Поэтому исходное выделение надо сохранить и восстановить после копирования.

```javascript
(() => {
  const copyButton =
    document.getElementById('copy-button');
  const codeEle =
    document.getElementById('sample-code');

  copyButton.addEventListener('click', () => {
    const selection = window.getSelection();

    // Сохраняем выделение
    const currentRange =
      selection.rangeCount === 0
        ? null
        : selection.getRangeAt(0);

    // Выделяем содержимое между `<code>`
    const range = document.createRange();
    range.selectNodeContents(codeEle);
    selection.removeAllRanges();
    selection.addRange(range);

    // Копируем в буфер
    try {
      document.execCommand('copy');
      copyButton.innerHTML = 'Copied';
    } catch (err) {
      // Невозможно скопировать
      copyButton.innerHTML = 'Copy';
    } finally {
      // Восстанавливаем выделение
      selection.removeAllRanges();
      currentRange &&
      selection.addRange(currentRange);
    }
  });
})();
```
