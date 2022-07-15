#### метод `forEach()`

Выполняет указанную функцию один раз для каждого элемента в массиве или DOM-коллекции.

```javascript
const emotions = ['happy', 'sad', 'angry'];
emotions.forEach((emotion) => console.log(emotion));
```

#### `for`

```javascript
let sum = 0;
const a = [10, 20, 30, 40];

for (let i = 0; i < a.length; i++) {
  sum += a[i];
  console.log(sum);
}
```

#### `for...of`

Перебирает фактически любые итерируемые объекты (включая строки, массивы, наборы узлов, карты, объект аргументов и подобные).

```javascript
const language = 'JavaScript';
let text = '';

for (const x of language) {
  text += x;
  console.log(text);
}
```

#### `while`

Выполняется если и пока условие верно.

```javascript
let i = 1;

while (i < 100) {
  i *= 2;
  console.log(`${i}, `);
}
```

#### `do...while`

Выполняется минимум один раз и затем пока условие верно.

```javascript
let j = 1;

do {
  j *= 2;
  console.log(`${j}, `);
} while (j < 100);
```

#### `break`

```javascript
for (let x = 0; x < 10; x++) {
  if (x === 5) {
    // Остановиться и выйти из цикла
    break;
  }
  console.log(`${x}, `);
}
```

#### `for...in`

⛔️ Также перебирает итерируемые объекты, но проходит по свойствам в произвольном порядке, поэтому не рекомендуется — безопаснее использовать какой-нибудь другой цикл.

```javascript
const numbers = [45, 4, 9, 16, 25];
let txt = '';
for (const x in numbers) {
  txt += numbers[x];
  console.log(txt);
}
```

#### `continue`

⛔️ [Не рекомендуется](https://eslint.org/docs/rules/no-continue). Лучше использовать условие для подходящих элементов, а не для исключений. В примере это было бы if `(y !== 5) { console.log(`${y}, `); }`.

```javascript
for (let y = 0; y < 10; y++) {
  if (y === 5) {
    /* Пропустить и продолжить
    со следующим элементом */
    continue;
  }
  console.log(`${y}, `);
}
```
