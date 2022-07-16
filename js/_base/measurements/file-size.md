**Сценарий использования:** проверка ограничений по размеру перед отправкой файла на сервер.

```html
<input type="file" id="upload" />
<div id="size"></div>
```

Мы поставим слушателя на событие `change` поля `[type="file"]`. Размер в байтах можно получить из свойства `size` **одного** выбранного для загрузки файла.

Надпись с размером появляется, когда пользователь выбирает файл.

```javascript
const fileEle = document.getElementById('upload');
const sizeEle = document.getElementById('size');

fileEle.addEventListener('change', function (e) {
  const files = e.target.files;
  if (files.length === 0) {
    // Спрятать надпись с размером, если файл не выбран
    sizeEle.innerHTML = '';
    sizeEle.style.display = 'none';
  } else {
    // Файловый размер в байтах
    sizeEle.innerHTML = `${files[0].size} Б`;
    
    // Показать надпись
    sizeEle.style.display = 'block';
  }
});
```

#### Размер в КБ, МБ, ГБ, ТБ

```javascript
// Convert the file size to a readable format
const formatFileSize = function (bytes) {
  const sufixes = ['Б', 'КБ', 'MB', 'ГБ', 'ТБ'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`;
};

// Показать файловый размер
sizeEle.innerHTML = formatFileSize(files[0].size);
```
