#### Сценарий использования

Нужно перенести курсор в конец введенного текста по нажатию кнопки Edit.

```html
<input type="text" id="fullName" value="V. Nikishin">
<button id="edit">Edit</button>
```

```js
const fullNameEle = document.getElementById('fullName');
const editEl = document.getElementById('edit');

editEl.addEventListener('click', (e) => {
  // Фокус на поле Ф.И.О.
  fullNameEle.focus();
  
  // Переносим курсор
  const length = fullNameEle.value.length;
  fullNameEle.setSelectionRange(length, length);
});
```
