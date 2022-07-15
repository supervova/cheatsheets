Функция `getScrollableParent` ищет блок с прокруткой, начиная с элемента переданного в параметр, вверх по цепочке родителей, вплоть до `body`. Возвращает первый попавшийся.

```javascript
const isScrollable = (ele) => {
const hasScrollableContent =
  ele.scrollHeight > ele.clientHeight;

const overflowYStyle =
  window.getComputedStyle(ele).overflowY;
const isOverflowHidden =
  overflowYStyle.indexOf('hidden') !== -1;

  return (
    hasScrollableContent && !isOverflowHidden;
  );
};

const getScrollableParent = (ele) => {
  return !ele || ele === document.body
  ? document.body
  : isScrollable(ele)
  ? ele
  : getScrollableParent(ele.parentNode);
};
```
