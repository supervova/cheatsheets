```javascript
// Получаем «дедушку»
const parent = ele.parentNode;

// Выносим всех потомков на уровень «дедушки»
while (ele.firstChild) {
  parent.insertBefore(ele.firstChild, ele);
}

// Когда родитель опустел, удаляем его
parent.removeChild(ele);
```
