Выпадающие и контекстные меню, тултипы нужно как-то привязывать к элементам-триггерам. Для примера возьмём два элемента `#target` и `#popover`.

#### 1\. Проще всего: сделать всплывающую панель дочерним элементом и использовать CSS

```html
<style>
.target {
  position: relative;
}

.popover {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, .75rem);
}
</style>
  <!-- ... -->
<div class="target" id="target">
  <!-- Основное содержание триггера -->
  <div class="popover" id="popover">...</div>
</div>
```

Способ подходит в 80 процентах случаев, но не срабатывает, когда элемент-триггер имеет свойство `overflow: hidden`.

#### 2\. Рассчитывать координаты всплывающей панели относительно `body`

Можно сделать всплывающую панель прямым потомком `body` — либо сразу под триггером, а если это невозможно из-за общих предков — перед закрывающим тегом `</body>`

```html
<body>
  <div id="target">...</div>
  <div id="popover">...</div>
</body>
```

В этом случае мы можем в JS рассчитать координаты панели, получив границы элементов методом `getBoundingClientRect`.

```js
const target = document.getElementById('target');
const popover = document.getElementById('popover');

const targetRect = target.getBoundingClientRect();
const popoverRect = popover.getBoundingClientRect();

const top = targetRect.top + targetRect.height;
const left =
  targetRect.left +
  targetRect.width / 2 - popoverRect.width / 2;

/* Если нужно добавить «стрелочку-хвостик» панели,
к ее верхней координате приплюсуем нужное значение */
popover.style.top = `${top + 8}px`;
popover.style.left = `${left}px`;
```

Похожую технику можно использовать, добавив абсолютно позиционированный «якорь» и вычисляя координаты панели относительно этого элемента. Координаты якоря можно указать в процентах, что позволит решить какую-нибудь редкую задачу с адаптивным макетом.
