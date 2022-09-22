Оператор позволяет установить, принадлежит ли объект к определённому классу.

```javascript
// Класс
class Rabbit extends Animal { /* super etc */ }

// создаём объект
const rabbit = new Rabbit();

// проверяем этот объект создан Rabbit?
alert(rabbit instanceof Rabbit); // true, верно
```

**Ещё примеры**.

```javascript
// Является ли объект cadi экземпляром класса Car?
if (cadi instanceof Car) {
  console.log('Congrats, it\'s a Car!');
}

// Проверка нескольких объектов
if ((fido instanceof Dog) && (spot instanceof Dog)) {
  // do smth
}
```
