Функция `getScrollableParent` ищет блок с прокруткой, начиная с элемента переданного в параметр, вверх по цепочке родителей, вплоть до `body`. Возвращает первый попавшийся.

```js
const isScrollable = (el) => {
const hasScrollableContent =
  el.scrollHeight > el.clientHeight;

const overflowYStyle =
  window.getComputedStyle(el).overflowY;
const isOverflowHidden =
  overflowYStyle.indexOf('hidden') !== -1;

  return (
    hasScrollableContent && !isOverflowHidden;
  );
};

const getScrollableParent = (el) => {
  return !el || el === document.body
  ? document.body
  : isScrollable(el)
  ? ele
  : getScrollableParent(el.parentNode);
};
```
