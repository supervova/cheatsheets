На MDN метод `navigator.platform` [объявлен устаревшим](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/platform){:target="_blank"}. Вместо этого можно использовать `navigator.userAgent` — см. выше.

```js
const isMacBrowser =
  /Mac|iPod|iPhone|iPad/.test(navigator.platform);
```
