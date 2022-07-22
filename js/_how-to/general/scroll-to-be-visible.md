Функция `scrollToBeVisible` перемещает элемент, переданный в первый параметр, в область видимости контейнера, переданного во второй параметр. См. также раздел [«Виден ли элемент в области просмотра блока с прокруткой»](/#topic-is-visible)

```js
const scrollToBeVisible = (el, container) => {
  const eleTop = el.offsetTop;
  const eleBottom = eleTop + el.clientHeight;

  const containerTop = container.scrollTop;
  const containerBottom =
    containerTop + container.clientHeight;

  if (eleTop < containerTop) {
    // Прокрутка вверх контейнера
    container.scrollTop -= containerTop - eleTop;
  } else if (eleBottom > containerBottom) {
    // Прокрутка вниз контейнера
    container.scrollTop += eleBottom - containerBottom;
  }
};
```
