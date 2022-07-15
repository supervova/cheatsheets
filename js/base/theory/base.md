#### Вставка на страницу

```javascript
<script>const foo = 'bar';</script>
<script src="/a/js/main.js"></script>
```

**Атрибут** `async`. Браузер скачивает скрипт в фоновом режиме и запускает по завершению загрузки.

```javascript
<script src="/a/js/main.js" async></script>
```

**Атрибут** `defer`. Браузер также скачивает скрипт в фоновом режиме, но откладывает выполнение скрипта до тех пор, пока вся страница не будет загружена полностью.

```javascript
<script src="/a/js/main.js" defer></script>
```

☝️🧐 При одновременном указании `async` и `defer` будет использован только async.

#### Вставка модулей на страницу

Модуль — это часть программы, которая содержит класс или библиотеку. Их можно собирать вместе с помощью специального инструмента — например, Webpack'а — либо вставлять на странице с атрибутом `type="module"`.

```javascript
<script src="/js/my-element.js" type="module"></script>
```

#### DOM

```javascript
document.getElementById('my-el').innerHTML =
  'Hello World!';
```

#### Комментарии

```javascript
// Однострочный

/* Многострочный. Lorem ipsum dolor, sit amet
consectetur adipisicing elit. Sed repellendus. */

/**
 * Многострочный JSDoc-комментарий функции
 *
 * @param {string} title
 * @param {number} width
 * @param {number} height
 */
```

#### Строгий режим

Устанавливает жесткие правила кода. Если б в примере ниже не было директивы строгого режима, код сработал бы, но представлял угрозу сбоя для программы в целом. С директивой выполнение программы на третьей строке будет приостановлено, потому что переменная x не была объявлена до присвоения значения.

```javascript
'use strict';
// Ошибка будет выведена в консоль
x = 1;

Не рекомендуется
// https://bit.ly/3h5O8KN
let result = eval(text);

// https://bit.ly/3HmuhC1
document.write('Hello');

// https://bit.ly/3IcrtZ8
var foo = 'bar';

/* Различные способы обратной связи.
Профессионалы используют только на этапах
разработки и в прототипах */
console.log(a);
alert(a);
confirm('Really?');
prompt('Your age?', '0');
```
