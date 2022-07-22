Разметка и стили:

```html
<style>
  .draggable {
    cursor: move;
    user-select: none;
  }
</style>

<div id="list">
  <div class="draggable">A</div>
  <div class="draggable">B</div>
  <div class="draggable">C</div>
  <div class="draggable">D</div>
  <div class="draggable">E</div>
</div>
```

#### Делаем элементы перетягиваемыми

Используем технику, описанную в разделе «[Перетягиваемый элемент](#topic-draggable-base)».

```js
// Элемент, перетаскиваемый в данный момент
let draggingEl;

// Текущая позиция курсора относительно перетаскиваемого элемента
let x = 0;
let y = 0;

/** Перетаскивание в процессе */
const mouseMoveHandler = (e) => {
  // Устанавливаем позицию перетаскиваемого элемента
  draggingEl.style.position = 'absolute';
  draggingEl.style.top = `${e.pageY - y}px`;
  draggingEl.style.left = `${e.pageX - x}px`;
};

/** Перетаскивание закончилось.
  * Удаляем стили позиционирования перетаскиваемого
  * элемента и слушатели
  */
const mouseUpHandler = () => {
  // Remove the position styles
  draggingEl.style.removeProperty('top');
  draggingEl.style.removeProperty('left');
  draggingEl.style.removeProperty('position');

  x = null;
  y = null;
  draggingEl = null;

  // Удаляем слушатели `mousemove` и `mouseup`
  document.removeEventListener(
    'mousemove', mouseMoveHandler
  );
  document.removeEventListener(
    'mouseup', mouseUpHandler
  );
};

/** Перетаскивание начинается */
const mouseDownHandler = (e) => {
  draggingEl = e.target;

  // Рассчитываем позицию курсора
  const rect = draggingEl.getBoundingClientRect();
  x = e.pageX - rect.left;
  y = e.pageY - rect.top;

  // Устанавливаем слушатели на документ
  document.addEventListener(
    'mousemove', mouseMoveHandler
  );
  document.addEventListener('mouseup', mouseUpHandler);
};

/* Теперь установим слушатели `mousedown`
на каждый элемент списка */
const listItems = document
  .getElementById('list')
  .querySelectorAll('.dragable');

listItems.forEach((item) => {
  item.addEventListener('mousedown', mouseDownHandler);
});
```

#### Добавим заглушку

Во время перетаскивания списка, место элемента, изъятого из потока, смыкается. Например, место перетягиваемого элемента `C` сразу же займет его «сосед снизу» — `D`. Это может нарушить спокойствие пользователя и, чтобы предупредить такие сдвиги, надо создать заглушку той же высоты, что и изъятый элемент.

Заглушка создается в начале перетягивания.

```js
let placeholder;
let isDraggingStarted = false;

const mouseMoveHandler = (e) => {
  const draggingRect =
    draggingEl.getBoundingClientRect();

  if (!isDraggingStarted) {
  // Обновляем флаг
  isDraggingStarted = true;

  // Создаем заглушку
  placeholder = document.createElement('div');
  placeholder.classList.add('placeholder');
  draggingEl.parentNode.insertBefore(
    placeholder,
    draggingEl.nextSibling
  );

  /* Задаем высоту заглушке — такую же,
  как у изъятого элемента */
  placeholder.style.height = `${draggingRect.height}px`;
  }

  // ...
};
```

Заглушка удаляется, как только пользователь отпустит перетаскиваемый элемент.

```js
const mouseUpHandler = () => {
  // Удаляем
  placeholder &&
    placeholder.parentNode.removeChild(placeholder);
  
  // Восстанавливаем флаг
  isDraggingStarted = false;

  // ...
};
```

В итоге в момент перетаскивания элемента `C` узлы списка в DOM выстраиваются в такую последовательность:

```text
A
B
«заглушка»
C — перетаскиваемый элемент
D
E
```

#### Определяем куда пользователь перетягивает элемент: вверх или вниз

Во-первых, нам потребуется вспомогательная функция, определяющая в каком положении находится перетаскиваемый элемент в текущий момент: сверху или снизу указанного в параметре соседа.

Элемент `nodeA` считается выше элемента `nodeB`, если значение вертикального центра `nodeA` меньше аналогичного значения `nodeB`.

Вертикальный центр рассчитывается как сумма координаты `top` элемента и половины его высоты.

```js
const isAbove = (nodeA, nodeB) => {
  // Получаем границы элементов
  const rectA = nodeA.getBoundingClientRect();
  const rectB = nodeB.getBoundingClientRect();

  return (
    rectA.top + rectA.height / 2 <
    rectB.top + rectB.height / 2
  );
};
```

Как только пользователь начинает перетаскивание, мы определяем соседей выбранного — снизу и сверху.

```js
const mouseMoveHandler = (e) => {
  /* Порядок элементов:
     prevEl
     draggingEl
     placeholder
     nextEl */
  const prevEl = draggingEl.previousElementSibling;
  const nextEl = placeholder.nextElementSibling;
};
```

Если пользователь перетаскивает элемент вверх, мы меняем местами заглушку и соседа сверху.

```js
const mouseMoveHandler = (e) => {
  // ...

  // Пользователь тащит элемент вверх
  if (prevEl && isAbove(draggingEl, prevEl)) {
    /* Изменение порядка: исходный -> новый
       prevEl                     -> placeholder
       draggingEl                  -> draggingEl
       placeholder                 -> prevEl */
    swap(placeholder, draggingEl);
    swap(placeholder, prevEl);
  }
};
```

Если пользователь перетаскивает элемент вниз, мы меняем местами заглушку и соседа снизу.

```js
const mouseMoveHandler = (e) => {
  // ...

  // User moves the dragging element to the bottom
  if (nextEl && isAbove(nextEl, draggingEl)) {
    /* Изменение порядка: исходный -> новый
       draggingEl                  -> nextEl
       placeholder                 -> placeholder
       nextEl                      -> draggingEl */
    swap(nextEl, placeholder);
    swap(nextEl, draggingEl);
  }
};
```

Полная функция для изменения порядка элементов списка:

```js
const swap = (nodeA, nodeB) => {
  const parentA = nodeA.parentNode;
  const siblingA =
    nodeA.nextSibling === nodeB
      ? nodeA
      : nodeA.nextSibling;

  // Поднимаем `nodeA` выше `nodeB`
  nodeB.parentNode.insertBefore(nodeA, nodeB);

  /* Поднимаем `nodeB` выше соседа элемента `nodeA`
  верхнего или нижнего определяется в тернарном
  операторе выше */
  parentA.insertBefore(nodeB, siblingA);
};
```

См. демо на [HTML DOM](https://htmldom.dev/demo/drag-and-drop-element-in-a-list/index.html){:target="_blank"}.
