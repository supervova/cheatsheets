Редактируемый элемент не обязательно должен быть полем ввода. Это может быть `div[contenteditable]`, а атрибута `placeholder` у `div`'ов нет.

#### 1\. Делаем с помощью `data`-атрибута и псевдокласса `:empty`

```html
<div
  class="is-editable"
  id="edit-me"
  contenteditable
  data-placeholder="Edit me"
></div>
```

Значение `data-placeholder` показываем, если элемент пустой.

```js
.is-editable:empty:before {
  content: attr(data-placeholder);
}
```

#### 2\. С помощью обработчиков событий

Тот же `div` с `id` и `data`-атрибутом. Делаем `placeholder` по значению `data`-атрибута. На фокусе очищаем содержимое элемента, если оно совпадает с текстом `placeholder`'а. На `blur`'е, если пользователь ничего не ввёл, возвращаем `placeholder`.

```js
const el = document.getElementById('edit-me');
const placeholder = el.getAttribute('data-placeholder');

/* Если элемент пустой, заполняем его строкой
из `data`-атрибута */
el.innerHTML === '' && (el.innerHTML = placeholder);

el.addEventListener('focus', (e) => {
  const value = e.target.innerHTML;
  /* Альтернатива выражению `if`: если `value`
  равно `placeholder`, тогда очищаем элемент */
  value === placeholder &&
    (e.target.innerHTML = '');
});

el.addEventListener('blur', (e) => {
  const value = e.target.innerHTML;
  value === '' &&
    (e.target.innerHTML = placeholder);
});
```
