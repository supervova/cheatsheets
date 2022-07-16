Кроме традиционной прокрутки некоторые приложения предлагают прокрутку перетягиванием — например, передвижение холста в Photoshop и Figma с зажатым пробелом.

Разметка и стили.

```html
<style>
  .container {
    cursor: grab;
    overflow: auto;
  }
</style>

<div id="container" class="container">...</div>
```

#### Прокрутка в указанное положение

Поскольку благодаря `overflow: auto;` содержание контейнера становится прокручиваемым, мы можем прокрутить его до указанной точки с помощью свойств `scrollTop` и `scrollLeft`.

```javascript
const ele = document.getElementById('container');
ele.scrollTop = 100;
ele.scrollLeft = 150;
```

#### Теперь то же самое — перетягиванием

Используем технику, описанную в разделе «[Перетягиваемый элемент](#topic-draggable-base)».

```javascript
let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = (e) => {
  pos = {
    // Текущее положение прокрутки
    left: ele.scrollLeft,
    top: ele.scrollTop,
    // Получить положение мыши
    x: e.clientX,
    y: e.clientY,
  };

  document.addEventListener(
    'mousemove', mouseMoveHandler
  );
  document.addEventListener('mouseup', mouseUpHandler);
};
```

В объекте `pos` сохраняются положение курсора и прокрутки. (Объект, кстати, предпочтительней четырех переменных, так как объединяет логически связанные значения).

Когда пользователь передвигает мышь, мы замеряем, насколько далеко, и затем прокручиваем содержимое в ту же точку.

```javascript
const mouseMoveHandler = (e) => {
  // Как далеко перемещен курсор
  const dx = e.clientX - pos.x;
  const dy = e.clientY - pos.y;

  // Прокручиваем элемент
  ele.scrollTop = pos.top - dy;
  ele.scrollLeft = pos.left - dx;
};
```

Опыт взаимодействия в процессе перетягивания может быть улучшен, с помощью пары CSS-свойств.

```javascript
const mouseDownHandler = (e) => {
  // Change the cursor and prevent user from selecting the text
  ele.style.cursor = 'grabbing';
  ele.style.userSelect = 'none';
  // ...
};

/** По окончании перетягивания */
const mouseUpHandler = () => {
  document.removeEventListener('mousemove', mouseMoveHandler);
  document.removeEventListener('mouseup', mouseUpHandler);

  // Меняем курсор и разрешаем выделение
  ele.style.cursor = 'grab';
  ele.style.removeProperty('user-select');
};
```
