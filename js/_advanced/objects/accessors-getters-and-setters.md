Для контролируемого доступа к свойствам объекта используют специальные функции, так называемые «геттеры» (оператор `get`) и «сеттеры» (`set`).

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  language: 'en',

  // Сеттер
  set name(value) {
    const split = value.split(' ');
    this.firstName = split[0];
    this.lastName = split[1];
  },

  // Геттер
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  /* В принципе, геттер можно заменить вот таким
  методом. Но так никто не делает — дурной тон */
  fullNameOnceAgain: () =>
    `${this.firstName} ${this.lastName}`
};
```

#### Сеттер

Оператор `set` содержит функцию, которая вызывается при обращении к определенному свойству объекта. Обычно эта функция создает новое свойство на основе полученного аргумента (`set` должен иметь ровно один параметр).

В примере сеттер принимает строку, разделяет ее по пробелу и сохраняет первый фрагмент `firstName`, а второй — в `lastName`.

Сеттеры используются чаще всего в сочетании с геттерами.

#### Геттер

Оператор `get` также содержит функцию, которая вызывается при обращении к определенному свойству объекта. С помощью «геттера» можно проверять текущее значение свойства, к которому он привязан или создавать это свойство.

В примере геттер возвращает псевдо-свойство fullName.

⚠️ Геттер не может иметь параметров.

**Изменение свойств** `firstName` и `lastName` с помощью сеттера `name`

```js
person.name = 'Владимир Никишин';
```

**Доступ** к полному имени с помощью геттера.

```js
console.fullName(person.fullName);
```

**Доступ** к полному имени с помощью метода fullNameOnceAgain — со скобками

```js
console.log(person.fullNameOnceAgain());
```

#### Добавление геттеров и сеттеров в существующий объект — `Object.defineProperty()`

```js
const myObj = { counter: 0 };

Object.defineProperty(myObj, 'reset', {
  get() { this.counter = 0; },
});

Object.defineProperty(myObj, 'increment', {
  get() { this.counter += 1; },
});

Object.defineProperty(myObj, 'decrement', {
  get() { this.counter -= 1; },
});

Object.defineProperty(myObj, 'add', {
  set(value) { this.counter += value; },
});

Object.defineProperty(myObj, 'subtract', {
  set(value) { this.counter -= value; },
});
```

Вызовы геттеров и сеттеров объекта изменяют показания счетчика

```js
myObj.reset;
myObj.add = 5;
myObj.subtract = 1;
myObj.increment;
myObj.decrement;

console.log(myObj.counter);
```
