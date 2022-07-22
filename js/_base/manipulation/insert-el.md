#### Вставить до элемента `target`

```js
target.parentNode.insertBefore(el, target);

// Или
target.insertAdjacentElement('beforebegin', el);
```

#### Вставить после элемента `target`

```js
target.parentNode.insertBefore(el, target.nextSibling);

// Или
target.insertAdjacentElement('afterend', el);
```
