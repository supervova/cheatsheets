Исходная разметка. Поле `\[type='file'\]` для выбора изображения и «заглушка» картинки.

```html
<input id="input-file" type="file">
<img id="preview">
```

```javascript
const fileEle = document.getElementById('input-file');
const previewEle = document.getElementById('preview');
```

#### 1\. Используем метод `URL.createObjectURL()`

```javascript
fileEle.addEventListener('change', (e) => {
  // Получаем выбранный файл
  const file = e.target.files[0];

  // Создаем URL-объект выбранной картинки
  const url = URL.createObjectURL(file);

  // Передаем в «заглушку» URL-объект
  previewEle.src = url;
});
```

#### 2\. Используем метод FileReader.readAsDataURL()

```javascript
fileEle.addEventListener('change', (e) => {
  // Получаем выбранный файл
  const file = e.target.files[0];

  const reader = new FileReader();
  reader.addEventListener('load', () => {
    // Передаем в «заглушку» ссылку
    previewEle.src = reader.result;
  });

  reader.readAsDataURL(file);
});
```
