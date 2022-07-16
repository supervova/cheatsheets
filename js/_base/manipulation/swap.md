Функция меняет местами узлы, передаваемые в параметры.

```javascript
const swap = (nodeA, nodeB) => {
  const parentA = nodeA.parentNode;
  const siblingA =
    nodeA.nextSibling === nodeB
      ? nodeA
      : nodeA.nextSibling;
  
  // Перемещаем `nodeA` выше узла `nodeB`
  nodeB.parentNode.insertBefore(nodeA, nodeB);
  
  // Перемещаем `nodeB` выше соседа снизу `nodeA`
  parentA.insertBefore(nodeB, siblingA);
};
```
