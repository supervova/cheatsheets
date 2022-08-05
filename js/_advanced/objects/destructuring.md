# Деструктурирующее присваивание или просто деструктуризация

См. также [деструктуризацию в параметрах](../03-functions/04-parameters-destructuring-assignment.md)

Деструктуризация – это особый синтаксис присваивания, при котором можно присвоить нескольким переменным свойства объекта или элементы массива.

Деструктуризация

- упрощает получение свойств из объектов;
- поддерживает вложенность и значения по умолчанию;
- поддерживает остаточные свойства (rest-элемент);
- [работает с параметрами функций](../03-functions/04-parameters-destructuring-assignment.md).

## Базовый синтаксис для объектов

```javascript
// создаем переменные из свойств объекта gulp
const { src, dest } = gulp;

//... или
const { var1, var2 } = { var1: 'one', var2: 2 };
```

Объект справа – уже существующий, который мы хотим разбить на переменные. А слева – список переменных, в которые нужно соответствующие свойства записать. Таким образом мы явным образом указываем, какие свойства в какие переменные должны быть сохранены.

### Пример

```javascript
let options = {
  title: 'Меню',
  width: 100,
  height: 200,
};

const { title, width, height } = options;

alert(title); // Меню
alert(width); // 100
alert(height); // 200
```

Свойства `options.title`, `options.width` и `options.height` были присвоены соответствующим переменным.

Если хочется присвоить свойство объекта в переменную с другим именем, например, чтобы свойство `options.width` пошло в переменную `w`, то можно указать соответствие через двоеточие, вот так:

```javascript
options = {
  title: 'Меню',
  width: 100,
  height: 200,
};

const { width: w, height: h, title } = options;

alert(title); // Меню
alert(w); // 100
alert(h); // 200
```

В примере выше свойство `width` отправилось в переменную `w`, свойство `height` – в переменную `h`, а `title` – в переменную с тем же названием.

## Значения по умолчанию

Если каких-то свойств в объекте нет, можно указать значение по умолчанию через знак равенства `=`.

```javascript
options = {
  title: 'Меню',
};

const { width = 100, height = 200, title } = options;

alert(title); // Меню
alert(width); // 100
alert(height); // 200
```

Можно и сочетать одновременно двоеточие и равенство, чтобы одновременно изменить наследуемое имя и значение:

```javascript
options = {
  width: 100,
  title: 'Меню',
};

const { width: w = 200, height: h = 200, title } = options;

alert(title); // Меню
alert(w); // 100
alert(h); // 200
```

Значениями по умолчанию могут быть любые выражения или даже функции. Они выполнятся, если значения отсутствуют.

В коде ниже prompt запросит `width`, но не `title`:

```javascript
options = {
  title: 'Menu',
};

const { width = prompt('width?'), title = prompt('title?') } = options;

alert(title); // Menu
alert(width); // (результат prompt)
```

## Необязательно сохранять все свойства в переменные

Если у нас есть большой объект с множеством свойств, можно взять только то, что нужно:

```javascript
options = {
  title: 'Menu',
  width: 100,
  height: 200,
};

// взять только title, игнорировать остальное
const { title } = options;

alert(title); // Menu

// взять только src и dest, игнорировать остальное
const { src, dest } = require('gulp');
```

## «Остаток» объекта (остаточные свойства, rest-элемент)

В случаях, когда свойств больше, чем переменных, «остаток» можно сохранить с помощью spread-оператора.

```javascript
options = {
  title: 'Menu',
  height: 200,
  width: 100,
};

// title = свойство с именем title
// rest = объект с остальными свойствами
const { title, ...rest } = options;

// сейчас title="Menu",
// rest={height: 200, width: 100}
alert(rest.height); // 200
alert(rest.width); // 100
```

## Вложенная деструктуризация

Деструктурировать можно и вложенные объекты.

```javascript
const person = {
  name: {
    first: 'Vladimir',
    last: 'Nikishin',
  },
  age: 49,
};

const { name: { first, last } } = person;
```

Умные параметры функций — [см. в справочнике](https://learn.javascript.ru/destructuring-assignment).
