Функция `isScrollable` возвращает `true`, если блок `el`  `scrollable` — то есть содержание превышает границы, и браузер добавляет полосу прокрутки.

```js
const isScrollable = (el) => {
  /* Первая проверка. Больше ли высота содержания
  высоты блока? */
  const hasScrollableContent =
    el.scrollHeight > el.clientHeight;

  /* `overflow-y` элемента может быть `hidden`. Полоса
  прокрутки в таком случае не показывается. Поэтому: */
  const overflowYStyle =
    window.getComputedStyle(el).overflowY;
  const isOverflowHidden =
    overflowYStyle.indexOf('hidden') !== -1;

  // Возвращаем булево значение
  return hasScrollableContent && !isOverflowHidden;
};
```
