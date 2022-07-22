```js
// Получаем «дедушку»
const parent = el.parentNode;

// Выносим всех потомков на уровень «дедушки»
while (el.firstChild) {
  parent.insertBefore(el.firstChild, el);
}

// Когда родитель опустел, удаляем его
parent.removeChild(el);
```
