Найти соседа выше.

```javascript
const prev = ele.previousElementSibling;
```

Найти соседа ниже.

```javascript
const next = ele.nextElementSibling;
```

Если нужно найти не только элементы, но и текстовые узлы, тогда так:

```javascript
const prev = ele.previousSibling;
const next = ele.nextSibling;
```

Найти всех соседей.

```javascript
// Сначала найти родителя
const parent = ele.parentNode;

// Найти всех потомков за исключением исходного `ele`
const siblings = [].slice
  .call(parent.children)
  .filter((child) => {
    return child !== ele;
  });
```
