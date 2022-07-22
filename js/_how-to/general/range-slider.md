Два способа создать элемент управления.

#### 1) `input[type='range']` и CSS

«Дешево и сердито».

```html
<input type="range">
```

```scss
[type='range'] {
  --thumb-color: var(--color-primary-base);
  --border-color: var(--color-ink-border);

  $size-height-range-track: $size-half;
  $size-height-range-thumb: $size-2p5;
  $size-border-width-range-thumb: $size-half;

  appearance: none;
  background: none;
  height: $size-height-range-thumb;
  width: 100%;

  // ⚠️ Список селекторов в случае
  // с нестандартными псведоэлементами
  // не срабатывает. Только миксин и инклуд
  // для каждого селектора по отдельности
  @mixin range-track {
    background-color: var(--border-color);
    border-radius: $shape-border-radius-pill;
    transition:
      background
      $motion-duration-sm
      $motion-easing-base,
      box-shadow
      $motion-duration-sm
      $motion-easing-base;
    width: 100%;
    height: $size-height-range-track;
  }

  // Track
  &::-webkit-slider-runnable-track {
    @include range-track;
  }

  &::-moz-range-track {
    @include range-track;
  }

  &::-ms-track {
    @include range-track;
  }

  @mixin range-thumb {
    appearance: none;
    background-color: var(--thumb-color);
    border-radius: 50%;
    border:
      $size-border-width-range-thumb
      solid
      var(--range-thumb-border-color);
    cursor: pointer;
    margin-top: -(
      $size-height-range-thumb * .5 -
      $size-height-range-track * .5
    );
    transition:
      background
      $motion-duration-sm
      $motion-easing-base,
      transform
      $motion-duration-sm
      $motion-easing-base;
    width: $size-height-range-thumb;
    height: $size-height-range-thumb;
  }

  // Thumb
  &::-webkit-slider-thumb {
    @include range-thumb;
  }

  &::-moz-range-thumb {
    @include range-thumb;
  }

  &::-ms-thumb {
    @include range-thumb;
  }

  &:hover {
    --thumb-color: hsl(var(--h) var(--s) 65%);
  }

  &:hover,
  &:focus,
  &:active {
    // Thumb
    &::-webkit-slider-thumb {
      transform: scale(1.25);
    }

    &::-moz-range-thumb {
      transform: scale(1.25);
    }

    &::-ms-thumb {
      transform: scale(1.25);
    }
  }
}
```

`input[type='range']` поддерживается абсолютным абсолютным большинством браузеров. Но, если потребуется, можно добавить проверку.

```js
const isRangeInputSupported = () => {
  const el = document.createElement('input');
  el.setAttribute('type', 'range');
  /* Если браузер не поддерживает поле `range`,
  атрибуту `type` будет присвоено значение `text` */
  return el.type !== 'text';
};
```

Минус метода — нельзя сделать вертикальный виджет.

#### 2) JS

Пользовательский слайдер диапазона собирается из трех деталей: бегунка и двух половинок дорожки.

```html
<div class="container">
  <div class="left"></div>
  <div class="thumb" id="thumb"></div>
  <div class="right"></div>
</div>
```

```scss
.container {
  display: flex;
  align-items: center;
  height: $size-2p5;
}

.right {
  // Правая половинка занимает
  // всё свободное место
  flex: 1;
  height: $size-half;
}
```

Назначим на бегунок обработчик события `mousedown`, чтобы сделать его перетаскиваемым. В обработчик будет сохранятся позиция элемента.

```js
const thumb = document.getElementById('thumb');
const leftSide = thumb.previousElementSibling;

// The current position of mouse
let x = 0;
let y = 0;
let leftWidth = 0;

// Обработчик будет срабатывать при перетаскивании
const mouseDownHandler = (e) => {
  // Текущая позиция мыши
  x = e.clientX;
  y = e.clientY;
  leftWidth = leftSide.getBoundingClientRect().width;

  // Назначаем вложенные обработчики
  document.addEventListener(
    'mousemove', mouseMoveHandler
  );

  document.addEventListener('mouseup', mouseUpHandler);
};
```

Когда бегунок перемещаемся, мы можем рассчитать расстояние, которое проделал курсор — это будет разница между исходной и текущей позицией. С этими данными мы можем рассчитать и ширину левой части дорожки.

```js
const mouseMoveHandler = (e) => {
  // Как далеко мышь продвинулась
  const dx = e.clientX - x;
  const dy = e.clientY - y;

  const containerWidth =
    thumb.parentNode.getBoundingClientRect().width;
  let newLeftWidth =
    ((leftWidth + dx) * 100) / containerWidth;
  newLeftWidth = Math.max(newLeftWidth, 0);
  newLeftWidth = Math.min(newLeftWidth, 100);

  leftSide.style.width = `${newLeftWidth}%`;
};

/* Обработчик срабатывает в тот момент,
когда пользователь отпускает бегунок */
const mouseUpHandler = () => {
  leftSide.style.removeProperty('user-select');
  leftSide.style.removeProperty('pointer-events');

  rightSide.style.removeProperty('user-select');
  rightSide.style.removeProperty('pointer-events');

  // Удаляем слушатели, пока они не нужны
  document.removeEventListener(
    'mousemove',
    mouseMoveHandler
  );
  
  document.removeEventListener(
    'mouseup',
    mouseUpHandler
  );
};

// Назначаем обработчик
thumb.addEventListener(
  'mousedown', mouseDownHandler
);
```
