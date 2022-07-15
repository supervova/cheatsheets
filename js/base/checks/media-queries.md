Для исполнения скриптов по результатам медиазапросов используется методы `window.matchMedia` и `matches`.

```javascript
const title = document.getElementById('title');

if (window.matchMedia('(max-width: 400px)').matches) {
  title.classList.remove('is-huge');
  title.classList.add('is-small');
} else {
  title.classList.remove('is-small');
  title.classList.add('is-huge');
}
```

#### Определение ориентации устройства

`window.matchMedia` и `matches` можно также использовать и для определения ориентации устройства. Если ширина экрана больше высоты ориентация считается альбомной, если меньше — портретной.

```javascript
if (window.matchMedia('(orientation: landscape)')
.matches) {
  // Do smth
} else {
  // Do smth else
}
```
