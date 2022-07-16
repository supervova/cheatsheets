Вместо ненайденных картинок показывать картинку с соответствующим сообщением.

```javascript
// Находим все картинки…
const images = document.querySelectorAll('img');

// и перебираем
images.forEach((ele) => {
  ele.addEventListener('error', (e) => {
    e.target.src = '/path/to/404/image.png';
  });
});
```
