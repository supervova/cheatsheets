Обновлять интерфейс страницы можно, выбирая элемент через `querySelector` и пр., добавляя `innerHTML`, меняя классы через `classList` или строковые стили в свойстве `style`.

Современные фреймворки — React, Vue etc — предлагают управление интерфейсом через состояния. Без выбора элементов по CSS-селекторам и дальнейших манипуляций. Обновляешь состояние и выводишь на экран свежую копию интерфейса на основе новых данных.

**Состояние** — это всего лишь данные (обычно — простой объект) в определенный момент времени. Значения состояний (`states`) устанавливаются внутри компонента — по аналогии с переменными, которые объявлены внутри функции.

Для того, чтобы сохранять состояние UI элементов (один выбран, другой помечен, как важный и т.д.) используются stateful-компоненты (другие названия: компоненты с состояниями, классовые компоненты). Они известны, прежде всего, по фреймворкам, но их можно написать и на «ванильном» JS.

Простой пример с состоянием, сохраненном в глобальной переменной.

```js
// Вот это состояние
const data = {
  greeting: 'Hello',
  name: 'there',
};

// Простой компонент
const greeting = () => {
  return `<p>${data.greeting}, ${data.name}!</p>`;
};

// Выводим на экран
const app = document.querySelector('#app');
app.innerHTML = greeting();
```

Улучшенный вариант. Состояние (данные) стало свойством компонента и доступно только изнутри.

```js
// Компонент
const greeting = () => {
  return `
    <p>${greeting.data.greeting},
    ${greeting.data.name}!</p>
  `;
};

// Состояние
greeting.data = {
  greeting: 'Hello',
  name: 'there',
};

// Вывод на экран
const app = document.querySelector('#app');
app.innerHTML = greeting();
```

См. также примеры:

- [Счётчик](/js/how-to.html#topic-stateful-counter)

#### Планирование компонента — вопросы, которые надо себе задавать перед тем, как начать писать код

- Как мы собираемся в странице выбирать один компонент из множества и не загрязнить глобальное пространство имен?
- Как мы собираемся рендерить HTML для компонента?
- Как мы будем сохранять и контролировать внутреннее состояние компонента?
- Как мы будем удалять компонент и обработчики событий, когда они перестанут быть нужными?

#### Прокси

Для отслеживания изменений во фреймворках используются [прокси](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Proxy){:target="_blank"} — объект, который «оборачивается» вокруг другого объекта и может перехватывать (и, при желании, самостоятельно обрабатывать) разные действия с ним — в частности, чтение/запись свойств.

Эту же технологию использует npm-пакет on-change, который можно использовать в ванильных stateful-компонентах.

```js
import onChange from 'on-change';

class App {
  constructor() {
    // Состояние
    const state = {
      currentTodoItemID: null,
    };

    // Слушатель с помощью пакета 'on-change'
    this.state = onChange(state, this.update);
  }

  /* Изменение компонента в ответ на изменения
  состояния */
  static update(path, current, previous) {
    console.log(
      `${path} changed
      from ${previous} to ${current}`
    );
  }
}

const app = new App();
app.state.currentTodoItemID = 1;

```

Можно обойтись и без дополнительных npm-пакетов.

```js
class Component {
  constructor() {
    // Состояние
    const state = {};
  }

  setState(state) {
    this.state = new Proxy(state, this.stateHandler);
  }

  stateHandler(target, prop, value) {
    // updates the object state
    target[prop] = value;
    // triggers the rendering
    this.render();
  }
}
```

[Ещё о прокси](https://learn.javascript.ru/proxy)(https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Proxy){:target="_blank"}
