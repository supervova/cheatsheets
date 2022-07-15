#### 1\. C помощью метода `measureText()` элемента `canvas`

```javascript
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

```javascript
const measureWidth = (text, font) => {
  // Создаем элемент
  const ele = document.createElement('div');

  // Скрываем и запрещаем переносы
  ele.style.position = 'absolute';
  ele.style.visibility = 'hidden';
  ele.style.whiteSpace = 'nowrap';
  ele.style.left = '-9999px';

  // Устанавливаем шрифт и передаем строку
  ele.style.font = font;
  ele.innerText = text;

  // Вставляем в документ
  document.body.appendChild(ele);

  // Получаем ширину
  const { width } = window.getComputedStyle(ele);

  // Удаляем элемент
  document.body.removeChild(ele);

  return width;
};
```
