```html
<div class="is-relative">
  <div id="element">
    Кликни правой кнопкой мыши (ПКМ)
  </div>
  <ul class="menu is-context" role="menu" id="menu">
    ...
  </ul>
</div>
```

#### Предотвращаем вызов стандартного контекстного меню

```js
const el = document.getElementById('element');
el.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});
```

#### Показываем пользовательское меню в области клика

Чтобы получить координаты меню, оно должно быть абсолютно позиционировано относительно своего контейнера. Поэтому в разметке добавлена «обёртка» `.is-relative`.

```css
.is-relative {
  position: relative;
}

.menu.is-context {
  // Скрыто по умолчанию
  display: none;
  position: absolute;

  &.is-on {
    display: block;
  }
}
```

Рассчитываем позицию меню по позиции мышки.

```js
el.addEventListener('contextmenu', (e) => {
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Задаем координаты
  menu.style.top = `${y}px`;
  menu.style.left = `${x}px`;

  // Показываем меню
  menu.classList.add('is-on');
});
```

#### Закрываем меню по клику за его пределами

```js
el.addEventListener('contextmenu', (e) => {
  /* ...
  Добавляем вложенный слушатель */
  document.addEventListener('click', docClickHandler);
});

/** Прячем меню на клике за его пределами */
const docClickHandler = (e) => {
  const isClickedOutside = !menu.contains(e.target);
  if (isClickedOutside) {
    menu.classList.remove('is-on');

    // Удаляем обработчик
    document.removeEventListener(
      'click', docClickHandler
    );
  }
};
```

Обработчик клика удаляется со страницы вместе с меню, так как он не нужен, пока меню скрыто.
