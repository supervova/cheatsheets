Разметка:

```html
<table class="table" id="resize-me">
  ...
</table>
```

#### «Ручки»

Для каждой колонки создадим «ручки» — абсолютно позиционированные относительно ячейки первой строки элементы, которые будет перемещать пользователь. Они нужны потому, что края колонок не являются DOM-элементами.

```css
.table th {
  position: relative;
}

.resizer {
  cursor: col-resize;
  position: absolute;
  top: 0;
  right: 0;
  user-select: none;
  width: 5px;
}
```

Создадим «ручки» в JS.

```js
const table = document.getElementById('resize-me');
const cols = table.querySelectorAll('th');

cols.forEach((col) => {
  const resizer = document.createElement('div');
  resizer.classList.add('resizer');

  // Сделаем высоту ручки равной высоте таблицы
  resizer.style.height = `${table.offsetHeight}px`;

  // Прикрепим ручку к колонке
  col.appendChild(resizer);

  // До этой функции скоро доберемся
  createResizableColumn(col, resizer);
});

```

#### Обработчики событий

Напишем функцию `createResizableColumn` с двумя параметрами:

- `col` — ячейка первой строки таблицы
- `resizer` — «ручка»

In order to allow user to resize `col`, we have to handle three events:

- `mousedown` — добавляем обработчик на первые ячейки колонок для отслеживания позиции курсора.
- `mousemove` — добавляем обработчик на документ для рассчета дальности перемещения курсора и соответствующего изменения ширины колонки.
- `mouseup` — добавляем обработчик на документ, чтобы по окончанию перетягивания удалить обработчики, установленные ранее.

```js
const createResizableColumn = (col, resizer) => {
  // Текущая позиция мыши
  let x = 0;
  let w = 0;

  const mouseMoveHandler = (e) => {
    // Определяем, как далеко курсор переместился
    const dx = e.clientX - x;

    // Соответственно, меняем ширину колонки
    col.style.width = `${w + dx}px`;
  };

  /* Удаляем слушатели и обработчики, как только
  пользователь заканчивает перетаскивание ручки */
  const mouseUpHandler = () => {
    document.removeEventListener(
      'mousemove', mouseMoveHandler
    );
    document.removeEventListener(
      'mouseup', mouseUpHandler
    );
  };

  const mouseDownHandler = (e) => {
    // Текущая позиция курсора
    x = e.clientX;

    // Рассчитываем текущую ширину колонки
    const styles = window.getComputedStyle(col);
    w = parseInt(styles.width, 10);

    // Устанавливаем слушатели на документ
    document.addEventListener(
      'mousemove', mouseMoveHandler
    );
    document.addEventListener(
      'mouseup', mouseUpHandler
    );
  };

  resizer.addEventListener(
    'mousedown', mouseDownHandler
  );
};
```

#### Выделение ручки

Окрасим ручки в синий на `:hover`.

```css
.resizer:hover,
.resizing {
  border-right: 2px solid blue;
}
```

Добавим ручкам класс `is-resizing` — на то время, пока пользователь их перетягивает.

```js
const mouseDownHandler = (e) => {
  // ...
  resizer.classList.add('is-resizing');
};

const mouseUpHandler = () => {
  // ...
  resizer.classList.remove('is-resizing');
};
```

См. демо на [HTML DOM](https://htmldom.dev/demo/resize-columns-of-a-table/index.html){:target="_blank"}.

