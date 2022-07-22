#### Разметка и стили

Изначально `iframe` скрыто (`opacity: 0`). А индикатор выравнен по центру.

```html
<div class="container">
  <!-- The loading indicator -->
  <div class="loader" id="loader">Loading</div>
  
  <!-- The iframe -->
  <iframe id="frame" style="opacity: 0;"></iframe>
</div>
```

```css
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

.loader {
  background: var(--color-background-alt);
  box-shadow: var(--layer-box-shadow-z3);
  border-radius: var(--shape-border-radius-base);
  padding: $size-line $size-1p5;
}
```

#### Обработка события `load`

Скроем индикатор, когда загрузка закончится.

```js
const iframeEle = document.getElementById('iframe');
const loadingEle = document.getElementById('loader');

iframeEle.addEventListener('load', () => {
  // Скрыть индикатор
  loadingEle.style.display = 'none';

  // Показать iframe
  iframeEle.style.opacity = 1;
});
```
