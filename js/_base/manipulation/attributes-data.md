Получим значение атрибута `data-message` элемента.

```js
const message = el.getAttribute('data-message');

// …или так
const message = el.dataset.message;
```

Установим значение `data`-атрибута.

```js
el.setAttribute('data-message', 'Hello World');

// или
el.dataset.message = 'Hello World';
```

Удалим data-атрибут.

```js
el.removeAttribute('data-message');

// или
delete el.dataset.message;
```

Кстати `delete el.dataset` не удалит все атрибуты. Надо удалять по одному.
