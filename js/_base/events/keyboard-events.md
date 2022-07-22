```js
// Другое событие клавиатуры - `keyup`
window.addEventListener('keydown', (event) => {
  if (event.key === 'Esc' || event.key === 'Escape') {
    closeDropdowns();
  }
});
```
