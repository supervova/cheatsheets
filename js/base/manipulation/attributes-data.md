Получим значение атрибута `data-message` элемента.

```javascript
const message = ele.getAttribute('data-message');

// …или так
const message = ele.dataset.message;
```

Установим значение `data`-атрибута.

```javascript
ele.setAttribute('data-message', 'Hello World');

// или
ele.dataset.message = 'Hello World';
```

Удалим data-атрибут.

```javascript
ele.removeAttribute('data-message');

// или
delete ele.dataset.message;
```

Кстати `delete ele.dataset` не удалит все атрибуты. Надо удалять по одному.
