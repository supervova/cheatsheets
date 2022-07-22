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

```js
const el = document.getElementById('upload-photos');

el.addEventListener('dragenter', (e) => {
  e.preventDefault();
  e.target.classList.add('is-over-me');
});

el.addEventListener('dragover', (e) => {
  e.preventDefault();
});
```

Удаляем класс, когда пользователь «опускает» в зону отправки или тащит его куда-то дальше, за границы `upload-photos`.

```js
el.addEventListener('dragleave', (e) => {
  e.preventDefault();
  e.target.classList.remove('is-over-me');
});

el.addEventListener('drop', (e) => {
  e.preventDefault();
  e.target.classList.remove('is-over-me');
});
```
