```js
const handler = () => {
  // ...
};

// Добавить обработчик событий `click`, `mouseenter`, `keyup`
el.addEventListener('click', handler);
el.addEventListener('mouseenter', (e) => { /* ... */ });
document.addEventListener('keyup', (e) => { /* ... */ });

// Удалить обработчик события `click`
el.removeEventListener('click', handler);
```

#### Установка слушателя на все элементы коллекции узлов

```js
const elems = document.querySelectorAll('.my-class');

elems.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    // do smth...
  });
});
```

#### Установка слушателя на динамически добавленные элементы

Если в jQuery для этой задачи использовался специальный метод `on`, то в ванильном JS — тот же `addEventListener`, что и для исходных элементов DOM.

```js
const searchElement = document.createElement('div');
document
  .querySelector('.search-container')
  .appendChild(searchElement);
// Устанавливаем слушатель
searchElement.addEventListener('click', handleClick);
```

#### Однократный вызов обработчика

Чтобы обработчик вызывался только раз, можно использовать опцию `once` метода `addEventListener`…

```js
const handler = function (e) {
  // The event handler
};

el.addEventListener('event-name', handler, { once: true });
```

…Либо использовать «самоуничтожение» — записать удаление в самом теле обработчика.

```js
const handler = function (e) {
  // The event handler. Do something ...

  // Remove the handler
  e.target.removeEventListener(e.type, handler);
};

el.addEventListener('event-name', handler);
```
