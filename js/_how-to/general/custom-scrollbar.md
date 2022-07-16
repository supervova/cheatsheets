Можно обновить внешний вид полосы прокрутки исключительно стилями.

```scss
// Firefox
body {
  scrollbar-width: thin;
  
  // Цвета бегунка и «рельса»
  scrollbar-color: #718096 #edf2f7;
}

// Chrome, Edge и Safari
body::-webkit-scrollbar {
  width: .75rem;
}

*::-webkit-scrollbar-track {
  background-color: #edf2f7;
}

*::-webkit-scrollbar-thumb {
  background-color: #718096;
  border-radius: 9999px;
}
```

#### Альтернативный метод

Но поскольку `-webkit-scrollbar` не является стандартным псевдоэлементом и однажды может перестать поддерживаться, можно скрыть родной скроллбар браузера и вместо него использовать пользовательский. Например, для такого контейнера с прокруткой.

```html
<div class="wrapper" id="wrapper">
  <div class="content" id="content">
    ...
  </div>
</div>
```

```scss
.wrapper {
  overflow: hidden;
  max-height: 32rem;
}

.content {
// Скрыть скроллбар по умолчанию
margin-right: -1.6rem;
padding-right: 1.6rem;

  overflow: auto;
  height: 100%;
}
```

#### Пользовательская полоса прокрутки — исходная разметка и логика

Добавим под «обёрткой» добавим «якорь» — ориентир для позиционирования скроллбара — и собственно скроллбар.

```html
<div id="wrapper">...</div>

<!-- Якорь -->
<div
  id="anchor"
  style="position: absolute; top: 0; left: 0;"
>
</div>

<!-- Скроллбар -->
<div
  id="scrollbar"
  style="position: absolute; width: .75rem;"
>
</div>
```

Установим скроллбар в правый верхний угол.

```javascript
const wrapper = document.getElementById('wrapper');
const content = document.getElementById('content');
const anchor = document.getElementById('anchor');
const scrollbar = document.getElementById('scrollbar');

// Получаем размеры и положения контейнера и якоря
const wrapperRect = wrapper.getBoundingClientRect();
const anchorRect = anchor.getBoundingClientRect();

// Устанавливаем скроллбар
const top = wrapperRect.top - anchorRect.top;
const left = wrapperRect.width + wrapperRect.left - anchorRect.left;
scrollbar.style.top = `${top}px`;
scrollbar.style.left = `${left}px`;

// Высота скроллбара равна высоте контейнера
scrollbar.style.height = `${wrapperRect.height}px`;
```

#### Конструируем полосу прокрутки

Скроллбар состоит из «рельса» `track` и бегунка `thumb` — абсолютно позиционированных относительно родительского элемента.

```html
<div id="scrollbar">
  <div class="track" id="track"></div>
  <div class="thumb" id="thumb"></div>
</div>
```

```scss
.track {
  position: absolute;
  top: 0;
  left: 0;

  // Растягиваем на всю площадь
  width: 100%;
  height: 100%;
}

.thumb {
  left: 0;
  position: absolute;
  
  // Растягиваем только по ширине
  width: 100%;
}
```

Рассчитываем высоту бегунка: пропорционально отношению высоты содержания и высоты контейнера.

```javascript
const track = document.getElementById('track');
const thumb = document.getElementById('thumb');

const scrollRatio =
  content.clientHeight / content.scrollHeight;
thumb.style.height = `${scrollRatio * 100}%`;
```

#### Перетаскивание для прокрутки

Подробнее о технике [см. здесь](#topic-drag-to-scroll).

```javascript
let pos = { top: 0, y: 0 };

const mouseDownThumbHandler = (e) => {
  pos = {
    // Текущая позиция бегунка прокрутки
    top: content.scrollTop,
    // Текущая позиция курсора
    y: e.clientY,
  };

  document.addEventListener(
    'mousemove', mouseMoveHandler
  );
  document.addEventListener(
    'mouseup', mouseUpHandler
  );
};

const mouseMoveHandler = (e) => {
  // Как далеко курсор переместился
  const dy = e.clientY - pos.y;

  // Прокручиваем содержание
  content.scrollTop = pos.top + dy / scrollRatio;
};

// Назначаем обработчик `mousedown`
thumb.addEventListener(
  'mousedown', mouseDownThumbHandler
);
```

Когда пользователь перетягивает бегунок, он также прокручивает содержание элемента `content`. Для того, чтобы обновлять положение бегунка назначим обработчик события `scroll` на элемент `content`.

```javascript
const scrollContentHandler = () => {
  window.requestAnimationFrame(() => {
    thumb.style.top = `
      ${(content.scrollTop * 100) /
      content.scrollHeight}%
    `;
  });
};

content.addEventListener('scroll', scrollContentHandler);
```

#### Переходы по клику на «рельсе»

Для этого способа прокрутки мы должны снова рассчитать свойство `scrollTop` элемента `content`.

```javascript
const trackClickHandler = (e) => {
  const bound = track.getBoundingClientRect();
  const percentage =
    (e.clientY - bound.top) / bound.height;
  content.scrollTop =
    percentage *
    (content.scrollHeight - content.clientHeight);
};

track.addEventListener('click', trackClickHandler);
```
