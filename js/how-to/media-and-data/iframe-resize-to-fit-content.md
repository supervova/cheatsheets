```javascript
const frame = document.getElementById('my-iframe');

frame.addEventListener('load', () => {
  // Получим высоту содержания
  const height = frame.contentDocument.body.scrollHeight;
  
  // Установим высоту iframe.my-iframe
  frame.setAttribute('height', `${height}px`);
});
```
