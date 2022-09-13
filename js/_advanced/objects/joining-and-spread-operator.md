```js
// Есть два объекта
const person = {
  name: 'Vladimir Nikishin',
  gender: 'Male'
};

const tools = { computer: 'Mac', editor: 'VS Code' };
```

Создадим новый объект, который унаследует свойства предшественников. Используем **оператор расширения** `...`

```js
const summary = { ...person, ...tools };
```

В результате объект `summary` наследует содержание (свойства) двух предков.

```json
{
  "computer": "Mac",
  "editor": "VSCode",
  "gender": "Male",
  "name": "Vladimir Nikishin",
}
```

Тем же манером можно сделать копию только одного объекта.

```js
const shallowCopy = { ...person };
```

#### Комбинированный синтаксис создания объектов

Spread-оператор можно комбинировать с любым другим синтаксисом создания объектов.

```js
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

#### `Object.assign`

Тех же результатов можно достичь с помощью метода `[Object.assign](/js/advanced-theory.html#topic-objects-assign-copy-properties)`, но с оператором расширения операция получается лаконичней и изящней.
