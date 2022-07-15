#### 1\. С помощью `DOMParser`

```javascript
const stripHtml = function (html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};
```

#### 2\. С помощью тега `<template>`

`<template>` предназначен для заготовок разметки, которая изначально скрыта от пользователя, но может быть использована для вывода данных с помощью JS.

```javascript
const stripHtml = (html) => {
  const ele = document.createElement('template');
  ele.innerHTML = html;
  return ele.content.textContent || '';
};
```

#### 3\. Извлечь текст из поддельного элемента (не рекомендуется)

```javascript
const stripHtml = (html) => {
  // Создаем новый элемент
  const ele = document.createElement('div');
// const ele = document.createElement('textarea');
  
  // Задаем HTML-разметку
  ele.innerHTML = html;
  
  // Возвращаем только текст
  return ele.textContent || '';
};
```

Подход не рекомендуется, потому что оставляет возможность злоумышленникам вставить в разметку теги, например `<script>`. И хотя этого можно избежать, используя при создании `ele` не `div`, а `textarea`, какого-то преимущества перед первым способом — `DOMParser` — всё равно не появится.
