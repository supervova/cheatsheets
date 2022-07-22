#### Объявление функции

```js
function addNumbers(a, b) {
  return a + b;
}
```

#### Функциональное выражение и стрелочные функции

```js
const multiplyNumbers = (a, b) => {
  return a * b;
};
```

Функциональные выражения считаются [предпочтительнее объявлений функций](#topic-expression-over-declaration).
#### Вызов функций

```js
const x = addNumbers(1, 2);
const y = multiplyNumbers(3, 4);
```

#### Контекст и `this`

У функций есть встроенный метод `bind`, который позволяет привязать контекст.

```js
const user = {
  firstName: 'Вася',
};

function func() {
  alert(this.firstName);
}

const funcUser = func.bind(user);
funcUser(); // Вася
```
