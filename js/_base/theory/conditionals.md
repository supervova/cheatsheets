#### `if … else`

```js
// Переменные в примерах
let age;
let eligible;

if (age >= 14 && age < 19) {
  eligible = true;

// Необязательный блок
} else if (age > 50) {
  console.log('стар, суперстар');

// Необязательный блок
} else {
  eligible = false;
}
```

#### Конструкция `switch`

```js
// Переменная в примере
let text;

// В качестве условия получаем текущую дату
switch (new Date().getDay()) {

  // if (day == 6)
  case 6:
    text = 'Суб';
    break;

  // if (day == 0)
  case 0:
    text = 'Вск';
    break;

  // else
  default:
    text = 'Тоска';
}
```

#### Тернарный оператор / тернарная условная операция

Сокращенная версия `if…else`:
`условие ? выражениеЕслиУсловиеВерно : иВыражениеЕслиНет;`

Как правило, тернарная операция не используется одна — только после объявления переменной, которой присваивается значение, в зависимости от результатов проверки условия.

```js
const voteable = (age < 18) ? 'Too young' : 'Old enough';
```

☝️🧐 **Рекомендация Airbnb:** не использовать вложенные тернарные операции.

```js
// ⛔️ плохо
const foo = maybe1 > maybe2
  ? 'bar'
  : value1 > value2 ? 'baz' : null;

// 👍Лучше использовать `if … else if… else`
let foo;

if (maybe1 > maybe2 ) {
  foo = 'bar';
} else if (value1 > value2) {
  foo = 'baz';
} else {
  foo = null;
}
```

☝️🧐 **Рекомендация Airbnb:** избегать ненужных тернарных операторов.

```js
// плохо
const foo4 = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// хорошо
const foo5 = a || b;
const bar2 = !!c;
const baz2 = !c;
```

#### Еще одна альтернатива `if…else` — `условие && выражениеЕслиВерно`

```js
// Если переменные `foo` и `bar` равны, радуемся
foo === bar && console.log('Huzzah!');
```

Или так.

```js
/* Если переменные `foo` и `bar` равны, радуемся.
В противном случае — вздыхаем */
(foo === bar &&
  console.log('Huzzah!')) ||
  console.log('Doh!');
```
