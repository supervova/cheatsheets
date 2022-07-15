Если по каким-то причинам JS нужно записывать в разделе `head`, а не в `body` после разметки. Можно установить на страницу слушатель события `DOMContentLoaded`. Получится аналог `$(document).ready()`(`$()`) в jQuery.

```javascript
document.addEventListener(
  'DOMContentLoaded',
  () => {
    // Do smth
  },
  false
);
```
