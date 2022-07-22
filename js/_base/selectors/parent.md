```js
const parent = el.parentElement;

// Или так
const parent = el.parentNode;
```

Разница между `parentNode` и `parentElement` в том, что попытка найти родителя `document`'а с помощью `parentElement` вернет `null`, так как корневой узел не является элементом.
