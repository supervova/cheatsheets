```html
<h2 class="subhead">Lorem <b>Ip.</b></h2>
```

```js
const el = document.querySelector('h2');

// Получить. Результат примера: `Lorem <b>Ip.</b>`
const html = el.innerHTML;

// Задать или переопределить
el.innerHTML = 'Hello World!';

/* Задать или переопределить, включая открывающий
и закрывающий теги элемента. Результатом примера
будет замена <h2 class="subhead">Hello World!</h2>
заголовком `h3` с новым содержанием. */
el.outerHTML = '<h3>Изменили!</h3>';
```
