# Поля классов. Статические свойства и методы

Мы можем присвоить метод или свойство классу, не добавляя его в `prototype`. Такие методы называются *статическими*.

Синтаксис:

```javascript
class MyClass {
  static property = ...;

  static method() {
    ...
  }
}
```

Статические свойства и методы наследуются.

## Статические методы

В классе такие методы обозначаются ключевым словом `static`, например:

```javascript
class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); // true
```

Значением `this` при вызове `User.staticMethod()` является конструктор класса `User` («объект до точки»).

Обычно статические методы используются для реализации функций, принадлежащих классу, но не его экземплярам.

Например, есть объекты статей `Article`, и нужна функция для их сравнения. Естественное решение – сделать для этого метод `Article.compare`:

```javascript
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// использование
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

alert( articles[0].title ); // CSS
```

Здесь метод `Article.compare` стоит «над» статьями, как способ их сравнения. Это метод не отдельной статьи, а всего класса.

Другим примером может быть так называемый «фабричный» метод. Представим, что нам нужно создавать статьи различными способами:

1. Создание через заданные параметры (`title`, `date` и т. д.).
2. Создание пустой статьи с сегодняшней датой.
3. …или как-то ещё.

Первый способ может быть реализован через конструктор. А для второго можно использовать статический метод класса.

Такой как `Article.createTodays()` в следующем примере:

```javascript
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    // помним, что this = Article
    return new this(
      "Сегодняшний дайджест", new Date()
    );
  }
}

let article = Article.createTodays();

alert( article.title ); // Сегодняшний дайджест
```

Теперь каждый раз, когда нам нужно создать сегодняшний дайджест, нужно вызывать `Article.createTodays()`. Ещё раз, это не метод одной статьи, а метод всего класса.

Статические методы также используются в классах, относящихся к базам данных, для поиска/сохранения/удаления вхождений в базу данных, например:

```javascript
// статический метод для удаления статьи:
Article.remove({id: 12345});
```

## Статические свойства

Эта возможность была добавлена в язык недавно. Примеры работают в последнем Chrome или с Babel.

Статические свойства также возможны, они выглядят как свойства класса, но с `static` в начале:

```javascript
class Article {
  static publisher = "Илья Кантор";
}

alert(Article.publisher); // Илья Кантор
```

Это то же самое, что и прямое присваивание `Article`:

```javascript
Article.publisher = "Илья Кантор";
```

## Наследование статических свойств и методов

Статические свойства и методы наследуются.

Например, метод `Animal.compare` в коде ниже наследуется и доступен как `Rabbit.compare`:

```javascript
class Animal {

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    alert(`
      ${this.name} бежит со скоростью
      ${this.speed}.
    `);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }

}

// Наследует от Animal
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} прячется!`);
  }
}

let rabbits = [
  new Rabbit("Белый кролик", 10),
  new Rabbit("Чёрный кролик", 5)
];

rabbits.sort(Rabbit.compare);

// Чёрный кролик бежит со скоростью 5.
rabbits[0].run();
```

Мы можем вызвать `Rabbit.compare`, при этом будет вызван унаследованный `Animal.compare`.

Как это работает? Снова с использованием прототипов. Как вы уже могли предположить, `extends` даёт `Rabbit` ссылку `[[Prototype]]` на `Animal`.

Так что `Rabbit extends Animal` создаёт две ссылки на прототип:

1. Функция `Rabbit` наследует от функции `Animal`.
2. `Rabbit.prototype` наследует от `Animal.prototype`.

Таким образом, наследование работает как для обычных, так и для статических методов.

## Итог

Статические методы используются для функциональности, принадлежат классу «в целом», а не относятся к отдельным экземплярам класса.

В объявлении класса они помечаются ключевым словом `static`.

Статические свойства используются в тех случаях, когда разработчик хочет сохранить данные на уровне класса, а не какого-то одного объекта.

Технически, статическое объявление – это то же самое, что и присвоение классу:

```javascript
MyClass.property = ...
MyClass.method = ...
```
