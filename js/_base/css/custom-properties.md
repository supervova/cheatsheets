```js
// Изменение переменной в :root
document.documentElement.style
  .setProperty('--my-variable-name', 'pink');

// Изменение локальной переменной
const the2nd = document.querySelector('.hero + .section');
if (the2nd) {
  the2nd.style.setProperty('--zindex', index);
}
```
