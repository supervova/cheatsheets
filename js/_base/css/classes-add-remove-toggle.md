#### Добавить

```js
el.classList.add('class-name');

// Сразу несколько
el.classList.add('another', 'class', 'name');
```

#### Удалить

```js
el.classList.remove('class-name');

// Сразу несколько
el.classList.remove('another', 'class', 'name');
```

#### Переключить: включить, если выключен и наоборот

```js
el.classList.toggle('class-name');
```

#### Заменить

```js
el.classList.replace('is-focused', 'is-blurred');
```

#### `className`

У свойства `classList` есть примитивная альтернатива - свойство `className`, которое содержит значение атрибута class элемента.

```js
const el = document.getElementById('my-div');

/* Получение значения. Если классов несколько, будет
возвращена строка со списком */
let value = el.className;

// Установка нового значения
if (el.className == 'my-style') {
  el.className = 'new-style';
} else {
  el.className = 'my-style';
}

// Добавление классов
el.className += ' new-class-1 new-class-2';

// Изменение свойства в классе
if (el.className == 'my-style') {
  el.style.fontSize = '30px';
}
```

Однако `classList` всё-таки предпочтительней, так как с его помощью можно добавить или удалить только один класс из нескольких, не затрагивая другие. А `className` заменяет всё сразу.
