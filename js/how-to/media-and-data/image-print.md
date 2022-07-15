Страницу целиком можно распечатать, вызвав команду браузера **Файл** ➜ **Печать…** (<kbd>⌘</kbd> / <kbd>Ctrl</kbd> + <kbd>P</kbd>) или вызвав функцию `window.print()`.

Чтобы напечатать изображение из страницы, можно создать `iframe` с заглушкой картинки, передавть в заглушку значение `src` и вызвать `window.print()` из `iframe`.

Для этого кроме собственно картинки нам понадобится кнопка печати.

```html
<img id="image" src="/path/to/image.jpg">
<button id="print">Print</button>
```

А обработчик печати вызываться из слушателя установленного на кнопку.

```javascript
const printBtn = document.getElementById('print');

printBtn.addEventListener('click', () => {
  // ...
});
```

#### Создаем временный `iframe`

```javascript
const iframe = document.createElement('iframe');

// Делаем его невидимыми
iframe.style.height = 0;
iframe.style.visibility = 'hidden';
iframe.style.width = 0;

/* Добавляем размекту в `srcdoc` -
https://bit.ly/3v5Iu3p */
iframe.setAttribute(
  'srcdoc', '<html><body></body></html>'
);

document.body.appendChild(iframe);
```

#### Вставляем изображение, как только `iframe` готов

Даже не смотря на то, что в `iframe` нет содержания из внешнего источника, надо дождаться его готовности.

```javascript
iframe.addEventListener('load', () => {
  // Клонируем картинку
  const image =
    document.getElementById('image').cloneNode();
  image.style.maxWidth = '100%';

  // Вставляем клон в `body` элемента `iframe`
  const { body } = iframe.contentDocument;
  body.style.textAlign = 'center';
  body.appendChild(image);

  image.addEventListener('load', () => {
    /* Вызываем `print`, как только картинка
    загрузилась в `iframe` */
    iframe.contentWindow.print();
  });
});
```

☝️🧐 В примере использована [техника вложенных обработчиков](#topic-nested-handlers): слушатель `load`, установленный на картинке, вложен в слушатель `load`, установленный на `iframe`.

#### Удаляем `iframe`

…Когда пользователь запускает печать или когда закрывает окно печати.

```javascript
iframe.contentWindow.addEventListener(
  'afterprint',
  () => {
    iframe.parentNode.removeChild(iframe);
  }
);
```
