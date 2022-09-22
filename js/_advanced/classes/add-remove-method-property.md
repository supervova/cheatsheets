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
```

Чтобы добавить метод классу используется свойство `prototype`, прототип объекта. Это набор всех наследуемых свойств и методов класса. В примере с помощью свойства `prototype` классу `Dog` был добавлен новый метод `bark`.

```javascript
Dog.prototype.bark = () => {
  console.log('Woof! Woof!');
};
```

☝️🧐 **Если класс наследует** свойства и методы предка из библиотеки (например, jQuery), тогда prototype использовать **необходимо** — чтобы при каждом обновлении библиотеки не менять класс.
