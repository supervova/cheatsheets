#### По ID

Старый метод `getElementById` наиболее быстрый. Поэтому, желательно в разметке добавлять важным интерактивным элементам ID и использовать этот метод.

```javascript
let el = document.getElementById('my-id');
```

⚠️ При попытке получить элемент из DOM по отсутствующему идентификатору, `getElementById` возвращает `null`. Поэтому стоит выполнить проверку на `null` перед тем, как обращаться к свойствам элемента.

```javascript
if (el) {
  el.innerHTML = 'Boom!';
}
```

#### По CSS-селектору

Первый элемент на странице.

```javascript
el = document.querySelector('.my > div .class');
```

Поиск одного элемента внутри другого.

```javascript
el = document.querySelector('.my > div .class');

const child = el.querySelector('.my-pesdyuk');
```

#### По CSS-селектору: все элементы

Возвращает массив всех элементов страницы, соответствующих селектору.

```javascript
el = document.querySelectorAll('.my > div .class');
```

После получения массива с каждым его элементом можно работать в цикле — см. раздел «[Перебор массива элементов](#topic-loop-nodelist)».

☝️🧐 К элементам NodeList можно обратиться, указав конкретный индекс. В примере первому параграфу на странице будет присвоен красный фон.

```javascript
cont text = document.querySelectorAll('p');
text[0].style.backgroundColor = 'red';
```

Чтобы применять к набору элементов методы массива — `map` или `filter` — его надо конвертировать в массив.

```javascript
const cells =
  [].slice.call(table.querySelectorAll('th, td'));

// Или с помощью spread-оператора
const cells = table.querySelectorAll('th, td');
const texts = [...cells].map(n => n.textContent)
```

#### Устаревшие методы: по HTML-тегу или по CSS-классу

Возвращают псевдомассивы всех указанных узлов или элементов страницы определенного класса.

```javascript
document.getElementsByTagName('button');
document.getElementsByClassName('my-class');
```
