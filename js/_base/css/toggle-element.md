```js
const box = document.querySelector('.box');

box.style.display = 'none';
box.style.display = 'block';

// Функция-переключатель
const toggle = (el) => {
  const { display } = el.style;
  el.style.display = display === 'none' ? 'block' : 'none';
};
```
