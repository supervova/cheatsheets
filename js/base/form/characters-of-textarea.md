```html
<textarea id="message" maxlength="200"></textarea>
<div id="counter"></div>
```

Обработка события `<input>`, происходящего при любом изменении введенных данных.

```javascript
const messageEle = document.getElementById('message');
const counterEle = document.getElementById('counter');

messageEle.addEventListener('input', (e) => {
  const target = e.target;
  
  // Получаем значение `maxlength`
  const maxLength = target.getAttribute('maxlength');
  
  // Получаем набранное количество символов
  const currentLength = target.value.length;
  
  counterEle.innerHTML = `${currentLength}/${maxLength}`;
});
```

☝️🧐 Распространенной ошибкой является отслеживание события `keyup`. Такой подход не сработает, если:

- Пользователь перетащит текст в `<textarea>`
- Пользователь вставит в `<textarea>` текст из клипборда.
