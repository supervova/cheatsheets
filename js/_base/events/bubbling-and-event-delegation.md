Разработчики используют всплытие — фазу жизненного цикла события — для делегирования. То есть обработки событий на динамически созданных элементах или на массе однотипных.

1. Назначаем обработчик на контейнер.
2. В обработчике проверяем `event.target`.
3. Обрабатываем событие, если оно произошло внутри искомого элемента.

```js
window.addEventListener('click', (event) => {
  if (event.target.matches('[data-dropdown-toggle]')) {
    toggleDropdownOnLabelClick(event);
  } else {
    closeDropdowns();
  }
});
```
