Разметка:

```html
<div class="draggable" id="dragMe">Drag me</div>
```

Стили:

```js
.draggable {
    // Indicate the element draggable
    cursor: move;

    // It will be positioned absolutely
    position: absolute;

    // Doesn't allow to select the content inside
    user-select: none;
  }
```

Чтобы сделать элемент перетаскиваемым, нам нужно отслеживать три события:

- `mousedown` позволит нам определить текущее положение мыши;
- `mousemove` даст возможность рассчитать как далеко мышка передвинулась и где сейчас находится перетаскиваемый элемент;
- `mouseup` на этом событии удалим обработчики, установленные с предыдущими двумя.

```js
// Текущая позиция мышки
let x = 0;
let y = 0;

const el = document.getElementById('dragMe');

/** Отслеживаем передвижение */
const mouseMoveHandler = (e) => {
  // Как далеко курсор передвинулся
  const dx = e.clientX - x;
  const dy = e.clientY - y;

  // Устанавливаем позицию элемента
  el.style.top = `${el.offsetTop + dy}px`;
  el.style.left = `${el.offsetLeft + dx}px`;

  // Переопределяем позицию курсора
  x = e.clientX;
  y = e.clientY;
};

/** Удаляем обработчики на прекращении перетаскивания */
const mouseUpHandler = () => {
  // Remove the handlers of `mousemove` and `mouseup`
  document.removeEventListener('mousemove', mouseMoveHandler);
  document.removeEventListener('mouseup', mouseUpHandler);
};

/** Добавляем обработчики перед перетаскиванием */
const mouseDownHandler = (e) => {
  // Получаем координаты курсора
  x = e.clientX;
  y = e.clientY;

  // Устанавливаем слушатели на документ
  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
};

el.addEventListener('mousedown', mouseDownHandler);
```
