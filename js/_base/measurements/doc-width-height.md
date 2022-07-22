В большинстве случаев достаточно `offsetWidth` и `offsetHeight` — свойств любого `HTMLElement`'а. Однако, если задача требует предельной точности, можно выбрать из нескольких значений максимальное.

Получить ширину документа, включая полосу вертикальной прокрутки.

```js
const fullWidth = Math.max(
  document.body.scrollWidth,
  document.documentElement.scrollWidth,
  document.body.offsetWidth,
  document.documentElement.offsetWidth,
  document.body.clientWidth,
  document.documentElement.clientWidth
);
```

Получить высоту документа, включая полосу горизонтальной прокрутки

```js
const fullHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);
```
