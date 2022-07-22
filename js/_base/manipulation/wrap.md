Завернуть элемент ` в эемент `wrapper`

```js
// Сначала добавляем `wrapper` перед ` — в общего предка
el.parentNode.insertBefore(wrapper, el);

// Затем делаем ` потомком `wrapper`'а
wrapper.appendChild(el);
```
