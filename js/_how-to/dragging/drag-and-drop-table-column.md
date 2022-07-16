Техника основана на [перетягивании элементов списка](#topic-dnd-li). Идея заключается в том, чтобы создавать дубликат колонок в виде списка — как только пользователь начинает тянуть. На время перетягивания мы показываем только этот список (каждый элемент — клон колонки), а таблицу прячем.

Также во время перетягивания мы определяем порядковый номер перетаскиваемого и целевого элемента списка. И меняем местами соответствующие колонки.

#### Обработчики событий

Как нам известно из раздела о [перетягивании элементов списка](#topic-dnd-li), первым делом надо создать обработчики для трёх событий.

- `mousedown` — добавляем обработчик на первые ячейки колонок, это будет функция перетягивания их клонов.
- `mousemove` — добавляем обработчик на документ для создания и вставки «заглушки» на время перетаскивания.
- `mouseup` — событие окончания перетаскивания.

Разметка и «каркас» скрипта.

```html
<table id="table"><!-- ... --></table>

<script>
  const table = document.getElementById('table');

  const mouseMoveHandler = (e) => {
    // ...
  };

  const mouseUpHandler = () => {
    // ...
    // Удаляем обработчики `mousemove` и `mouseup`
    document.removeEventListener(
      'mousemove', mouseMoveHandler
    );
    document.removeEventListener(
      'mouseup', mouseUpHandler
    );
  };

  const mouseDownHandler = (e) => {
    // ...

    // Добавляем обработчики на документ
    document.addEventListener(
      'mousemove', mouseMoveHandler
    );
    document.addEventListener(
      'mouseup', mouseUpHandler
    );
  };

  // Добавляем обработчики начала перетаскивания
  table
    .querySelectorAll('th')
    .forEach((headerCell) => {
      headerCell.addEventListener(
        'mousedown', mouseDownHandler
      );
  });
</script>
```

#### Клонируем таблицу, когда пользователь перетягивает колонку

Во-первых, нам нужен флаг, чтобы помечать, когда происходит перетягивание.

```javascript
let isDraggingStarted = false;

const mouseMoveHandler = (e) => {
  if (!isDraggingStarted) {
    isDraggingStarted = true;

    cloneTable();
  }
  // ...
};
```

Функция `cloneTable` создает клон таблицы и показывает его вместо таблицы.

```javascript
let list;

const cloneTable = () => {
  // Получаем границы таблицы
  const rect = table.getBoundingClientRect();

  /* Создает список — не семантический `ul`,
  простой `div` */
  list = document.createElement('div');

  // Устанавливаем его по координатам таблицы
  list.style.position = 'absolute';
  list.style.left = `${rect.left}px`;
  list.style.top = `${rect.top}px`;

  // В коде вставляем перед таблицей
  table.parentNode.insertBefore(list, table);

  // Прячем таблицу
  table.style.visibility = 'hidden';
};
```

Лист будет состоять из клонов колонок.

```javascript
const cloneTable = () => {
// ...

/* Получаем поверхностную копию всех td.
Делаем из NodeList массив, чтобы применить
позже метод `filter`.*/
const originalCells = [].slice.call(
    table.querySelectorAll('tbody td')
);

/* Получаем поверхностную копию всех th.
В данном случае не уверен ыв необходимости
`[].slice.call`, так как `NodeList` имеет
свойство `length` и метод `forEach` */
const originalHeaderCells = [].slice.call(
    table.querySelectorAll('th')
);

const numColumns = originalHeaderCells.length;

// Перебираем все th
  originalHeaderCells.forEach(
    (headerCell, headerIndex) => {
      const width = parseInt(
        window.getComputedStyle(headerCell).width,
        10
      );

      /* Создаем список и новую таблицу
      из первой строки исходной */  
      const item = document.createElement('div');
      item.classList.add('draggable');
  
      const newTable = document.createElement('table');
  
      /* Строка заголовков th
      (семантически — потомок thead) */
      const th = headerCell.cloneNode(true);
      let newRow = document.createElement('tr');
      newRow.appendChild(th);
      newTable.appendChild(newRow);
  
      const cells = originalCells.filter((c, idx) => {
        return (idx - headerIndex) % numColumns === 0;
      });
  
      cells.forEach((cell) => {
        const newCell = cell.cloneNode(true);
        newRow = document.createElement('tr');
        newRow.appendChild(newCell);
        newTable.appendChild(newRow);
      });
  
      item.appendChild(newTable);
      list.appendChild(item);
    }
  );
};
```

После клонирования в DOM у нас должна добавиться такая конструкция.

```html
<!-- Список -->
<div>
  <!-- Первый элемент… -->
  <div>
    <table>
      <!-- …содержит клон первой колонки
      исходной таблицы -->
      <tr>
        ...
      </tr>
      <tr>
        ...
      </tr>
      ...
    </table>
  </div>

  <!-- Второй элемент и т. д. -->
</div>

<table><!-- Исходная таблица --></table>
```

Теперь нам нужно установить ширину ячеек, чтобы сделать дубликат таблицы похожим на оригинал.

```javascript
originalHeaderCells.forEach((headerCell, headerIndex) => {
  // Получаем ширину оригинальной ячейки
  const width = parseInt(
    window.getComputedStyle(headerCell).width, 10
  );

  newTable.style.width = `${width}px`;

  cells.forEach((cell) => {
    const newCell = cell.cloneNode(true);
    newCell.style.width = `${width}px`;
    // ...
  });
});
```

Определяем индексы перетаскиваемой и целевой колонки.

```javascript
// Перетаскиваемый элемент
let draggingEle;
// Индекс перетаскиваемой колонки
let draggingRowIndex;

const mouseDownHandler = (e) => {
  // Получаем индекс перетаскиваемой колонки
  draggingColumnIndex = [].slice
    .call(table.querySelectorAll('th'))
    .indexOf(e.target);
};

const mouseMoveHandler = (e) => {
  if (!isDraggingStarted) {
    cloneTable();

    // Получаем перетаскиваемый элемент
    draggingEle = [].slice
      .call(list.children)[draggingColumnIndex];
  }
};

const mouseUpHandler = () => {
  // Получаем индекс последней колонки
  const endColumnIndex = [].slice
    .call(list.children)
    .indexOf(draggingEle);
};
```

После того, как мы получили `draggingColumnIndex` и `endColumnIndex`, нетрудно определить, где пользователь отпустит перетаскиваемый элемент — справа или слева от исходной точки. И теперь мы можем решить, куда пристроить целевую колонку: до или после нового места перетаскиваемой.

```javascript
const mouseUpHandler = () => {
  // Двигаем перетаскиваемую колонку к `endColumnIndex`
  table.querySelectorAll('tr').forEach(function (row) {
    const cells = [].slice.call(
      row.querySelectorAll('th, td')
    );
    draggingColumnIndex > endColumnIndex
      ? cells[endColumnIndex].parentNode.insertBefore(
          cells[draggingColumnIndex],
          cells[endColumnIndex]
        )
      : cells[endColumnIndex].parentNode.insertBefore(
          cells[draggingColumnIndex],
          cells[endColumnIndex].nextSibling
        );
  });
};
```

См. демо на [HTML DOM](https://htmldom.dev/demo/drag-and-drop-table-column/).
