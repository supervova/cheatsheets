По умолчанию, нажатие клавиши Enter или одновременное нажатие клавиш Enter и Shift переводит каретку в `textarea` на новую строку. Но часто, например, в строковых редактируемых элементах, нажатием Enter надо подтверждать правки и выходить из режима редактирования. Для того, чтобы создать новую строку в `textarea` остается только комбинация Shift+Enter.

Для предотвращения перевода на новую строку Enter'ом мы можем обработать событие `keydown`.

```html
<textarea id="message"></textarea>
```

```javascript
const ele = document.getElementById('message');

ele.addEventListener('keydown', (e) => {
  // Получаем кодовый номер кнопки
  const keyCode = e.which || e.keyCode;
  
  // 13 — это Enter
  if (keyCode === 13 && !e.shiftKey) {
    // Запрещаем реакцию по умолчанию - перевод строки
    e.preventDefault();
    
    // И делаем что-то другое, например, отправляем форму
  }
});
```
