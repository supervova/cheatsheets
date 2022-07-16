`isClickedOutside` вернёт `true`, если пользователь кликнет не по элементу `ele`.

```javascript
document.addEventListener('click', (event) => {
  const isClickedOutside = !ele.contains(event.target);
});
```
