Функция `scrollToBeVisible` перемещает элемент, переданный в первый параметр, в область видимости контейнера, переданного во второй параметр. См. также раздел [«Виден ли элемент в области просмотра блока с прокруткой»](/#topic-is-visible)

```javascript
const scrollToBeVisible = (ele, container) => {
  const eleTop = ele.offsetTop;
  const eleBottom = eleTop + ele.clientHeight;

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
