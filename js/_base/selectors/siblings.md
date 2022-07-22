Найти соседа выше.

```js
const prev = el.previousElementSibling;
```

Найти соседа ниже.

```js
const next = el.nextElementSibling;
```

Если нужно найти не только элементы, но и текстовые узлы, тогда так:

```js
const prev = el.previousSibling;
const next = el.nextSibling;
```

Найти всех соседей.

```js
// Сначала найти родителя
const parent = el.parentNode;

// Найти всех потомков за исключением исходного `
const siblings = [].slice
  .call(parent.children)
  .filter((child) => {
    return child !== el;
  });
```
