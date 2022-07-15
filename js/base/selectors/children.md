Потомки можно получать из двух свойств:

- `children` возвращает коллекцию HTML-элементов, то есть узлов, соответствующих тегам;
- `childNodes` — все дочерние элементы, включая текст и комментарии.

```javascript
const children = ele.children;
const childNodes = ele.childNodes;
```

Потомков можно [перебрать циклом](#topic-loop-nodelist), выбрать по индексу или с помощью методов `firstChild` и `lastChild`.

```javascript
const first = ele.firstChild;
const last = ele.lastChild;

// Те же потомки — первый и последний
const first = childNodes[0];
const last = childNodes[childNodes.length - 1];
```
