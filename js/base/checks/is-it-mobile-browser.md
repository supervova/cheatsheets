```javascript
const isMobile = function () {
  const match = window.matchMedia('(pointer:coarse)');
  return match && match.matches;
};
```

Можно использовать и медиазапрос размера, но надо учитывать, что `max-width` мобильных устройств может достигать 1024px и выше.

```javascript
if (window.matchMedia('(max-width: 400px)').matches) {
  // Do smth
}
```
