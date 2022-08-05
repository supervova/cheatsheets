#  Передача объектов в функции — в качестве аргументов

```javascript
// Объявляем функцию
const ageDifference = (person1, person2) => {
  person1.age - person2.age;
}

/**
 * Создаем класс
 */
class Person {
  /**
   * @param {string} name
   * @param {number} age
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Создаем объекты
const alice = new Person('Alice', 30);
const billy = new Person('Billy', 25);

/* Объявляем переменную diff и передаем ей значение 
функции ageDifference */
const diff = ageDifference(alice, billy);
```
