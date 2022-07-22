Чтобы показать пользователю пароль, нужно временно поменять значение атрибута `type` поля пароля на `text`.

```html
<input id="form-password" type="password">
<button
  class="btn"
  id="form-password-toggle"
  aria-label="Показать/скрыть пароль"
>
  <!-- Иконки "глаз" и "закрытый глаз" -->
</button>
```

```js
// Получаем необходимые элементы
const password =
  document.getElementById('form-password');
const toggle =
  document.getElementById('form-password-toggle');

toggle.addEventListener('click', () => {
  const type = password.getAttribute('type');
  
  password.setAttribute(
    'type',
    /* Переключить значение на `text`, если
    установлено `password`, и наоборот. */
    type === 'password' ? 'text' : 'password'
  );
  /* Можно еще менять класс кнопки или ее иконок,
  чтобы «глаз» открывался и закрывался. А можно
  использовать CSS-селекторы типа
  `[type='password'] + .btn` */
});
```
