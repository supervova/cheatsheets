Потомки можно получать из двух свойств:

- `children` возвращает коллекцию HTML-элементов, то есть узлов, соответствующих тегам;
- `childNodes` — все дочерние элементы, включая текст и комментарии.

```js
const children = el.children;
const childNodes = el.childNodes;
```

Потомков можно [перебрать циклом](#topic-loop-nodelist), выбрать по индексу или с помощью методов `firstChild` и `lastChild`.

```js
const first = el.firstChild;
const last = el.lastChild;

// Те же потомки — первый и последний
const first = childNodes[0];
const last = childNodes[childNodes.length - 1];
```
