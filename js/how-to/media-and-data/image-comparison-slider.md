#### Разметка

Виджет состоит из контейнера и трех компонентов.

- Сверху — `div` с фоном из измененного изображения.
- Ниже — передвижная грань.
- Внизу — исходное изображения.

```html
<div class="container">
  <div class="modified-image"></div>
  
  <!-- Грань -->
  <div class="cropper" id="drag-me"></div>
  
  <img src="/original.png">
</div>
```

В исходном положении измененное изображение обрезано пополам.

```scss
.container {
  position: relative;
}

.modified-image {
  background: url('/modified.png') no-repeat 0;
  background-size: auto 100%;
  position: absolute;
  top: 0;  
  left: 0;

  // Половина измененного изображения
  width: 50%;
  height: 100%;
}

// Грань пересекает изображения посередине
.cropper {
  background-color: #cbd5e0;
  cursor: ew-resize;
  
  position: absolute;
  top: 0;
  left: 50%;
  
  width: 2px;
  height: 100%;
}
```

#### Обработчики

Когда пользователь передвигает грань, мы рассчитываем насколько переместился курсор и, исходя из этого, — новое положение грани и ширину измененного изображения.

```javascript
const cropper = document.getElementById('drag-me');
const leftSide = cropper.previousElementSibling;

// Инициализируем координаты курсора
let x = 0;
let y = 0;

// Инициализируем ширину модифицированного изображения
let leftWidth = 0;

/* Обработчик события `mousedown`. Срабатывает,
когда пользователь перетаскивает грань */
const mouseDownHandler = (e) => {
  // Текущие координаты курсора
  x = e.clientX;
  y = e.clientY;

  // Текущая ширина модифицированного изображения
  leftWidth =
    leftSide.getBoundingClientRect().width;

  // Устанавливаем слушатели на документ
  document.addEventListener(
    'mousemove', mouseMoveHandler
  );
  document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = (e) => {
  // Как далеко передвинулся курсор
  const dx = e.clientX - x;
  const dy = e.clientY - y;

  let newLeftWidth =
    ((leftWidth + dx) * 100) /
    cropper.parentNode.getBoundingClientRect().width;
  newLeftWidth = Math.max(newLeftWidth, 0);
  newLeftWidth = Math.min(newLeftWidth, 100);

  /* Расчет ширины модифицированного изображения
  и позиции грани */
  leftSide.style.width = `${newLeftWidth}%`;
  cropper.style.left = `${newLeftWidth}%`;
};

// Устанавливаем слушатель
cropper.addEventListener(
  'mousedown', mouseDownHandler
);
```

Кроме всего прочего, мы должны следить за тем, чтобы в наших расчетах учитывались передвижения курсора только в рамках контейнера. Поэтому мы должны сравнивать `newLeftWidth` с 0 и 100 процентами ширины контейнера.

```javascript
const mouseMoveHandler = (e) => {
  // Предыдущий код...

  newLeftWidth = Math.max(newLeftWidth, 0);
  newLeftWidth = Math.min(newLeftWidth, 100);
};
```
