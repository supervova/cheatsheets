Разметка:

```html
<div class="resizable" id="resize-me">Resize me</div>
```

Добавим дополнительные `div`'ы вдоль краев объекта. Они нужны, как ручки для перетягивания — границы элемента не являются DOM-узлами. Чтобы упростить пример, добавим их только снизу и справа.

```html
<div id="resize-me" class="resizable">
  Resize me
  <div class="resizer is-right"></div>
  <div class="resizer is-bottom"></div>
</div>
```

Here is the basic styles for the layout:

```scss
.resizable {
  position: relative;
}

.resizer {
  cursor: row-resize;
  position: absolute;
  width: 100%;
  height: 5px;
}

.is-right {
  top: 0;
  right: 0;
}

.is-bottom {
  bottom: 0;
  left: 0;
}
```

Как во всех случаях с перемещением объектов интерфейса курсором мыши, создадим обработчики для трёх событий.

- `mousedown` — добавляем обработчик на ручки перетягивания для отслеживания позиции курсора и получения исходных габаритов объекта.
- `mousemove` — добавляем обработчик на документ, чтобы рассчитать, как далеко курсор передвинулся и новые размеры элемента.
- `mouseup` — добавляем обработчик на документ, чтобы удалить обработчик `mousemove` и самого себя.

```js
const el = document.getElementById('resize-me');

// Текущая позиция курсора
let x = 0;
let y = 0;

// Размеры элемента
let w = 0;
let h = 0;

const mouseMoveHandler = (e) => {
  // Как далеко перемещен курсор
  const dx = e.clientX - x;
  const dy = e.clientY - y;

  // Обновляем размеры элемента
  el.style.width = `${w + dx}px`;
  el.style.height = `${h + dy}px`;
};

/* Удаляем обработчики */
const mouseUpHandler = () => {
  document.removeEventListener(
    'mousemove', mouseMoveHandler
  );
  document.removeEventListener(
    'mouseup', mouseUpHandler
  );
};

/** Обработчик срабатывает в начале перетаскивания */
const mouseDownHandler = (e) => {
  // Текущая позиция курсора
  x = e.clientX;
  y = e.clientY;
  
  // Измеряем элемент
  const styles = window.getComputedStyle(el);
  w = parseInt(styles.width, 10);
  h = parseInt(styles.height, 10);
  
  /* Устанавливаем слушатели с обработчиками
  на документ */
  document.addEventListener(
    'mousemove', mouseMoveHandler
  );
  document.addEventListener(
    'mouseup', mouseUpHandler
  );
};
```

Все обработчики готовы. Теперь добавляем обработчик `mousedown` на ручки.

```js
const resizers = el.querySelectorAll('.resizer');

resizers.forEach((resizer) => {
  resizer.addEventListener(
    'mousedown', mouseDownHandler
  );
});
```

См. демо на [HTML DOM](https://htmldom.dev/demo/make-a-resizable-element/){:target="_blank"}.
