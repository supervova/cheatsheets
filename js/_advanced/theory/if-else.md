#### Использование функции в условном выражении

```javascript
// Необходимые переменные
const myAge = prompt('How old are you?');
const legalDrivingAge = 18;

// Функция, которая будет использована в условии
const canIDrive = (age, legalAge) => {
  if (age >= legalAge) {
    return true;
  }
  return false;
};

// Функция в условии
if (canIDrive(myAge, legalDrivingAge)) {
  console.log('You can legally drive!');
} else {
  console.log(
    'You\'ll have to wait a few more years!'
  );
}
```

#### Вложенные условные конструкции

```javascript
let result;

if (yourName.length > 0 && gender.length > 0) {
  // Вложенная конструкция
  if (gender === 'male' || gender === 'female') {
    result = 'Thanks';
  } else {
    result = 'Please enter male or female.';
  }
} else {
  result = 'Tell us both your name and gender.';
}
```

#### ☝️🧐 Стилистические рекомендации

Если в блоке `if` выполняется оператор `return`, последующий блок `else` не нужен. `return` внутри блока `else if`, следующем за блоком `if`, который содержит `return`, может быть разделен на несколько блоков `if`.

```javascript
/**
 * ⛔️ плохо
 * @return {*}
 */
function foo() {
  if (x) {
    return x;
  } else {
    return y;
  }
}

/**
 * 👍 хорошо
 * @return {*}
 */
function bar() {
  if (x) {
    return x;
  }

  return y;
}
```

☝️🧐 Для логического типа используем сокращение — переменные равные `true` или `false` в сравнении не нуждаются. Для строк и чисел используем явное сравнение.

```javascript
// ⛔️ плохо
if (isValid === true) {
  // ...
}

// 👍 хорошо
if (isValid) {
  // ...
}

// ⛔️ плохо
if (name) {
  // ...
}

// 👍 хорошо
if (name !== '') {
  // ...
}

// ⛔️ плохо
if (collection.length) {
  // ...
}

// 👍 хорошо
if (collection.length > 0) {
  // ...
}
```

В условных операторах, результат выражения переводится в булевый тип по следующим правилам.

- `Object` = true
- `Undefined` = false
- `Null` соответствует false
- `Boolean` — по значению
- Строка соответствует false, если пустая '', в остальных случаях true
- Число соответствует false, если +0, -0, or `NaN`, в остальных случаях true

☝️🧐 Если управляющий оператор (`if`, `while` и т.д.) слишком длинный, то каждое (сгруппированное) условие можно поместить на новую строку. Логический оператор должен располагаться в начале строки.

```javascript
// ⛔️ плохо
if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
  thing1();
}

// 👍 хорошо
if (
  (foo === 123 || bar === 'abc')
  && doesItLookGoodWhenItBecomesThatLong()
  && isThisReallyHappening()
) {
  thing1();
}
```
