1. Избегать глобальных переменных.
2. Объявлять/инициализировать переменные и классы вверху программы.
3. Никогда не использовать `new` и экземпляры встроенных классов для присвоения значений примитивного типа.
4. Также избегать `new` для создания экземпляров `Object`, `Array`, `Function`.
5. Остерегаться случайного преобразования типов.
6. Использовать тройное равно для сравнения.
7. Функциональные выражения предпочтительнее объявлений функций
8. Функции: JSDoc-комментарии и параметры по умолчанию.
9. Заканчивать switch default'ом.
10. Не использовать eval().
11. Не использовать параллельные массивы.
12. Не хранить длину массива в переменной.
13. `eventListener` вместо `on`-функций
14. Соглашение об именовании.
15. Использовать директиву 'use strict mode';
16. Всегда придерживаться одного стиля кодирования.

#### 1) Избегать глобальных переменных

Они могут быть переопределены любыми скриптами. Использовать `const`, `let` и замыкания.

```js
// ⛔️ плохо
const globalVar = 1;

// 👍 хорошо — замыкание
(() => {
  const localVar = 1;
  // код функции
})();
```

#### 2) Объявлять/инициализировать переменные, классы и функции вверху программы

```js
const myNum = 0;
const myStr = '';
const myArr = [];
const myObj = {};
```

#### 3) Никогда не использовать `new` и экземпляры встроенных классов для присвоения значений примитивного типа

Строки, числа, логические типы данных можно преобразовывать, если надо, и сравнивать. Объекты сравнивать между собой или с примитивами нельзя. eslint: no-new-wrappers

```js
const y = new String('John'); // ⛔️
```

[Новые символы](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol){:target="_blank"} создаются с помощью функции `Symbol()`. Следовательно, оператор `new` в данном случае не просто не рекомендован, а вызовет ошибку.

```js
const sym = new Symbol(); // ⛔️ TypeError
const id = Symbol('id'); // 👍
```

#### 4) Также не использовать оператор `new` для создания экземпляров встроенных классов `Object`, `Array`, `Function`

Это усложняет код и замедляет его выполнение.

```js
const myObject = new Object(); // ⛔️
const myObject = {}; // 👍
```

Ограничения не означает полного запрета на оператор `new`. Ег нужно использовать для создания экземпляров пользовательских объектов, и некоторых встроенных объектов. Например, `new RegExp()` используется, когда надо создать регулярное выражение «на лету» из динамически сгенерированной строки. А `new Event()` для создания пользовательского события.

```js
// новый объект
const x1 = {};

// новая строка
const x2 = '';

// новое число
const x3 = 0;

// новый логический тип
const x4 = false;

// новый массив
const x5 = [];

// новый объект регулярного выражения
const x6 = /()/;

// новое функциональное выражение
const x7 = () => {};
```

#### 5) Остерегаться случайного преобразования типов

Выполняя математические операции JS может преобразовывать числа в строки. При вычитании строки из строки возвращает `NaN`.

```js
// строка…
let x = '';

// NaN (Not-A-Number) — математическая ошибка
x = '5' - 'x';

// число
x = '5' - 7;
```

#### 6) Использовать тройное равно для сравнения

Двойное равно сначала преобразовывает типы, а потом сравнивает. Тройное сравнивает тип и значение.

```js
// условие вернет true
if (0 == '') {

// условие вернет true
} else if (1 == '1') {

// условие вернет true
} else if (1 == true) {

// условие вернет false
} else if (0 === '') {

// условие вернет false
} else if (1 === '1') {

// условие вернет false
} else if (1 === true) {
  // code
}
```

#### 7) Функциональные выражения предпочтительнее объявлений функций {#topic-expression-over-declaration}

```js
const multiplyNumbers = (a, b) => {
  return a * b;
};
```

В функциональном выражение функция анонимная. Она «забывается» программой сразу после выполнения. Поэтому вместо привычного объявления функции сейчас рекомендуется [использовать функциональные выражения](https://go.shr.lc/3nX8Xv9){:target="_blank"} — чтобы не засорять глобальную область видимости и экономить оперативную память.

Объявления функции используются только тогда, когда функция нужна из любой точки кода (объявленные функции «всплывают» — hoist).

#### 8) Функции всегда надо комментировать по стандарту JSDoc и по возможности использовать параметры по умолчанию

Функцию можно вызвать с любым количеством аргументов. Если параметр не передан при вызове – он считается равным `undefined`.

```js
/**
 * Функция с JSDoc-комментарием
 * @param {string} title
 * @param {number} width
 * @param {number} height
 */
function showMenu(
  title = 'Без заголовка',
  width = 100,
  height = 200
) {
  alert(`${title} ${width} ${height}`);
}
```

#### 9) Заканчивать switch default'ом

```js
switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
  default:
    day = 'Unknown';
}
```

#### 10) Не использовать eval()

Функция `eval()` получает строку и выполняет ее как код JavaScript. Это плохо сказывается на производительности и безопасности. Можно, например, нечаянно выполнить вредоносный код полученный из сети. Если код известен (а не определяется в ходе выполнения процесса), вообще нет причин использовать `eval()`. Если код динамически генерируется во время выполнения, то часто возможно достичь цели лучшим методом, чем использование `eval()`. Например, использование записи с квадратными скобками для динамического доступа к свойствам.

```js
const property = 'name';

// ⛔️ плохо
alert(eval(`obj.${property}`));

// 👍 хорошо
alert(obj[property]);
```

#### 11) Не использовать параллельные массивы

При работе с вложенными данными следует соблюдать правила иерархии. Cвязанные данные должны иметь общий контейнер. Cвойства должны храниться внутри объекта, а НЕ объект — внутри свойства.

```js
// ⛔️ плохо
firstNames = ['Иван', 'Пётр', 'Сидор'];
lastNames = ['Иванов', 'Петров', 'Сидоров'];

// 👍 хорошо
const people = [
  {
    lastName: 'Иванов',
    firstName: 'Иван',
    patronymic: 'Иваныч'
  },
  {
    lastName: 'Петров',
    firstName: 'Пётр',
    patronymic: 'Петрович'
  },
  {
    lastName: 'Сидоров',
    firstName: 'Сидор',
    patronymic: 'Сидорович'
  },
];
```

#### 12) Не хранить длину массива в специальной переменной

Обращаться к ней через свойство `length`. В JS `length` — это свойство, а не метод и оно не пересчитывается на каждом этапе цикла. Поэтому, в отличие от Си, где доступ к длине массива, требует повторных вычислений, в JS не надо создавать лишнюю переменную.

```js
// ⛔️ плохо
staff = firstNames.length;
for (let i = 0; i < staff; i++) {
  // Do something
}

// 👍 хорошо
for (let i = 0; i < firstNames.length; i++) {
  // Do something
}
```

#### 13) `eventListener` вместо `on`-функций

Обработчик события может быть назначен прямо в разметке, в атрибуте, который называется `on`-событие.

```html
<button type="button" onclick="myFunc()">
  Нажми меня
</button>
```

Можно назначать обработчик, из внешнего скрипта.

```html
<button id="elem" type="button">Нажми меня</button>
<script>
  elem.onclick = function() {
    alert('Спасибо');
  };
</script>
```

Фундаментальный недостаток описанных выше способов назначения обработчика — невозможность повесить несколько обработчиков на одно событие.

Проблему решают методы `addEventListener` и `removeEventListener`.

```js
function handler() {
  alert( 'Спасибо!' );
}

elem.addEventListener('click', handler);
elem.removeEventListener('click', handler);
```


#### 14) Соглашение об именовании

- Избегать названий из одной буквы.
- Имя должно быть значащим.
- PascalCase — для классов. camelCase — для именования объектов, функций и экземпляров.
- Не использовать _ в начале или в конце названий.
- Сокращения или буквенные аббревиатуры писать согласно логике верблюжьего регистра.

```js
// ⛔️ плохо
function q() {
  // ...
}

const _firstName_ = 'Panda'; // eslint-disable-line

// 👍 хорошо
function myQuery() {
  // ...
}

// 👍 хорошо
class User {
  // ...
}

// ⛔️ плохо
const optimizedJPG = [
  // ...
];

// 👍 хорошо
const optimizedJpg = [
  // ...
];
```

#### 15) Использовать директиву 'use strict mode'

[Она](https://www.w3schools.com/js/js_strict.asp){:target="_blank"} предотвращает ошибки, которые пропускает JS в обычном режиме: использование необъявленных переменных, использование зарезервированных слов и т.п. Директива записывается в первой строке кода программы или тела функции.

#### 16) Всегда придерживаться общего стиля кодирования

- Для командной работы можно прописать краткий свод правил, ориентируясь на признанный сообществом стиль. Наиболее популярным сейчас является стиль [AirBnb](https://github.com/airbnb/javascript){:target="_blank"}. А упрощенную форму изложения можно позаимствовать у [W3Schools](https://www.w3schools.com/js/js_conventions.asp){:target="_blank"}.
- Установить линтер и соответствующие правила на все машины.

Некоторые правила AirBnb, которые не приведены ранее.

- Для строк использовать одиночные кавычки.
- Максимальная длина строки — 80 символов.

  Чтобы длина строки не превышала этот предел, части команды переносятся на новые строки. Оператор присваивания остается в конце строки, остальные операторы переносятся на новые строки.

  ```js
  document.getElementById('demo').innerHTML =
    'Hello Dolly';

  if (
    (foo === 123 || bar === 'abc')
    && doesItLookGoodWhenItBecomesThatLong()
    && isThisReallyHappening()
  ) {
    thing1();
  }
  ```

- Объявление функции (не присваивание) недопустимо в условных блоках.
- Доступ к свойствам и методам объекта всегда по возможности через точку. Запрос через квадратные скобки — вроде `user['get']` — не рекомендуется (если это не требуется для чего-то особого в коде).
- Фигурные скобки только для многострочных блоков кода.
- Табуляция — два пробела.
- Использовать логические отступы в цепочках вызовов, каждый вызов на новой строке. Например.

```js
document.getElementById('child')
  .closest('.mommy')
  .classList
  .add('.is-angel-now');
```

- Точки с запятой — всегда, где это необходимо.
- Приведение типов по возможности в начале операции, для чисел всегда использовать `parseInt` или `Number`. Побитовые операции для приведения допустимы ради быстродействия, каждую такую операцию нужно комментировать.

- [Оригинал руководства](https://github.com/airbnb/javascript){:target="_blank"}
- [Перевод](https://github.com/uprock/javascript) (устаревшей версии){:target="_blank"}

См. также [советы по оптимизации кода](/js/advanced-theory.html#topic-performance-tips)
