Вместо ненайденных картинок показывать картинку с соответствующим сообщением.

```js
// Находим все картинки…
const images = document.querySelectorAll('img');

// и перебираем
images.forEach((el) => {
  el.addEventListener('error', (e) => {
    e.target.src = '/path/to/404/image.png';
  });
});
```
