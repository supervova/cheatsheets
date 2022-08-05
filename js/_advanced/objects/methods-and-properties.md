# Современные методы: `Object.defineProperty` и остальные

Наиболее важный из рассматриваемых здесь методов — `defineProperty`. Остальные перечисляются просто к сведению.

## Изменение или добавление свойства

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  language: 'EN',
};

Object.defineProperty(
  person, 'language', { value: 'NO' }
);

Object.defineProperty(
  person, 'year', { value: 2021 }
);
```

## Изменение атрибутов свойств

Тот же метод `defineProperty` позволяет изменить атрибуты свойств, выбрав булево значение true или false.

- `writable` —  возможность записи
- `enumerable` — возможность перечисления
- `configurable` — возможность настройки

```javascript
Object.defineProperty(
  person, 'language', { writable: false }
);
```

## Установка геттеров и сеттеров

```javascript
Object.defineProperty(person, 'fullName', {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
});

Object.defineProperty(person, 'age', {
  set(value) { this.age = value; },
});
```

## Добавление или изменение нескольких свойств

```javascript
Object.defineProperties(person, {
  lastName: {
    value: 'Nikishin',
    writable: true,
  },
  language: {
    value: 'RU',
    writable: false,
  },
});
```

## Другие методы

### `getOwnPropertyNames` — получение списка свойств объекта

```javascript
/* Результатом примера будет массив
[ 'firstName', 'lastName', 'language', 'year',
'fullName', 'age' ] */
console.log(Object.getOwnPropertyNames(person));
```

### `keys` — получение списка только перечисляемых свойств объекта

```javascript
/* Результатом примера будет массив
[ 'firstName',  'lastName', 'year', 'fullName', 'age' ] */
Object.defineProperty(
  person, 'language', { enumerable: false }
);

Object.keys(person);
```

### `getOwnPropertyDescriptor` — получение значения и атрибутов собственного свойства

```javascript

/* Результатом примера будет
{ value: 'Vladimir', writable: true,
enumerable: true, configurable: true } */
console.log(
  Object.getOwnPropertyDescriptor(
    person, 'firstName'
  )
);
```

### `getPrototypeOf` — доступ к прототипу

Возвращает прототип, то есть набор свойств и методов указанного объекта.

```javascript
console.log(Object.getPrototypeOf(person));
```

### `preventExtensions` — запрет добавления новых свойств

```javascript
Object.preventExtensions(person);
```

### `isExtensible` — проверка возможности добавления новых свойств

Возвращает true, если можно добавлять новые свойства.

```javascript
Object.isExtensible(person);
```

### `seal` — запрет изменения значений существующих свойств

```javascript
Object.seal(person);
```

### `isSealed` — проверка возможности изменения значений существующих свойств

```javascript
Object.isSealed(person);
```

### `freeze` — запрет любых изменений объекта

```javascript
Object.freeze(person);
```

### `isFrozen` — проверка возможности изменений объекта

```javascript
Object.isFrozen(person);
```

### `toString` — перевод в строку

Универсальный метод, полезный для работы с массивами и числами, но для объектов практически непригодный.

```javascript
const person = {
  firstName: 'Vladimir',
  lastName: 'Nikishin',
};

/* результатом применения метода будет строка
'[object Object]' */
const meAsObj = person.toString();
```

Вместо `toString` с объектами лучше использовать метод  `JSON.stringify` или функции, отделяющие ключи и составляющие строки исключительно из значений.

```javascript
/* результатом применения метода будет строка
'{firstName: 'Vladimir', lastName: 'Nikishin'}' */
const iAm = JSON.stringify(person);
```
