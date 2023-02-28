#### 1\. С помощью `DOMParser`

```js
const stripHtml = function (html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};
```

#### 2\. С помощью тега `<template>`

`<template>` предназначен для заготовок разметки, которая изначально скрыта от пользователя, но может быть использована для вывода данных с помощью JS.

```js
const stripHtml = (html) => {
  const el = document.createElement('template');
  el.innerHTML = html;
  return el.content.textContent || '';
};
```

#### 3\. Извлечь текст из поддельного элемента (не рекомендуется)

```js
const stripHtml = (html) => {
  // Создаем новый элемент
  const el = document.createElement('div');
// const el = document.createElement('textarea');
  
  // Задаем HTML-разметку
  el.innerHTML = html;
  
  // Возвращаем только текст
  return el.textContent || '';
};
```

Подход не рекомендуется, потому что оставляет возможность злоумышленникам вставить в разметку теги, например `<script>`. И хотя этого можно избежать, используя при создании `el` не `div`, а `textarea`, какого-то преимущества перед первым способом — `DOMParser` — всё равно не появится.
