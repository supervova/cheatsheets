HTML-тег `<template>` позволяет записывать на странице блоки разметки, невидные по умолчанию, но готовые к наполнению и выводу на экран с помощью JS.

#### Пример

```html
<table id="product-table">
  <thead>
    <tr>
      <td>UPC_Code</td>
      <td>Product_Name</td>
    </tr>
  </thead>
  <tbody>
    <!-- данные будут вставлены сюда -->
  </tbody>
</table>

<template id="product-row">
  <tr>
    <td></td>
    <td></td>
    <td>
      <!-- внутри можно добавить стили и скрипты -->
      <style>
        td { font-weight: bold; }
      </style>
      <script>
        alert('Привет');
      </script>
    </td>
  </tr>
</template>
```

У нас есть таблица и разметка строки таблицы в `templat`'е. Используем JavaScript, чтобы вставить строки в таблицу. Содержимое шаблона доступно по его свойству `content` в качестве `DocumentFragment` – особого типа DOM-узла.

```js
// Убедимся, что браузер поддерживает <template>
if ('content' in document.createElement('template')) {
  // Находим элемент tbody таблицы и шаблон строки
  const tbody = document.querySelector('tbody');
  const template =
    document.querySelector('#product-row');

  // Клонируем новую строку…
  const row01 = template.content.cloneNode(true);
  const td = row01.querySelectorAll('td');

  // заполняем содержимым…
  td[0].textContent = '1235646565';
  td[1].textContent = 'Stuff';

  // и вставляем клон в таблицу
  tbody.appendChild(clone);

  // Также клонируем новые строки: row02, row03 etc
} else {
  alert(`
    Извините, ваш браузер не поддерживает
    технологии нашего сайта.
  `);
}
```

#### ☝️🧐 Обработка событий

Когда мы клонируем и вставляем в шаблон — `template.content.cloneNode(true)` и т.д. — то, так как это `DocumentFragment`, вместо тега `<template>` с потомками вставляются только потомки (`<tr>`, `<td>`, `<style>`, `<script>`).

Поэтому при установке слушателей следует ссылаться не на корневой элемент шаблона, а на его потомков.

```html
<div id="container"></div>

<template id="template">
  <div>Click me</div>
</template>
```

```js
const container = document.getElementById('container');
const template = document.getElementById('template');

function clickHandler(event) {
  alert('Huzzah!');
}

const firstClone = template.content.cloneNode(true);
/* Ставим слушатель на корневой элемент шаблона.
Не сработает */
firstClone.addEventListener('click', clickHandler);
container.appendChild(firstClone);

// Теперь клонируем потомка…
const secondClone =
  template.content.firstElementChild.cloneNode(true);
// И слушатель, установленный на нём, сработает
secondClone.addEventListener('click', clickHandler);
container.appendChild(secondClone);
```

В переменную `firstClone` мы сохранили экземпляр шаблона, как `DocumentFragment`. И хотя нас получилось отрисовать его внутри контейнера, клик по нему не срабатывает. В переменной `secondClone` у нас экземпляр потомка `templat`'а — `div`. Клик на нём обрабатывается.

#### ☝️🧐 Сложности применения

У `<template>` есть очевидное преимущество — возможность вставки «живого» содержимого, вместе со скриптами. Но конструкции с использованием `<template>` слишком многословны. Решение не предлагает операторов итерации, связывания данных и подстановки переменных. И хотя эти возможности можно реализовать дополнительными средствами, разработчики предпочитают шаблонизаторы и [шаблонные литералы](#topic-template-literal).

```html
<div id="app"></div>

<template id="list-item">
  <div class="wizard">
    <strong id="wizard-name"></strong>
  </div>
</template>
```

```js
// Получаем элементы
const app = document.querySelector('#app');
const listItem = document.querySelector('#list-item');
const wizards = ['Merlin', 'Gandalf', 'Neville'];

// Создаем временный контейнер
const elems = [];

// Loop through each wizard
wizards.forEach((wizard) => {
  // Клонируем шаблон ип находим в нём <div>
  const div =
    listItem.content.cloneNode(true).querySelector('div');

  // А теперь — <strong> внутри <div>
  const strong = div.querySelector('strong');

  // Вставляем текст
  strong.textContent = wizard;

  // Добавляем во временный массив
  elems.push(div);
});

// Переносим из elems в интерфейс
app.append(...elems);
```
