Глобальные свойства и методы JS могут быть использованы с любым объектом программы.

#### Глобальные свойства, возвращающие простое значение

- `NaN` — значение [Not-a-Number](/js/advanced-theory.html#topic-built-in-nan)
- `Infinity` — значение, представляющее положительную бесконечность. `-Infinity` — значение, представляющее отрицательную бесконечность. Хотя тип `Infinity` числовой в коде свойство используется, как слово.
- `undefined` — свойство возвращается когда, переменная не инициализирована (т. е. ей не присвоено значение) или свойство объекта, элемент массива отсутствуют.
- литерал `null`.

#### Функции

Традиционно методы глобального объекта называют глобальными функциями.

- `encodeURIComponent`/`decodeURIComponent()` и `decodeURI()`/`encodeURI()`
- `parseInt()`
- `parseFloat()`
- `isFinite()`

#### `encodeURIComponent`/`decodeURIComponent()` и `decodeURI()`/`encodeURI()`

Кодируют и декодируют строки согласно стандарту веб-адресов. Превращая, например, пробел  в управляющую последовательность `%20` и обратно.

- `decodeURI()`/`encodeURI()` предназначены для использования в полном URI. Поэтому `encodeURI()` не кодирует стандартные спецсимволы, используемые в веб-адресах: `; / ? : @ & = + $ , #`.
- `encodeURIComponent`/`decodeURIComponent()` предназначены для использования на частях URI, которая лежит между разделителями `;/?: @и = + $, #`. В отличие от `encodeURI` `encodeURIComponent` кодирует всё.

Результатом применения `encodeURI()` в примере будет
`https://w3schools.com/my%20test.asp?name=st%C3%A5le&car=saab`

… А результатом применения encodeURIComponent —
`https%3A%2F%2Fw3schools.com%2Fmy%20test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab`
То есть все двоеточия, слеши и пр. будут закодированы.

```javascript
const uri = 'my test.asp?name=ståle&car=saab';
const enc = encodeURI(uri);
const encComp = encodeURIComponent(uri);
const dec = decodeURI(enc);
const decComp = decodeURIComponent(encComp);
```

#### `parseInt()`

Извлекает из строки первое целое число, если строка начинается с цифры или пробела. Вторым параметром, указывается основа [система счисления](https://ru.wikipedia.org/wiki/Система_счисления), так называемый *radix* — целое число в диапазоне между 2 и 36.

☝️🧐 В большинстве случаев система десятичная, `b 10` — это значение redix'a по умолчанию. Но все равно всегда следует его указывать, чтобы исключить ошибки считывания.

```javascript
// Вернет 10, как число
console.log(parseInt('10', 10));
console.log(parseInt('10.00', 10)); // 10
console.log(parseInt('10.33', 10)); // 10
console.log(parseInt('34 45 66', 10)); // 34
console.log(parseInt('   60   ', 10)); // 60
console.log(parseInt('40 years', 10)); // 40

// В этом случае вернет NaN, т.к. строка
// начинается ни с пробела, и ни с числа
console.log(parseInt('He was 40', 10));
console.log(parseInt('010', 10)); // 10
```

`parseInt()` не рекомендуется использовать с двоичной, восьмеричной и шестнадцатеричной системами. Вместо этого [использовать числовые литералы](https://ravesli.com/urok-36-literaly-magicheskie-chisla/).

```javascript
console.log(parseInt('10', 16)); // 16
console.log(parseInt('0x10', 16)); // 16
console.log(0x10); // 16
```

#### `parseFloat()`

Извлекает из строки первое десятичное число, если строка начинается с цифры или пробела.

```javascript
// Вернет 48.3, как число
console.log(parseFloat('48.3'));
console.log(parseFloat('  4')); // 4
console.log(parseFloat('He is 48')); // NaN
```

#### `isFinite()`

Определяет, является ли переданное значение конечным числом. Если необходимо, параметр сначала преобразуется в число.

```javascript
// Результат проверки — false
isFinite(Infinity);

// false
isFinite(NaN);

// false
isFinite(-Infinity);

// true
isFinite(0);

// true
isFinite(2e64);

// true, но было бы false если использовать более
// надежный вариант проверки Number.isFinite('0')
isFinite('0');
```
