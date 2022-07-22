Получим отступ элемента ` сверху и слева от элемента `target`.

```js
// Координаты `top` и `left` обоих элементов
const eleRect = el.getBoundingClientRect();
const targetRect = target.getBoundingClientRect();

// Вычисляем отступы
const top = eleRect.top - targetRect.top;
const left = eleRect.left - targetRect.left;
```
