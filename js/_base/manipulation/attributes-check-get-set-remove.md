#### Проверить: есть ли определенный атрибут у элемента

```js
if (!myImg.hasAttribute('alt')) {
  alert('Добавь `alt`, дятел');
}
```

#### Получить значение

```js
const title = link.getAttribute('title');
```

#### Удалить атрибут `title`

```js
el.removeAttribute('title');
```

#### Задать или поменять значения атрибутов

Это можно сделать двумя способами. С помощью метода `setAttribute` или напрямую поменяв свойство DOM-узла. Разница между свойствами и атрибутами незначительная, [но есть](https://bit.ly/3I6LtfS){:target="_blank"}.

Установка свойств короче — это плюс. Кроме того, свойства однозначно предпочтительней [для операций со строковыми стилями](https://bit.ly/3I4Y9UD){:target="_blank"}.

Вместе с тем, нужно учитывать, что не браузер создает DOM-свойства не для всех атрибутов. Например, свойства `role` нет и его нужно задавать через `setAttribute`.

```js
// Установить свойство
image.width = '100px';
image.height = '120px';

// Установить атрибут
image.setAttribute('width', '100px');
image.setAttribute('height', '120px');

/* Любые значения во втором параметре записываются,
как строки */
button.setAttribute('aria-expanded', 'false');
```

#### Переключение логических значений атрибута

```js
button.getAttribute('aria-expanded') === 'true'
  ? button.setAttribute('aria-expanded', 'false')
  : button.setAttribute('aria-expanded', 'true');
```

#### Переключение логических атрибутов, типа `disabled`

```js
input.toggleAttribute('readonly');
```
