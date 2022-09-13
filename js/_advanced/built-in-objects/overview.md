В JavaScript есть стандартные встроенные объекты, доступные из любой точки программы: `Date`, `Array`, `Object` и др. Их пользовательские экземпляры наследуют методы и свойства.

Создаем свой объект на основе встроенного объекта `Date`.

```javascript
const now = new Date();
```

Используем методы встроенного в своем экземпляре.

```javascript
const theYear = now.getFullYear();
```

Создаем еще один объект на основе встроенного, передаем ему строку

```javascript
const birthday = new Date('May 1, 1983');
```

⛔️ Встроенные объекты, в принципе, можно расширять, добавляя свойства и методы через свойство `prototype`, но не рекомендуется (eslint no-extend-native).

```javascript
String.prototype.cliche = () => {
  const cliche = [
    'lock and load',
    'touch base',
    'open the kimono',
  ];
  for (let i = 0; i < cliche.length; i++) {
    const index = this.indexOf(cliche[i]);
    if (index >= 0) {
      return true;
    }
  }
  return false;
};
```

#### Фундаментальные объекты

Общие языковые объекты, функции и ошибки.

- Object
- Function
- Boolean
- Symbol
- Error
- EvalError
- InternalError
- RangeError
- ReferenceError
- SyntaxError
- TypeError
- URIError

#### `Number`

Является объектом-обёрткой, позволяющей  работать с числовыми значениями.

Создаётся через конструктор Number(). Приводит значение к числовому типу. Если это невозможно, возвращает `NaN`.

```javascript
console.log(
  `${Number(true)}
  ${Number(false)}
  ${Number(new Date())}
  ${Number('999')}
  ${Number('999 888')}`,
);
```

#### `String`

Используется, чтобы представить и конструировать последовательность символов.

```javascript
console.log(String(Boolean(0))); // Вернет false
console.log(String(Boolean(1))); // True
// Sun Feb 03 2019 11:06:45 GMT+0100 (CET)
console.log(String(new Date()));
console.log(String('12345')); // 12345, как строка
console.log(String(12345)); // 12345, как строка
```

#### Другие

- [Math](/js/advanced-theory.html#topic-built-in-math)
- [Date](/js/advanced-theory.html#topic-built-in-date)
- RegExp
- Array
- Map
- JSON
- Promise
