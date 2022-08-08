Контекст выполнения (execution context) или просто контекст — это абстрактная концепция, описывающая обстоятельства вызова функции или метода и, главное, так называемое окружение: свои и наследуемые переменные, методы, свойства, окружение.

#### `this`

Доступ к контексту открывает ключевое слово `this`.

- **В методе** объекта `this` содержит ссылку на текущий объект.
- **В обработчиках событий** `this` содержит ссылку на элемент-источник события. Если это, например, клик на кнопке — то на кнопке.
- **В функции** в строгом режиме значение `this` не определено — `undefined`.
- **В функции** в НЕстрогом режиме — на глобальный объект.
- За пределами фигурных скобок функций, циклов и условий — на глобальный объект.

☝️🧐 Стрелочные функции не создают собственного значения `this` и берут его из внешней функции.

☝️🧐 `this` это ключевое слово, а не переменная. Изменить его значение (ссылку) невозможно. Оно зависит только от контекста, в котором используется, и режима — строгого или нестрогого.

☝️🧐 [Методы `call` и `apply`](/js/advanced-theory.html#topic-functions-binding) позволяют передавать функциям ЛЮБОЙ контекст в ссылке `this`.

#### Контекст объекта

При обращении к свойству/методу объекта внутри объекта для ссылки на этот объект используется слово `this`.

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  id: 5566,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const fiat = {
  make: 'Fiat',
  model: '500',
  year: 1957,
  color: 'Medium Blue',
  passengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,
  start() {
    this.started = true;
  },
  stop() {
    this.started = false;
  },
  drive() {
    if (this.started) {
      alert('Zoom zoom!');
    } else {
      alert('You need to start the engine first.');
    }
  },
};
```

#### Контекст обработчиков событий

В обработчиках событий `this` ссылается на элемент-источник события. Если это, например, клик на кнопке — то на кнопку. Например

```html
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>
```

#### Глобальный контекст

В глобальном контексте `this` ссылается на глобальный объект: в браузере — это `window`.

```javascript
this.alert('global alert');
this.console.log('global console');

const currentDocument = this.document;
```

#### Контекст функции

Если скрипт запускается в строгом режиме (директива `'use strict'`), то значение `this` — `undefined`.

```javascript
function myFuncStrict() {
  return this;
}
```

В НЕстрогом режиме `this` функции содержал бы ссылку на глобальный объект window.

```javascript
function myFuncNoStrict() {
  return this;
}
```

☝️🧐 Рекомендации Airbnb: не сохранять ссылку на `this`, чтобы передать во вложенную функцию контекст. Использовать стрелочные функции, которые наследуют внешний контекст.

```javascript
/**
 * ⛔️ плохо
 * @return {*}
 */
function foo() {
  const self = this;
  return function () {
    console.log(self);
  };
}

/**
 * 👍  хорошо
 * @return {*}
 */
function bar() {
  return () => {
    console.log(this);
  };
}
```
