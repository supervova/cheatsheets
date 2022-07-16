Получим отступ элемента `ele` сверху и слева от элемента `target`.

```javascript
// Координаты `top` и `left` обоих элементов
const eleRect = ele.getBoundingClientRect();
const targetRect = target.getBoundingClientRect();

// Вычисляем отступы
const top = eleRect.top - targetRect.top;
const left = eleRect.left - targetRect.left;
```
