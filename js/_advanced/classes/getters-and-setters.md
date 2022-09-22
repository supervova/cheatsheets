Геттеры и сеттеры класса выполняют те же роли, что и [в объектах вообще](/js/advanced-theory.html#topic-objects-getters-setters).

```javascript
class Employee {
  constructor(name) {
    this.name = name;
  }

  doWork() {
    return `${this.name} is working`;
  }

  get name() {
    return this.name.toUpperCase();
  }

  set name(newName) {
    if (newName) {
      this.name = newName;
    }
  }
}

const employee1 = new Employee('John Doe');
```

Для доступа к свойству `name` используется «геттер».

```javascript
if (employee1.name) { /* ... */ }
```

Для смены значения свойства экземпляра используется «сеттер».

```javascript
employee1.name = 'Jane Doe';
```
