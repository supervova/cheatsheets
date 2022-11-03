Можно отслеживать прокрутку, как всего документа…

```js
window.addEventListener('scroll',(event) => {
  console.log('Scrolling...');
});

// или

window.onscroll = (event) => {
  console.log('Прокрутка...');
};
```

...Так и элемента с прокруткой (`overflow: visible | auto`).

```js
myEl.addEventListener('scroll', (event) => {
  console.log('Прокрутка...');
});
```

Для снижения потребления вычислительных мощностей при обработке события прокрутки желательно использовать технику `throttling`: «тормозящий декоратор» — функцию-обёртку ограничивающую вызовы в «обёрнутую» функцию.

```js
// По умолчанию, снимаем флаг «прокрутка»
let scrolling = false;

// Во время прокрутки флаг устанавливаем
window.scroll = () => {
  scrolling = true;
};

/* Исполняем на прокрутке обработчик не постоянно,
а только каждые 300мс */
setInterval(() => {
  if (scrolling) {
    scrolling = false;
    /* Здесь описываем логику обработки
    прокрутки - это будет основная,
    «обёрнутая» функция */
  }
}, 300);
```

В обработчиках прокрутки часто используются:

- в случае объекта `window` — свойства [`scrollX`](https://www.w3schools.com/jsref/prop_win_scrollx.asp){:target="_blank"}, [scrollY](https://www.w3schools.com/jsref/prop_win_scrolly.asp){:target="_blank"} и методы [`scrollBy()`](https://www.w3schools.com/jsref/met_win_scrollby.asp){:target="_blank"}, [`scrollTo()`](https://www.w3schools.com/jsref/met_win_scrollto.asp){:target="_blank"}
- в случае прокручиваемого элемента - свойства [`scrollTop`](https://www.w3schools.com/jsref/prop_element_scrolltop.asp){:target="_blank"} и [`scrollLeft`](https://www.w3schools.com/jsref/prop_element_scrollleft.asp){:target="_blank"}.
