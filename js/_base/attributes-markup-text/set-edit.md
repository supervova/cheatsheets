Для большинства случаев подойдет свойство `innerHTML`.

```js
el.innerHTML = '<b>Hello,</b> world!';
```

Хотя чистый текст, без разметки можно вставить и с помощью свойств `textContent` или `innerText`.

```js
el.textContent = 'Hello, world!';
```
