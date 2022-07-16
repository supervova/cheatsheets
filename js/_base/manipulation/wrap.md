Завернуть элемент `ele` в эемент `wrapper`

```javascript
// Сначала добавляем `wrapper` перед `ele` — в общего предка
ele.parentNode.insertBefore(wrapper, ele);

// Затем делаем `ele` потомком `wrapper`'а
wrapper.appendChild(ele);
```
