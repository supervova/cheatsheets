Разметка:

```html
<!-- Картинка -->
<div class="image-container">
  <img id="image">
</div>

<!-- Бегунок -->
<div>
  <!-- Минимальное значение -->
  <div>10%</div>
  
  <!-- Собственно бегунок -->
  <div>
    <div class="left"></div>
    <div id="knob"></div>
    <div class="right"></div>
  </div>
  
  <!-- Максимальное значение -->
  <div>200%</div>
</div>
```

#### Контейнер изображения

Центрируем картинку в контейнере и обрезаем, когда она больше, чем контейнер.

```css
.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  
  overflow: hidden;
  width: 100%;
}
```

#### Расчет исходных габаритов

Для начала получим исходные размеры изображения. Для этого применяем небольшой трюк: создаем новую картинку, передаем в нее значение атрибута src реальной, чтобы обработать событие `load` и получить искомые данные.

```js
const image = document.getElementById('image');

/* Создаем пустую картинку — это будет клон
пользовательской, который можно измерить */
const cloneImage = new Image();

// Измеряем размеры картинки на загрузке
cloneImage.addEventListener('load', (e) => {
  // Исходные размеры
  const width = e.target.naturalWidth;
  const height = e.target.naturalHeight;
  
  // Устанавливаем размеры в стиле
  image.style.width = `${width}px`;
  image.style.height = `${height}px`;
});

// Передаем `src` в клон
cloneImage.src = image.src;
```

Поскольку картинка с помощью стилей вписывается в контейнер, нужно узнать насколько она масштабирована в исходном положении.

```js
cloneImage.addEventListener('load', (e) => {
  // ...
  const scale =
    image
      .parentNode
      .getBoundingClientRect()
      .width / width;
});
```

Теперь восстанавливаем реальные размеры картинки, используя полученный коэффициент исходного масштабирования.

```js
cloneImage.addEventListener('load', (e) => {
  //...
  image.style.transform = `scale(${scale}, ${scale})`;
});
```

#### Бегунок

Подробно о бегунке [см. здесь](#topic-range).

В этой задаче мы хотим установить бегунок согласно значению исходного масштабирования, полученного ранее.

Но сначала установим пороговые значения.


```js
const minScale = 0.1;
const maxScale = 2;
const step = (maxScale - minScale) / 100;
```

Бегунок может менять ширину в строковом стиле изображения, основываясь на ширине своей левой части.

```js
const knob = document.getElementById('knob');
const leftSide = knob.previousElementSibling;

cloneImage.addEventListener('load', (e) => {
  // ...
  leftSide.style.width = `${(scale - minScale) / step}%`;
});
```

#### Изменение размеров с использованием бегунка

Обновляем коэффициент масштабирования, согласно положению бегунка.

```js
const mouseMoveHandler = (e) => {
  // Вычисляем ширину левой части бегунка
  // ...
  const newLeftWidth = ((leftWidth + dx) * 100) / containerWidth;

  // Устанавливаем ширину левой части
  leftSide.style.width = `${newLeftWidth}%`;

  /* Вычисляем коэффициент масштабирования и
  изменяем стиль картинки */
  const scale = minScale + newLeftWidth * step;
  image.style.transform = `scale(${scale}, ${scale})`;
};
```

См. демо на [HTML DOM](https://htmldom.dev/demo/zoom-an-image/index.html){:target="_blank"}.
