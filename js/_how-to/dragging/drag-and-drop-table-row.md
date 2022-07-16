Техника основана на [перетягивании элементов списка](#topic-dnd-li). Идея заключается в том, чтобы создавать дубликат строк таблицы в виде списка — как только пользователь начинает тянуть. На время перетягивания мы показываем только этот список (каждый элемент — клон строки), а таблицу прячем.

Также во время перетягивания мы определяем порядковый номер перетаскиваемого элемента списка. И переносим соответствующую строку исходной таблицы до или после «строки назначения».

#### Обработчики событий

Как нам известно из раздела о [перетягивании элементов списка](#topic-dnd-li), первым делом надо создать обработчики для трёх событий.

- `mousedown` — добавляем обработчик на первые ячейки строк.
- `mousemove` — добавляем обработчик на документ для создания и вставки «заглушки» на время перетаскивания.
- `mouseup` — событие окончания перетаскивания.

```html
`<table id="table">
...
</table>

<script>
  const table = document.getElementById('table');
  
  const mouseMoveHandler = (e) => {
    // ...
  };
  
  const mouseUpHandler =  () => {
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
  
    // Устанавливаем слушатели
    document.addEventListener(
      'mousemove', mouseMoveHandler
    );
    document.addEventListener(
      'mouseup', mouseUpHandler
    );
  };
  
  // Добавляем обработчики начала перетаскивания
  table.querySelectorAll('tr').forEach((row, index) => {
    // Игнорируем первую строку — фактический thead.
    if (index === 0) {
      return;
    }
  
    // Первая ячейка строки
    const firstCell = row.firstElementChild;
    firstCell.classList.add('draggable');
  
    // Устанавливаем слушатели
    firstCell.addEventListener('mousedown', mouseDownHandler);
  });
</script>
```

#### Клонируем таблицу, когда пользователь тащит строку

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

  // Получаем ширину таблицы
  const width = parseInt(
    window.getComputedStyle(table).width, 10
  );

  // Создаем псевдосписок
  list = document.createElement('div');

  // Устанавливаем его по координатам таблицы
  list.style.position = 'absolute';
  list.style.left = `${rect.left}px`;
  list.style.top = `${rect.top}px`;

  // Вставляем до таблицы
  table.parentNode.insertBefore(list, table);

  // Таблицу скрываем
  table.style.visibility = 'hidden';
};
```

Лист будет состоять из клонов строк.

```javascript
let list;

const cloneTable = () => {
  // Получаем границы таблицы
  const rect = table.getBoundingClientRect();

  // Получаем ширину таблицы
  const width = parseInt(
    window.getComputedStyle(table).width, 10
  );

  // Создаем псевдосписок
  list = document.createElement('div');

  // Устанавливаем его по координатам таблицы
  list.style.position = 'absolute';
  list.style.left = `${rect.left}px`;
  list.style.top = `${rect.top}px`;

  // Вставляем до таблицы
  table.parentNode.insertBefore(list, table);

  // Таблицу скрываем
  table.style.visibility = 'hidden';
};
```

После клонирования в DOM у нас должна добавиться такая конструкция.

```html
<!-- Список -->
<div>
  <!-- Первый элемент… -->
  <div>
    <table>
      <tr>
        <!-- …содержит клон первой строки
        исходной таблицы -->
      </tr>
    </table>
  </div>

  <!-- Второй элемент и т. д. -->
</div>
<table><!-- Исходная таблица --></table>
```

Теперь нам нужно установить ширину ячеек, чтобы сделать дубликат таблицы похожим на оригинал.

```javascript
cells.forEach((cell) => {
  const newCell = cell.cloneNode(true);
  // Устанавливаем ширину оригинальной ячейки
  newCell.style.width = `${parseInt(
    window.getComputedStyle(cell).width,
    10
  )}px`;
  newRow.appendChild(newCell);
});
```

Определяем индексы перетаскиваемой и целевой строки.

```javascript
// Перетаскиваемый элемент
let draggingEle;
// Индекс Перетаскиваемой строки
let draggingRowIndex;

const mouseDownHandler = (e) => {
  // Получаем исходную строку
  const originalRow = e.target.parentNode;
  draggingRowIndex = [].slice
    .call(table.querySelectorAll('tr'))
    .indexOf(originalRow);
};

const mouseMoveHandler = (e) => {
  if (!isDraggingStarted) {
    cloneTable();

    // Получаем перетягиваемый элемент
    draggingEle = [].slice.call(list.children)[draggingRowIndex];
  }
};

const mouseUpHandler = () => {
  // Получаем индекс целевой строки
  const endRowIndex = [].slice
    .call(list.children)
    .indexOf(draggingEle);
};
```

После того, как мы получили `draggingRowIndex` и `endRowIndex`, нетрудно определить, где пользователь отпустит перетаскиваемый элемент — сверху или снизу от исходной точки. И теперь мы можем решить, куда пристроить целевую строку: до или после нового места перетаскиваемой.

```javascript
const mouseUpHandler = () => {
  // Переносим перетаскиваемую строку к `endRowIndex`
  const rows = [].slice.call(table.querySelectorAll('tr'));
  draggingRowIndex > endRowIndex
    ? // Пользователь отпустил сверху
      rows[endRowIndex].parentNode.insertBefore(
        rows[draggingRowIndex],
        rows[endRowIndex]
      )
    : // Пользователь отпустил снизу
      rows[endRowIndex].parentNode.insertBefore(
        rows[draggingRowIndex],
        rows[endRowIndex].nextSibling
      );
};
```

См. демо на [HTML DOM](https://htmldom.dev/demo/drag-and-drop-table-row/).
