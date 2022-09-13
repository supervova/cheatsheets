# `NaN` / `isNaN()`, `isFinite()`

Если математическая операция не может быть совершена, то возвращается специальное значение `NaN` (Not-A-Number). `NaN` используется для обозначения математической ошибки.

Например, деление `0/0` в математическом смысле не определено, поэтому его результат `NaN`. Тоже самое получится, если попробовать умножить строку на число.

```javascript
alert(0 / 0); // NaN
alert('food' * 1000); // NaN
```

Значение NaN – единственное в своем роде, которое не равно ничему, включая себя. Следующий код ничего не выведет — оба вызова не сработают.

```javascript
if (NaN == NaN) alert('==');
if (NaN === NaN) alert( '===' );
```

⛔️ Так как значение `NaN` не равно ничему, даже самому себе, любые проверки равенства с `NaN` исключаются…

```javascript
if (myNum === NaN) { // так делать не надо
  myNum = 0;
}
```

Вместо этого используют специальную функцию isNaN.

```javascript
// true — 0 / 0 равно NaN
alert(isNaN(0 / 0));

// false — 12 это число
alert(isNaN('12'));
```

☝️🧐 **Рекомендации Airbnb**. Использовать `Number.isNaN` вместо глобального `isNaN`. eslint: no-restricted-globals

```javascript
// ⛔️ плохо
isNaN('1.2'); // false
isNaN('1.2.3'); // true

// 👍 хорошо
Number.isNaN('1.2.3'); // false
Number.isNaN(Number('1.2.3')); // true
```

## `isFinite()`

Глобальная, не связанная не с одним объектом функция `isFinite()`, а также аналогичный метод объекта `Number`, определяет: является ли переданное значение конечным числом. То есть чиcлом, и не бесконечным, как, например 3.14…

☝️🧐 **Рекомендации Airbnb**. Использовать `Number.isFinite` вместо глобального `isFinite`. eslint: no-restricted-globals

```javascript
// ⛔️ плохо
isFinite('2e3'); // true
isFinite(Infinity); // false
isFinite(0); // true

// true, но было бы false если использовать более
// надежную проверку Number.isFinite
isFinite('0');

// 👍 хорошо
Number.isFinite('2e3'); // false
Number.isFinite('0'); // false
```
