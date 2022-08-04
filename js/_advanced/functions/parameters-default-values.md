Если функция не дополучает аргументов, пропущенные значения становятся `undefined`. Иногда это не страшно, но иногда чревато ошибками. Решают проблему значения по умолчанию. Присваиваются через знак равенства.

```javascript
const myFunc = (x = 'Икс', y = 100) => x + y;
```

Параметры со значениями по умолчанию пишутся в конце, после обычных параметров — так чтобы функция возвращала `undefined` только в случае пропуска всех аргументов.

```javascript
/**
 * JSDoc
 *
 * @param {string} name
 * @param {number} height
 * @param {number} weight
 */
const sayMyHeight = (
  name,
  height = 186,
  weight = 96
) => {
  alert(`
    Hi! My name is ${name}. My height
    is ${height}cm and my weight is ${weight}kg.
  `);
};

sayMyHeight('Vova');
```

Параметры по умолчанию могут быть любого типа: строками, числами, булевыми значениями, объектами…

```javascript
/**
 * JSDoc
 * @param {object} opts
 */
function findProducts(
  opts = { minPrice: 10, maxPrice: 20 },
) {
  console.log(opts);
}

// { minPrice: 10, maxPrice: 20 }
findProducts();

/* {}. Даже пустой объект в аргументе заменит
значение по умолчанию */
findProducts({});
```

…и выражениями.

```javascript
/**
 * JSDoc
 * @param {function} who
 */
function sayHi(
who = getCurrentUser().toUpperCase()
) {
  alert(`Привет, ${who}`);
}

// Привет, Вася
sayHi();
```
