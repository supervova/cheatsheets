```javascript
// Создаем ссылку
const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', '/path/to/js/file.css');

// Вставляем в `head`
document.head.appendChild(link);
```
