#### Изменение или добавление свойства

```js
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

#### Изменение атрибутов свойств

Тот же метод `defineProperty` позволяет изменить атрибуты свойств, выбрав булево значение true или false.

- `writable` —  возможность записи
- `enumerable` — возможность перечисления
- `configurable` — возможность настройки

```js
Object.defineProperty(
  person, 'language', { writable: false }
);
```

#### Установка геттеров и сеттеров

```js
Object.defineProperty(person, 'fullName', {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
});

Object.defineProperty(person, 'age', {
  set(value) { this.age = value; },
});
```

#### Добавление или изменение нескольких свойств

```js
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
