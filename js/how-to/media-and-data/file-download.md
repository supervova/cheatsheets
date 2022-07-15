#### Загрузка по клику

```html
<a href="/path/to/file" download>Download</a>
```

#### Загрузка при переходе на страницу — вызов события `click`

```javascript
// Создаем ссылку
const link = document.createElement('a');
// <a href="/path/to/real-name" download="my-name">
link.download = 'my-name';
link.href = '/path/to/real-name';
document.body.appendChild(link);

// Инициируем клик
link.click();

// Удаляем ссылку
document.body.removeChild(link);
```

#### Загрузка сгенерированного содержания

Часто надо загрузить динамически создаваемое содержание: текст, изображение, JSON.

Сгенерированное содержание (в примере — JSON), можно перевести в [объект Blob](https://developer.mozilla.org/ru/docs/Web/API/Blob) и затем вызвать событие `click`, как описывалось выше.

```javascript
// Создаем Blob c JSON'ом
const data = JSON.stringify({ 'message': 'Hello Word' });
const blob = new Blob([data], {
  type: 'application/json'
});

// Преобразовываем blob в URL
const url = window.URL.createObjectURL(blob);

// Создаем ссылку, инициируем `click`, удаляем ссылку
// ...

// Дополнительно удаляем объект URL
window.URL.revokeObjectURL(url);
```
