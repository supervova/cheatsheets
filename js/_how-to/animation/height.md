Невозможно закодировать плавный переход от нулевой высоты к высоте содержания, используя только CSS. С помощью JS надо получить высоту содержания открытого контейнера и изменить значение переменной `--max-height`. Это можно сделать на клике или на `:hover`, как в примере.

```html
<div class="details">
  Hover me to see a height transition.
  <div class="details__body">Additional content</div>
</div>
```

```css
.details__body {
  overflow: hidden;
  transition: max-height .3s;
  max-height: 0;
}

.details:hover > .details__body {
  max-height: var(--max-height);
}
```

```js
const el = document.querySelector('.details__body');
const height = el.scrollHeight;
el.style.setProperty('--max-height', height + 'px');
```
