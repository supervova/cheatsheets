По умолчанию браузер создает полупрозрачного виртуального двойника перетягиваемого элемента. Но его можно еще и оформить по собственному смотрению.

```html
<div class="is-draggable" draggable="true">
  Перенеси меня
</div>
```

```js
const el = document.getElementById('dragMe');

// Виртуальная проекция
let ghostEle;

el.addEventListener('dragstart', (e) => {
  // Создаем виртуальную проекцию
  ghostEle = document.createElement('div');
  ghostEle.classList.add('is-dragging');
  ghostEle.innerHTML = 'Уиии!';
  document.body.appendChild(ghostEle);

  // Заменяем проекцию по умолчанию пользовательской
  e.dataTransfer.setDragImage(ghostEle, 0, 0);
});

// По окончанию перетягивания виртуальную проекцию следует удалить.

el.addEventListener('dragend', () => {
  document.body.removeChild(ghostEle);
});
```

Также можно использовать заранее подготовленную разметку.

```html
<div class="is-draggable" draggable="true">
  Перенеси меня
</div>
<div class="is-dragging" id="ghost">
  Уиии!
</div>
```

Обработчик события не сильно изменится.

```js
const ghostEle = document.getElementById('ghost');

el.addEventListener('dragstart', (e) => {
  e.dataTransfer.setDragImage(ghostEle, 0, 0);
});
```
