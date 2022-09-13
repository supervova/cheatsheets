#### `getOwnPropertyNames` — получение списка свойств объекта

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  language: 'EN',
  year: 2021,
  age: 51,

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

};

/* Результатом примера будет массив
[ 'firstName', 'lastName', 'language', 'year',
'fullName', 'age' ] */
console.log(Object.getOwnPropertyNames(person));
```

#### `keys` — получение списка только перечисляемых свойств объекта

```js
/* Результатом примера будет массив
[ 'firstName',  'lastName', 'year', 'fullName', 'age' ] */
Object.defineProperty(
  person, 'language', { enumerable: false }
);

Object.keys(person);
```

#### `getOwnPropertyDescriptor` — получение значения и атрибутов собственного свойства

```js

/* Результатом примера будет
{ value: 'Vladimir', writable: true,
enumerable: true, configurable: true } */
console.log(
  Object.getOwnPropertyDescriptor(
    person, 'firstName'
  )
);
```

#### `getPrototypeOf` — доступ к прототипу

Возвращает прототип, то есть набор свойств и методов указанного объекта.

```js
console.log(Object.getPrototypeOf(person));
```

#### `preventExtensions` — запрет добавления новых свойств

```js
Object.preventExtensions(person);
```

#### `isExtensible` — проверка возможности добавления новых свойств

Возвращает true, если можно добавлять новые свойства.

```js
Object.isExtensible(person);
```

#### `seal` — запрет изменения значений существующих свойств

```js
Object.seal(person);
```

#### `isSealed` — проверка возможности изменения значений существующих свойств

```js
Object.isSealed(person);
```

#### `freeze` — запрет любых изменений объекта

```js
Object.freeze(person);
```

#### `isFrozen` — проверка возможности изменений объекта

```js
Object.isFrozen(person);
```

#### `JSON.stringify` и `toString` — перевод в строку

Универсальный метод `toString` полезен для работы с массивами и числами, но для объектов практически непригоден.

```js
const person = {
  firstName: 'Vladimir',
  lastName: 'Nikishin',
};

/* результатом применения метода будет строка
'[object Object]' */
const meAsObj = person.toString();
```

Вместо `toString` с объектами лучше использовать метод `JSON.stringify` или функции, отделяющие ключи и составляющие строки исключительно из значений.

```js
/* результатом применения метода будет строка
'{firstName: 'Vladimir', lastName: 'Nikishin'}' */
const iAm = JSON.stringify(person);
```
