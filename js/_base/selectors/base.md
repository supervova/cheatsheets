#### По ID

Старый метод `getElementById` наиболее быстрый. Поэтому, желательно в разметке добавлять важным интерактивным элементам ID и использовать этот метод.

```js
let el = document.getElementById('my-id');
```

⚠️ При попытке получить элемент из DOM по отсутствующему идентификатору, `getElementById` возвращает `null`. Поэтому стоит выполнить проверку на `null` перед тем, как обращаться к свойствам элемента.

```js
if (el) {
  el.innerHTML = 'Boom!';
}
```

#### По CSS-селектору

Первый элемент на странице.

```js
el = document.querySelector('.my > div .class');
```

Поиск одного элемента внутри другого.

```js
el = document.querySelector('.my > div .class');

const child = el.querySelector('.my-pesdyuk');
```

#### По CSS-селектору: все элементы

Возвращает массив всех элементов страницы, соответствующих селектору.

```js
el = document.querySelectorAll('.my > div .class');
```

После получения массива с каждым его элементом можно работать в цикле — см. раздел «[Перебор массива элементов](#topic-loop-nodelist)».

☝️🧐 К элементам NodeList можно обратиться, указав конкретный индекс. В примере первому параграфу на странице будет присвоен красный фон.

```js
cont text = document.querySelectorAll('p');
text[0].style.backgroundColor = 'red';
```

Чтобы применять к набору элементов методы массива — `map` или `filter` — надо создать из набора элементов массив.

```js
const cells =
  [].slice.call(table.querySelectorAll('th, td'));

// Или с помощью spread-оператора
const cells = table.querySelectorAll('th, td');
const texts = [...cells].map(n => n.textContent)
```

#### Устаревшие методы: по HTML-тегу или по CSS-классу

Возвращают псевдомассивы всех указанных узлов или элементов страницы определенного класса.

```js
document.getElementsByTagName('button');
document.getElementsByClassName('my-class');
```
