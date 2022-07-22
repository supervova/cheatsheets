#### Элемент

```js
const el = document.createElement('div');

/* Необязательно, но обычно добавляются атрибуты
и содержание. А затем элемент вставляется в документ */
el.width = '100px';
el.ariaLabel = 'Huzzah!';
/* Альтернативный способ установки и изменения
значений атрибутов — см. раздел ниже */
el.setAttribute('data-role', 'the-dummy');
el.innerHTML = 'Huzzah!';
document.body.appendChild(el);
```

#### Текстовой узел

```js
const el = document.createTextNode('Hello World!');
```
