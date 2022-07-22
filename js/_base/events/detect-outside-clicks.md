`isClickedOutside` вернёт `true`, если пользователь кликнет не по элементу `.

```js
document.addEventListener('click', (event) => {
  const isClickedOutside = !el.contains(event.target);
});
```
