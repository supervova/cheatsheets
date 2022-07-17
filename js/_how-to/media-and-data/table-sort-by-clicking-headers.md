Разметка:

```html
<table  class="table" id="sort-me">
  ...
</table>
```

#### Сортировка строк

Сначала выберем все ячейки первой строки и установим на них слушатели события `click`.

```js
const table = document.getElementById('sort-me');

/* Нам понадобиться методы `sort` и `map`, поэтому
создадим из набора элементов массив */
const headers =
  [].slice.call(table.querySelectorAll('th'));

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    // Об этой функции — ниже
    sortColumn(index);
  });
});
```

Функция `sortColumn` сортирует все строки таблицы по указанному индексу колонки. Для этого мы сделает вот что.

- Используем метод массива `sort()` для сортировки строк
- Затем удалим строки в исходном порядке.
- И добавим строки в новом порядке.

```js
const tableBody = table.querySelector('tbody');
const rows = tableBody.querySelectorAll('tr');

const sortColumn = (index) => {
  // Клонируем строки
  const newRows = Array.from(rows);

  // Сортируем строки по содержанию ячеек
  newRows.sort((rowA, rowB) => {
    const cellA
      = rowA.querySelectorAll('td')[index].innerHTML;
    const cellB
      = rowB.querySelectorAll('td')[index].innerHTML;

    switch (true) {
      case cellA > cellB:
        return 1;
      case cellA < cellB:
        return -1;
      case cellA === cellB:
        return 0;
    }
  });

  // Удаляем строки в исходном порядке
  rows.forEach((row) => {
    tableBody.removeChild(row);
  });

  // Добавляем новые строки
  newRows.forEach((newRow) => {
    tableBody.appendChild(newRow);
  });
};
```

Всё хорошо. Но метод массива `sort` пригоден только для сортировки строк.

#### Другие типы данных

Добавим `th` колонки пользовательский атрибут для маркировки типов данных

```html
<thead>
  <tr>
    <th data-type="number">No.</th>
    <th>First name</th>
    <th>Last name</th>
  </tr>
</thead>
```

Добавим функцию, которая конвертирует строку в другой тип данных.

```js
const transform = (index, content) => {
  // Получаем тип данных колонки
  const type =
    headers[index].getAttribute('data-type');
  switch (type) {
    case 'number':
      return parseFloat(content);
    case 'string':
    default:
      return content;
  }
};
```

В примере конвертируется только числа, но может добавить `case` и для других типов: `date` etc.

Теперь немного улучшим функцию `sortColumn`, заменив в сравнении необработанные данные данными, полученными из функции `transform`.-index

```js
newRows.sort((rowA, rowB) => {
  const cellA
    = rowA.querySelectorAll('td')[index].innerHTML;
  const cellB
    = rowB.querySelectorAll('td')[index].innerHTML;

  // Преобразование типов
  const a = transform(index, cellA);
  const b = transform(index, cellB);

  // AСравнение
  switch (true) {
    case a > b:
      return 1;
    case a < b:
      return -1;
    case a === b:
      return 0;
  }
});
```

#### Обратный порядок

Если пользователь кликает по ячейке `th` повторно, порядок сортировки должен меняться. Для этого следует создать специальный массив.

```js
const directions =
  Array.from(headers).map((header) => {
    return '';
  });
```

В массиве `directions` будем сохранять значения `asc` или `desc` для каждой колонки. Соответственно, обновим функцию `sortColumn()`.

```js
const sortColumn = (index) => {
  // Текущий порядок сортировки
  const direction = directions[index] || 'asc';

  // Коэффициент сортировки, основанный на порядке
  const multiplier = direction === 'asc' ? 1 : -1;

  // ...

  newRows.sort((rowA, rowB) => {
    const cellA
      = rowA.querySelectorAll('td')[index].innerHTML;
    const cellB
      = rowB.querySelectorAll('td')[index].innerHTML;

    const a = transform(index, cellA);
    const b = transform(index, cellB);

    switch (true) {
      case a > b:
        return 1 * multiplier;
      case a < b:
        return -1 * multiplier;
      case a === b:
        return 0;
    }
  });

  // ...

  // Меняем порядок сортировки
  directions[index] =
    direction === 'asc' ? 'desc' : 'asc';

  // ...
};
```

См. демо на [HTML DOM](https://htmldom.dev/demo/sort-a-table-by-clicking-its-headers/index.html){:target="_blank"}.
