#### 1\. C помощью метода `measureText()` элемента `canvas`

```js
const measureWidth = (text, font) => {
  // Создаем холст
  const canvas = document.createElement('canvas');

  // Создаем контекст рендеринга
  const context = canvas.getContext('2d');

  // Устанавливаем шрифт
  context.font = font;

  // Передаем строку и измеряем текст
  const metrics = context.measureText(text);

  // Возвращаем ширину в пикселях
  return metrics.width;
};
```

#### 2\. С помощью временного элемента

```js
const measureWidth = (text, font) => {
  // Создаем элемент
  const el = document.createElement('div');

  // Скрываем и запрещаем переносы
  el.style.position = 'absolute';
  el.style.visibility = 'hidden';
  el.style.whiteSpace = 'nowrap';
  el.style.left = '-9999px';

  // Устанавливаем шрифт и передаем строку
  el.style.font = font;
  el.innerText = text;

  // Вставляем в документ
  document.body.appendChild(el);

  // Получаем ширину
  const { width } = window.getComputedStyle(el);

  // Удаляем элемент
  document.body.removeChild(el);

  return width;
};
```
