Напрямую текст можно скопировать в буфер обмена только из поля ввода. Если нужно копировать сдержание, полученное каким-то другим способом, — например, [выделенное пользователем](#topic-get-selected-text) — решение немножко усложнится. Сначала придется сохранить нужный фрагмент в переменную. Затем создать временное поле ввода. Передать в его атрибут `value` сохраненное значение. А после копирования в бувер, удалить временный элемент (в примере — `textarea.myTextarea`).

```javascript
// Если нужно скопировать из поля, всё просто:
  const myTextarea =
    document.getElementById('my-tеxtarea');

/* В иных случаях создаем «перевалочную» `textarea`.
Удаляем оформление. Прячем, чтобы пользователь
не увидел. Переносим в атрибут `value` нужный
фрагмент, сохраненный в переменную (в примере —
`text`). Вставляем «времянку» в документ и
переводим на неё фокус. */
// const myTextarea =
//   document.createElement('textarea');
// myTextarea.style.border = '0';
// myTextarea.style.padding = '0';
// myTextarea.style.margin = '0';
// myTextarea.style.position = 'absolute';
// myTextarea.style.left = '-9999px';
// myTextarea.style.top =
//   `${document.documentElement.scrollTop}px`;
// myTextarea.value = text;
// document.body.appendChild(myTextarea);
// myTextarea.focus();

myTextarea.select();
// Протестировать: хак для мобильных устройств
// myTextarea.setSelectionRange(0, 99999);

// Копируем текст в буфер
navigator.clipboard.writeText(myTextarea.value);

// «Времянку» удаляем
// document.body.removeChild(myTextarea);
```

См. «[Clipboard_API](https://developer.mozilla.org/ru/docs/Web/API/Clipboard_API).
