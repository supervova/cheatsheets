#### `IntersectionObserver`

Для работы с Intersection Observer API (IOA) необходимо с помощью конструктора создать объект-наблюдатель с двумя параметрами — функцией обратного вызова и настройками.

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
      /* В параметр `entries` передается массив
      записей, о целевых элементах, которые попали
      в поле видимости. В примере нас интересует
      только первый, с индексом `[0]` — «подвал».
      В условии проверяется, есть ли он
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

Каждая запись в массиве `entries` содержит свойства  с изменениями, произошедшими с целевым элементом:

```js
entries.forEach((entry) => {
  /*  entry (запись) - изменение
        entry.boundingClientRect
        entry.intersectionRatio
        entry.intersectionRect
        entry.isIntersecting
        entry.rootBounds
        entry.target
        entry.time */
});
```

В частности, свойство `target` (`IntersectionObserverEntry.target`) позволяет определить один из множества целевых элементов в момент появления в области видимости. То есть также помогает вызвать методы нужного объекта, как и `event.target`.

```js
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.15) {
        // It's magic
        entry.target.classList.add('is-my-hero');
      }
    });
  },
  { threshold: 0.15 }
);
```

Если объект-наблюдатель должен отслеживать один UI-компонент, в параметр `callback`'a можно передавать первый и единственный элемент массива — `([entry]) => {/*...*/}`. Цикл не нужен.

```js
const toggleTitleStyle = (el) => {
  const observer = new IntersectionObserver(
    ([entry]) =>
      entry.target.classList.toggle(
        'is-pinned',
        e.intersectionRatio < 1
      ),
    { threshold: [1] }
  );

  observer.observe(el);
};

```

Материалы по теме:

- [Intersection Observer API](https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API){:target="_blank"}.
- [Intersection Observer API: примеры использования](https://habr.com/ru/post/494670/){:target="_blank"}.
- [Intersection Observer Entries](https://www.codeguage.com/courses/advanced-js/intersection-observer-entries){:target="_blank"}.

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
