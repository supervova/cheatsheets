1. Начнём с создания состояния — объекта в глобальной области видимости (на практике, область видимости ограничивается). Единственным свойством объекта сделаем счетчик, с нулевым исходным значением.

```js
const state = {
  count: 0,
};
```

2. Создадим компонент — простую стрелочную функцию возвращающую шаблонный литерал.

```js
const counter = (count) => {
  return  `<div class="counter">${count}</div>`;
}
```

3. Создадим функцию рендеринга HTML, которая будет обновлять интерфейс после каждого обновления счетчика пользователем.

```js
function renderCount() {
  document.getElementById('app')
    /* Передаём в контейнер разметку
    из функцию компонента */
    .innerHTML = counter(state.count);
}
```

4. Сделаем метод обновления счётчика. Встроенного метода SetState в JavaScript нет, поэтому будем обновлять напрямую (в React это категорически не рекомендуется):

```js
function incCountUp() {
  const newCount = state.count + 1;
  state.count = newCount;
}
```

5. Установим слушатель на кнопку. Всякий раз, когда пользователь будет на неё кликать, будет обновляться значение `state.count`. Затем мы будем вызывать метод рендеринга для обновления HTML.

```js
const btn = document.querySelector(
  '[data-action="count-up"]'
);

btn.click(() => {
  incCountUp();
  renderCount();
});
```

Полный код, с небольшими улучшениями — добавлением CSS-классов в зависимости от значения счётчика.

```js
const display = document.getElementById(
  'display'
);

const btn = document.querySelector(
  '[data-action="count-up"]'
);

const state = {
  count: 0,
};

// Components

const counter = (count) => {
  let className = 'text-error';

  if (count > 10) {
    className = 'text-success';
  }

  return `
    <p class="counter">
      Count:
      <span class="${className}">
        ${count}
      </span>
    </p>
  `;
};

// Render Methods

function renderCount() {
  display.innerHTML = counter(state.count);
}

// Update methods

function incCountUp() {
  const newCount = state.count + 1;
  state.count = newCount;

  renderCount();
}

renderCount();

btn.click(() => {
  incCountUp();
  renderCount();
});
```

[Подробнее о stateful-компонентах](/js/advanced-theory.html#topic-classes-stateful-components)
