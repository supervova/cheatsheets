Завернуть элемент `el` в элемент `wrapper`

```js
/* Сначала добавляем `wrapper` перед `el` —
в общего предка */
el.parentNode.insertBefore(wrapper, el);

// Затем делаем `el` потомком `wrapper`'а
wrapper.appendChild(el);
```

Выделить слово `foo` в элементе `el` жирным.

```js
el.innerHTML =
  el.textContent.replace(/(foo)/g,'<b>$1<\/b>');
```
