Используются для проверки различных аспектов наследования. Во избежание ошибок, рекомендуется вызывать эти методы не на экземпляре, а на первом звене цепочки прототипов — `Object.prototype` (или `{}.prototype`).

```javascript
// 👎 Так плохо
const bad = foo.hasOwnProperty('bar');

// 👍 Так хорошо
const good = {}.prototype
  .hasOwnProperty.call(foo, 'bar');
```

#### `hasOwnProperty`

Метод возвращает логическое значение — есть ли у объекта собственное свойство, не из цепочки прототипов (см. первый пример).

#### `isPrototypeOf()`

Метод проверяет, входит ли объект в цепочку прототипов другого объекта.

```javascript
// Object.prototype можно заменить литералом `{}`
const isPrototypeOfBar = {}.isPrototypeOf
  .call(foo, bar);
```

#### `propertyIsEnumerable()`

Метод возвращает логическое значение — является ли указанное свойство перечисляемым?

```javascript
const barIsEnumerable = {}.propertyIsEnumerable
  .call(foo, 'bar');
```
