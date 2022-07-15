#### Объявление функции

```javascript
function addNumbers(a, b) {
  return a + b;
}
```

#### Функциональное выражение и стрелочные функции

```javascript
const multiplyNumbers = (a, b) => {
  return a * b;
};
```

#### Вызов функций

```javascript
const x = addNumbers(1, 2);
const y = multiplyNumbers(3, 4);
```

#### Контекст и `this`

У функций есть встроенный метод `bind`, который позволяет привязать контекст.

```javascript
const user = {
  firstName: 'Вася',
};

function func() {
  alert(this.firstName);
}

const funcUser = func.bind(user);
funcUser(); // Вася
```
