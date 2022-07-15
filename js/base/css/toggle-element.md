```javascript
const box = document.querySelector('.box');

box.style.display = 'none';
box.style.display = 'block';

// Функция-переключатель
const toggle = (ele) => {
  const { display } = ele.style;
  ele.style.display = display === 'none' ? 'block' : 'none';
};
```
