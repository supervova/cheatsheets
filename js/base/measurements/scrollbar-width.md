
`clientWidth` — это ширина окна браузера без полосы прокрутки. `offsetWidth` — с полосой. Соответственно:

```javascript
const scrollbarWidth =
  document.body.offsetWidth -
  document.body.clientWidth;
```
