```javascript
myFunc('аргумент в param1', 'аргумент в param2');
```

Функции можно вызывать в других конструкциях, например в условной…

```javascript
if (myFunc(24) % 3 === 0) {
  // code…;
} else {
  // code…;
}
```

Также функции можно вызвать в других функциях.

```javascript
// Пример № 1
const square = x => x * x;

const cube = x => square(x) * x;

// Пример № 2
const isMultipleOfThree = x => x % 3 === 0;
```

Интересный пример использования оператора `!` — логического «НЕ». Число сначала передаётся в первую функцию `isMultipleOfThree`. То, что остаток деления на 3 не равен 0 обозначается ! перед использованной функцией

```javascript
const isNotMultipleOfThree = x => !isMultipleOfThree(x);
```
