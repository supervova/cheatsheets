```javascript
const objectName = new ClassName(arg1, arg2, etc);
```

Пример.

```javascript
/**
 * JSDoc
 */
class Person {
  /**
   * @param {string} firstName
   * @param {string} lastName
   * @param {number} age
   */
  constructor(firstName, lastName, age) {
    this.name = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

// Создаем новые объекты класса Person
const john = new Person('John', 'Smith', 30);
const susan = new Person('Susan', 'Jordan', 25);
```

#### Создание массива объектов с использованием класса

```javascript
const family = [
  new Person('Alice', '', 40),
  new Person('Bob', '', 42),
  new Person('Michelle', '', 8),
  new Person('Timmy', '', 6),
];
```

☝️🧐 При использовании `new` с классом создается новый̆ пустой̆ объект. Свойства объекта инициализируются только передачей аргументов.
