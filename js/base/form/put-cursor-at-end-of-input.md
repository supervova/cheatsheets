#### Сценарий использования

Нужно перенести курсор в конец введенного текста по нажатию кнопки Edit.

```html
<input type="text" id="fullName" value="V. Nikishin">
<button id="edit">Edit</button>
```

```javascript
const fullNameEle = document.getElementById('fullName');
const editEle = document.getElementById('edit');

editEle.addEventListener('click', (e) => {
  // Фокус на поле Ф.И.О.
  fullNameEle.focus();
  
  // Переносим курсор
  const length = fullNameEle.value.length;
  fullNameEle.setSelectionRange(length, length);
});
```
