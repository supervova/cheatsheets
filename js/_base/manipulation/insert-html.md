#### Вставить снаружи, до элемента

```js
const html = '<h1>Huzzah!</h1>'
el.insertAdjacentHTML('beforebegin', html);
```

#### После элемента

```js
el.insertAdjacentHTML('afterend', html);
```

#### Вставить внутри — перед закрывающим или после открывающего тега

```js
const content = document.querySelector(
  '.initial'
).innerHTML;
const container = document.querySelector('.target');
container.insertAdjacentHTML('beforeend', content);
```

Чтобы вставить сразу после открывающего тега используется параметр `afterbegin`.
