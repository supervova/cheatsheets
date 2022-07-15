**Задача для примера**. Визуально выделить зону выбора фотографии для аватара, когда пользователь перетягивает на нее картинку из папки на своем компьютере.

Создадим блок зоны и класс для выделения.

```html
<div id="upload-photos">...</div>
```

```scss
.is-over-me {
  border: 4px dashed #ccc;
}
```

Добавляем класс `is-over-me`, когда пользователь перетягивает что-то над `upload-photos`. Заодно предотвращаем действия браузера по умолчанию — открытие картинки.

```javascript
const ele = document.getElementById('upload-photos');

ele.addEventListener('dragenter', (e) => {
  e.preventDefault();
  e.target.classList.add('is-over-me');
});

ele.addEventListener('dragover', (e) => {
  e.preventDefault();
});
```

Удаляем класс, когда пользователь «опускает» в зону отправки или тащит его куда-то дальше, за границы `upload-photos`.

```javascript
ele.addEventListener('dragleave', (e) => {
  e.preventDefault();
  e.target.classList.remove('is-over-me');
});

ele.addEventListener('drop', (e) => {
  e.preventDefault();
  e.target.classList.remove('is-over-me');
});
```
