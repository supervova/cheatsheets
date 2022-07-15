# Таблица

- [Under-Engineered Responsive Tables](https://adrianroselli.com/2020/11/under-engineered-responsive-tables.html)

## Разметка

Для прокрутки критически важно установить tabindex='0'.

```pug
//- Responsive table
.table-container(role='region', tabindex='0', aria-labelledby='caption-01')
  table
    caption#caption-01 Books in a Scrolling Container
    thead
      tr
        th Author
        th Title
        th Year
        th ISBN-13
        th ISBN-10
    tbody
      tr
        td Miguel De Cervantes
        td The Ingenious Gentleman Don Quixote of La Mancha
        td 1605
        td 9783125798502
        td 3125798507
      tr
        td Gabrielle-Suzanne Barbot de Villeneuve
        td La Belle et la B&ecirc;te
        td 1740
        td 9781910880067
        td 191088006X
  ```

## Сортировка

- Кнопка сортировки показывается только одна: в той колонке, по которой сортированы данные.
- Кнопка выравнивается по окончанию надписи, а не по краю ячейки. Если в колонке данные вровнены по левому краю — [справа](https://go.shr.lc/308qYP0). Если по правому — [слева](https://go.shr.lc/3DFxz0Y).

## Фильтрация

Фильтры применяются ко всей таблице, а не к отдельной колонке и располагаются, как теги над заголовком таблицы.
