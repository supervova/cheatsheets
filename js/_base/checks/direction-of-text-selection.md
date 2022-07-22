Функция возвращает `forward`, если пользователь выделил текст слева направо, и `backward`, если наоборот.

```js
const getDirection = () => {
  const selection = window.getSelection();
  const range = document.createRange();
  range.setStart(
    selection.anchorNode, selection.anchorOffset
  );
  range.setEnd(
    selection.focusNode, selection.focusOffset
  );

  return range.collapsed ? 'backward' : 'forward';
};
```
