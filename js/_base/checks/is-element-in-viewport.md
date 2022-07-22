#### `IntersectionObserver`

```js
if (
  window.matchMedia('(min-width: 768px)').matches
) {
  const { body } = document;
  const footer = document.getElementById('footer');

  const config = {
    threshold: 0.1,
    /* Если нужно отслеживать область видимости
    не всего браузера, а блока с прокруткой, тогда
    в опциях следует еще указать свойство `root`
    и передать в него нужный элемент, полученный,
    в общем случае, с помощью `getElementById` */
  };

  const observer =
    new IntersectionObserver((entries) => {
      /* В параметр `entries` передаем массив узлов,
      которые ожидаем в поле видимости. В примере нас
      интересует только первый, с индексом `[0]` —
      «подвал». В условии проверяется, есть ли он
      в документе и видим ли сейчас в области
      просмотра. */
      if (entries[0] && entries[0].isIntersecting) {
        body.classList.add('has-visible-footer');
      } else {
        body.classList.remove('has-visible-footer');
      }
  }, config);

  // Вызов функции
  observer.observe(footer);
}
```

См. [Intersection Observer API](https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API){:target="_blank"}.

#### Альтернативный способ

```js
const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
        (window.innerHeight ||
      document.documentElement.clientHeight
    ) && rect.right <= (
      window.innerWidth ||
      document.documentElement.clientWidth
    )
  );
};
```
