```javascript
/* Получить координаты 'top' и 'left'
относительно области просмотра */
const rect = ele.getBoundingClientRect();

/* Приплюсовать дистанцию прокрутки
по вертикали и горизонтали */
const top = rect.top + document.body.scrollTop;
const left = rect.left + document.body.scrollLeft;
```
