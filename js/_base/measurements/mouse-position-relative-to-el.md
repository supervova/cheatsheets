```js
el.addEventListener('mousedown', (e) => {
  const target = e.target;

  // Границы цели
  const rect = target.getBoundingClientRect();

  // Координаты клика
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
});
```
