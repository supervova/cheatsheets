# Объединение объектов

```javascript
// Есть два объекта
const person = {
  name: 'Vladimir Nikishin', gender: 'Male'
};
const tools = { computer: 'Mac', editor: 'Atom' };
```

Создадим новый объект, который унаследует свойства предшественников. Используем **оператор расширения** `...`

```javascript
const summary = { ...person, ...tools };
```

В результате объект `summary` наследует содержание (свойства) двух предков.

`{
  "computer": "Mac",
  "editor": "VSCode",
  "gender": "Male",
  "name": "Vladimir Nikishin",
}`

Тем же манером можно сделать копию только одного объекта.

```javascript
const shallowCopy = { ...person };
```

## Комбинированный синтаксис создания объектов

Spread-оператор можно комбинировать с любым другим синтаксисом создания объектов.

```javascript
const defaults = { host: 'localhost' };
const preferences = { user: 'root' };
const port = 8080;

const result = {
  ...defaults,
  ...preferences,
  port,
  connect() {
    // some method
  },
};
```

## `Object.assign`

Тех же результатов можно достичь с помощью метода `Object.assign`, но с оператором расширения операция получается лаконичней и изящней.
