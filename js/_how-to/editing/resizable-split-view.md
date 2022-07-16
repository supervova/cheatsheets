Исходная разметка.

```html
<div style="display: flex">
  <div class="left">Left</div>

  <!-- The resizer -->
  <div class="resizer" id="dragMe"></div>

  <div class="right">Right</div>
</div>
```

#### Обновление ширины честей split-представления

О том, как делать перетаскиваемый элемент, [см. здесь](#topic-draggable-base).

В нашем случае ручка масштабирования будет двигаться только по горизонтали. Сначала нам надо получить позицию мыши и ширину левой части split-представления до масштабирования.

```javascript
const resizer = document.getElementById('dragMe');
const leftSide = resizer.previousElementSibling;
const rightSide = resizer.nextElementSibling;

// Позиция мыши
let x = 0;
let y = 0;

// Ширина левой части
let leftWidth = 0;

/** Обработка перетягивания мышью */
const mouseDownHandler = (e) => {
  // Текущая позиция мыши
  x = e.clientX;
  y = e.clientY;

  leftWidth = leftSide.getBoundingClientRect().width;

  // Добавляем вложенные обработчики
  document.addEventListener(
    'mousemove', mouseMoveHandler
  );
  document.addEventListener('mouseup', mouseUpHandler);
};

// Назначаем первый обработчик
resizer.addEventListener('mousedown', mouseDownHandler);
```

Если вернуться к разметке, обнаружим, что левая и правая часть представления являются предыдущим и следующим «соседями» ручки перетаскивания. Следовательно, выбираем их вот таким образом:

```javascript
const leftSide = resizer.previousElementSibling;
const rightSide = resizer.nextElementSibling;
```

Далее. Когда пользователь двигает мышью, мы определяем — как далеко — и, соответственно, обновляем ширину левой части представления.

```javascript
const mouseMoveHandler = (e) => {
  // Как далеко сместилась мышь
  const dx = e.clientX - x;
  const dy = e.clientY - y;

  const newLeftWidth =
    ((leftWidth + dx) * 100) /
    resizer.parentNode.getBoundingClientRect().width;
  leftSide.style.width = `${newLeftWidth}%`;
};
```

Меняя ширину левой части представления, устанавливаем новое значение в процентах (от родительского элемента). Устанавливаем для правой части CSS-свойство `flex: 1 1 0` и она будет занимать всё оставшееся место — не нужно рассчитывать ширину в JS.

```css
.right { flex: 1 1 0;}
```

#### Исправляем мигание курсора

Когда пользователь перетаскивает ручку, мы должны поменять курсор.

Но если мы изменим его только у ручки, то обнаружим, что он при перетягивании постоянно меняется: то нужный, то обычная стрелка. Это происходит потому, что под мышь попадают и другие элементы, а не только `resizer`.

Чтобы исправить «баг», следует на момент перетягивания поменять курсор не только для ручки, но и для всего документа.

```javascript
const mouseMoveHandler = (e) => {
  // ...
  resizer.style.cursor = 'col-resize';
  document.body.style.cursor = 'col-resize';
};
```

Также на момент перетягивания нужно предотвратить срабатывание событий и выделение текста в обоих частях split-представления. Для этого используем CSS-свойства `user-select` и `pointer-events`.

```javascript
const mouseMoveHandler = (e) => {
// ...
  leftSide.style.userSelect = 'none';
  leftSide.style.pointerEvents = 'none';
  
  rightSide.style.userSelect = 'none';
  rightSide.style.pointerEvents = 'none';
};
```

Стили будут удалены сразу после окончания перетягивания.

```javascript
const mouseUpHandler = () => {
  resizer.style.removeProperty('cursor');
  document.body.style.removeProperty('cursor');

  leftSide.style.removeProperty('user-select');
  leftSide.style.removeProperty('pointer-events');

  rightSide.style.removeProperty('user-select');
  rightSide.style.removeProperty('pointer-events');

  // Удаляем обработчики
  document.removeEventListener(
    'mousemove', mouseMoveHandler
  );
  document.removeEventListener(
    'mouseup', mouseUpHandler
  );
};
```

#### Перетягивание по вертикали

Вместо того, чтобы обновлять значение ширины левой части представления, будем обновлять высоту верхней части.

```javascript
const prevSibling = resizer.previousElementSibling;
let prevSiblingHeight = 0;

const mouseDownHandler = function (e) {
  const rect = prevSibling.getBoundingClientRect();
  prevSiblingHeight = rect.height;
};

const mouseMoveHandler = function (e) {
  const h =
    ((prevSiblingHeight + dy) * 100) /
    resizer.parentNode.getBoundingClientRect().height;
  prevSibling.style.height = `${h}%`;
};
```

Также поменяем курсор на `row-resize`.

```javascript
const mouseMoveHandler = (e) => {
  //...
  resizer.style.cursor = 'row-resize';
  document.body.style.cursor = 'row-resize';
};
```

#### Вложенные split-представления

Допустим, что нам нужно добавить в правую часть горизонтального split-представления вертикальное — как в VSCode, если выбрать View ➜ Editor Layout ➜ Two Rows.

У нас будет две ручки перетягивания. Чтобы выбирать одну из них, добавим `data`-атрибуты.

```html
<style>
  .right {
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
  }
</style>

<div style="display: flex">
  <div class="left">Left</div>
  <div class="resizer" data-direction="horizontal"></div>

  <div class="right">
    <div>Top</div>
    <div class="resizer" data-direction="vertical"></div>
    <div style="flex: 1 1 0%">Bottom</div>
  </div>
</div>
```

Теперь мы можем получать направление перетягивания.

```javascript
const direction =
  resizer.getAttribute('data-direction') ||
  'horizontal';
```

The logic of setting the width or height of previous sibling depends on the direction:

```javascript
const mouseMoveHandler = (e) => {
  switch (direction) {
    case 'vertical':
      const h =
        ((prevSiblingHeight + dy) * 100) /
        resizer.parentNode.getBoundingClientRect().height;
      prevSibling.style.height = `${h}%`;
      break;
    case 'horizontal':
    default:
      const w =
        ((prevSiblingWidth + dx) * 100) /
        resizer.parentNode.getBoundingClientRect().width;
      prevSibling.style.width = `${w}%`;
      break;
  }

  const cursor = direction === 'horizontal'
    ? 'col-resize'
    : 'row-resize';
  resizer.style.cursor = cursor;
  document.body.style.cursor = cursor;

  // ...
};
```

См. демо на [HTML DOM](https://htmldom.dev/demo/make-a-draggable-element/).
