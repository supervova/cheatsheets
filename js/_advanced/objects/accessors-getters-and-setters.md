Есть два типа свойств объекта.

Первый тип это стандартые свойства-данные (data properties) — пары «ключ: значение».

Второй тип свойств — аксессоры (accessor properties). По сути это функции, которые используются для присвоения и получения значения, но во внешнем коде вызываются через точечную нотацию — как обычные свойства объекта.

Конечно, чтение и изменение свойств объектов возможно и без акссесоров. Но они позволяют программно обрабатывать входные данные, что даёт, минимум, два преимущества перед свойствами-данными.

- Аксессоры позволяют избегать дублирования данных. Например, когда в объекте или классе уже есть свойства `firstName`и `lastName`, а нужно еще и `fullName`.
- Позволяют проверять входные данные и контролировать вывод данных — например, в верхнем регистре.

Впрочем, там где логика для доступа и изменения свойств не нужна, конечно, не нужно усложнять программу и обходиться свойствами-данными.

#### Синтаксис

Для создания свойств-аксессоров в современном JS предусмотрены ключевые слова `get` и `set`.

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  language: 'en',

  // Сеттер
  set name(value) {
    const split = value.split(' ');
    [this.firstName, this.lastName] = split;
  },

  // Геттер
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  /* В принципе, геттер можно заменить вот таким
  методом. Но так никто не делает — дурной тон */
  fullNameOnceAgain: () =>
    `${this.firstName} ${this.lastName}`,
};
```

Геттер срабатывает, когда `obj.propName` читается, сеттер – когда значение присваивается.

#### Сеттер

Обычно создает новое свойство на основе полученного аргумента (`set` должен иметь ровно один параметр).

В примере сеттер принимает строку, разделяет ее по пробелу и сохраняет первый фрагмент `firstName`, а второй — в `lastName`.

Сеттеры используются чаще всего в сочетании с геттерами.

#### Геттер

В примере геттер возвращает псевдо-свойство `fullName`.

⚠️ Кстати, геттер не может иметь параметров.


**Изменение свойств** `firstName` и `lastName` с помощью сеттера `name`.

```js
person.name = 'Владимир Никишин';
console.log(user.firstName); // Владимир
console.log(user.lastName); // Никишин
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
