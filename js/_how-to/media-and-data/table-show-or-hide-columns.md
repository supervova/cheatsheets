Каркас разметки:

```html
<table id="table">
  ...
</table>
<ul id="menu"></ul>
```

#### Меню

Меню содержит чекбоксы для скрытия каждой из колонок.


```html
<ul id="menu">
  <li>
    <!-- Чекбокс первой колонки -->
    <label>
      <input type="checkbox">Название столбца
    </label>
    <!-- Остальные колонки ... -->
  </li>
</ul>
```

Чтобы добавить в меню все нужные чекбоксы, переберем ячейки первой строки таблицы.

```js
const menu = document.getElementById('menu');
const table = document.getElementById('table');
const headers = table.querySelectorAll('th');

headers.forEach((th, index) => {
  // Создаем чекбокс для каждой колонки
  const li = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');

  // Надпись в `label` соответствует названию столбца
  const text = document.createTextNode(th.textContent);

  label.appendChild(checkbox);
  label.appendChild(text);

  li.appendChild(label);
  menu.appendChild(li);
});
```

Для переключения видимости будем обрабатывать событие `change`.

```js
headers.forEach((th, index) => {
  // Создаем чекбокс для каждой колонки
  // ...
  // Обрабатываем событие
  checkbox.addEventListener('change', (e) => {
    e.target.checked
      ? showColumn(index)
      : hideColumn(index);
  });
});
```

К функциям `showColumn` и `hideColumn` вернемся чуть позже.

#### Как показать/скрыть меню

- Меню должно открываться, когда пользователь кликает на первую строку таблицы.
- Меню должно скрываться, когда пользователь кликает за его пределами.

Контекстному меню посвящен [собственный раздел](#topic-context-menu). А в данном случае оно будет реализовано так.

```js
const thead = table.querySelector('thead');

/* Обработаем событие `contextmenu` на первой
строке таблицы */
thead.addEventListener('contextmenu', (e) => {
  e.preventDefault();

  // Покажем меню
  // ...

  document.addEventListener('click', documentClickHandler);
});

// Скроем меню на клике за его границами
const documentClickHandler = (e) => {
  // ...
};
```

#### Переключаем колонки

Кликая определенный чекбокс в меню, мы должны скрывать и показывать колонки по соответствующему индексу в `NodeList`.

Для того, чтобы выбрать все ячейки в колонке, мы каждой добавим атрибут `data-column-index` с общим значением.

```js
// Получаем количество колонок
const numColumns = headers.length;

/* Чтобы позже использовать метод `filter`,
сохраним набор элементов, как массив */
const cells =
  [].slice.call(table.querySelectorAll('th, td'));

cells.forEach((cell, index) => {
  cell.setAttribute(
    'data-column-index', index % numColumns
  );
});
```

Прячем колонки с определенным значением `data-column-index`.

```js
const hideColumn = (index) => {
  cells
    .filter((cell) => {
      return (
        cell.getAttribute('data-column-index') ===
        `${index}`
      );
    })
    .forEach((cell) => {
      cell.style.display = 'none';
    });
};
```

Показываем колонки.

```js
const showColumn = (index) => {
  cells
    .filter((cell) => {
      return (
        cell.getAttribute('data-column-index') ===
        `${index}`
      );
    })
    .forEach((cell) => {
      cell.style.display = '';
    });
};
```

#### Не позволяем скрыть последнюю оставшуюся колонку

Добавим чекбоксам в меню тот же `data`-атрибут, что и ячейкам.

```js
headers.forEach((th, index) => {
  // Создаем чекбокс для каждой колонки
  // ...
  checkbox.setAttribute('data-column-index', index);
});
```

Когда колонка скрыта, мы добавляем еще один пользовательский атрибут, для того чтобы поменить скрытую колонку.

```js
const hideColumn = (index) => {
  cells
    .filter((cell) => {
      // ...
    })
    .forEach((cell) => {
      // ...
      cell.setAttribute('data-shown', 'false');
    });
};
```

Подсчитав, сколько колонок уже скрыто, мы можем блокировать чекбокс, связанной с единственной оставшейся.

```js
const hideColumn = (index) => {
  // Сколько колонок уже скрыто?
  const numHiddenCols = [...headers].filter((th) => {
    return th.getAttribute('data-shown') === 'false';
  }).length;

  if (numHiddenCols === numColumns - 1) {
    /* Когда остается одна видимая колонка,
    блокируем соответствующий чекбокс */
    const shownColumnIndex = thead
      .querySelector('[data-shown="true"]')
      .getAttribute('data-column-index');

    const checkbox = menu.querySelector(
      `
        [type="checkbox"]
        [data-column-index="${shownColumnIndex}"]
      `
    );
    checkbox.setAttribute('disabled', 'true');
  }
};
```

Меняем атрибут `data-shown`, когда колонка видна.

```js
cells.forEach((cell, index) => {
  cell.setAttribute('data-shown', 'true');
});

const showColumn = (index) => {
  cells
    .filter((cell) => {
      // ...
    })
    .forEach((cell) => {
      // ...
      cell.setAttribute('data-shown', 'true');
    });

  menu
    .querySelectorAll('[type="checkbox"][disabled]')
    .forEach((checkbox) => {
      checkbox.removeAttribute('disabled');
    });
};
```

См. демо на [HTML DOM](https://htmldom.dev/demo/show-or-hide-table-columns/index.html){:target="_blank"}.
