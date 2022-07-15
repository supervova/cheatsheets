```javascript
// Получить
const html = ele.innerHTML;

// Задать или переопределить
ele.innerHTML = '<h1>Hello World!</h1>';

/* Задать или переопределить, включая открывающий
и закрывающий теги элементы */
const ele = document.querySelector('h2');
ele.outerHTML = '<h3>Изменили!</h3>';
```
