#### Сценарии использования

- Показывать пользовательское, а не стандартное контекстное меню.
- Открыть внешнюю страницу в модальном окне, предовратив переход по ссылке.
- Отложить отправку формы, предварительно проверив введённые данные.
- Не открывать и не загружать файл при перетаскивании.

#### Метод `preventDefault()`

Работает, как в обработчиках событий, так и в HTML-атрибутах.

```javascript
ele.addEventListener('click', (e) => {  
  e.preventDefault();
  // Do smth
});

ele.onclick = (e) => {
  e.preventDefault();
  
  // Do smth
};
```

```html
<button
  type="submit"
  onclick="event.preventDefault()"
>
  Click
</button>
```

#### Есть еще один способ, но непрофессиональный — возврат `false` на событии

```javascript
ele.onclick = (e) => {
  // Do smth
  return false;
};
```

```html
<button
  type="submit"
  onclick="return false"
>
  Click
</button>
```
