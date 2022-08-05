# Добавление или удаление свойств и методов

```javascript
class Dog {
  constructor(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
  }

  goodBoyReaction() {
    console.log(`${this.name} wags its tail`);
  }
}

// Экземпляр класса Dog
const fido = new Dog('Fido', 'Mixed', 38);
```

Объекту можно добавить свойство или метод, даже если они не созданы в конструкторе. Можно удалить унаследованное.

```javascript
fido.bark = () => {
  console.log('Woof! Woof!');
};

fido.owner = 'Bob';
```


Свойства могут быть удалены оператором delete. Методы удалить невозможно — экземпляр класса наследует все методы.

```javascript
delete fido.weight;
```

