```js
// Получение глобальной переменной (в :root)
const myVar =
  getComputedStyle(document.documentElement)
  .getPropertyValue('--my-var');

// Изменение глобальной переменной
document.documentElement.style
.setProperty('--my-var', 'pink');

const el = document.querySelector('.my-element');

if (el) {
  // Получение локальной переменной
  getComputedStyle(el)
    .getPropertyValue('--my-var');

// Изменение локальной переменной
  el.style.setProperty('--my-var', '10px');
}
```
