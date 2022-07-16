#### Экспорт ячеек

В примере мы переведем данные таблицы `exportMe` в CSV по нажатию кнопки `export`.

```html
<table id="exportMe" class="table"><!--...--></table>
<button id="export">Export</button>
```

Функция `toCsv` переводит ячейки в формат CSV. Получаем строки, перебираем каждую: извлекаем содержимое ячеек, записываем через запятую; каждую `tr` записываем на новой строке.

```javascript
const toCsv = (table) => {
  // Получаем все строки таблицы
  const rows = table.querySelectorAll('tr');

  // Перебираем строки, собираем и возвращаем CSV
  return [].slice
    .call(rows)
    .map((row) => {
      // Получаем все ячейки
      const cells = row.querySelectorAll('th,td');
      return [].slice
        .call(cells)
        .map((cell) => {
          return cell.textContent;
        })
        .join(',');
    })
    .join('\n');
};
```

#### Загружаем CSV

Функция `download` создает временную невидимую ссылку скачивания. Добавляет в атрибут `href` CSV, как Data URL. Инициирует событие `click`, а затем удаляет временную ссылку.

```javascript
const download = (text, fileName) => {
  const link = document.createElement('a');
  link.setAttribute(
    'href',
    `data:text/csv;
     charset=utf-8,${encodeURIComponent(text)}`
  );
  link.setAttribute('download', fileName);

  link.style.display = 'none';
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};
```

Устанавливаем на кнопку слушатель с обработчиком, последовательно вызывающим функции `toCsv` и `download`.

```javascript
const table = document.getElementById('exportMe');
const exportBtn = document.getElementById('export');

exportBtn.addEventListener('click', () => {
  // Экспорт в CSV
  const csv = toCsv(table);

  // Скачивание CSV
  download(csv, 'download.csv');
});
```
