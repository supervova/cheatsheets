#### Элемент

```javascript
const ele = document.createElement('div');

/* Необязательно, но обычно добавляются атрибуты
и содержание. А затем элемент вставляется в документ */
ele.width = '100px';
ele.ariaLabel = 'Huzzah!';
/* Альтернативный способ установки и изменения
значений атрибутов — см. раздел ниже */
ele.setAttribute('data-role', 'the-dummy');
ele.innerHTML = 'Huzzah!';
document.body.appendChild(ele);
```

#### Текстовой узел

```javascript
const ele = document.createTextNode('Hello World!');
```
