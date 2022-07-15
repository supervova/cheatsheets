Функция `isScrollable` возвращает `true`, если блок `ele` `scrollable` — то есть содержание превышает границы, и браузер добавляет полосу прокрутки.

```javascript
const isScrollable = (ele) => {
  /* Первая проверка. Больше ли высота содержания
  высоты блока? */
  const hasScrollableContent =
    ele.scrollHeight > ele.clientHeight;

  /* `overflow-y` элемента может быть `hidden`. Полоса
  прокрутки в таком случае не показывается. Поэтому: */
  const overflowYStyle =
    window.getComputedStyle(ele).overflowY;
  const isOverflowHidden =
    overflowYStyle.indexOf('hidden') !== -1;

  // Возвращаем булево значение
  return hasScrollableContent && !isOverflowHidden;
};
```
