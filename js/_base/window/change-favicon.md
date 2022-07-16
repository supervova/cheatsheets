Функция `setFavicon` меняет URL иконки.

```javascript
const setFavicon = function (url) {
  // Получаем текущую иконку
  const favicon =
    document.querySelector('link[rel="icon"]');

  if (favicon) {
    // Если нашли — обновляем
    favicon.href = url;
  } else {
    // Не нашли — создаем
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = url;
    document.head.appendChild(link);
  }
};
```

Чтобы менять в зависимости от разделов (например, в личных кабинетах — иконку-аватар пользователя), можно использовать такой метод.

```javascript
setFavicon('/path/to/user/profile/icon.ico');
```

#### Использование эмодзи в качестве фавиконки

В метод `setFavicon` можно передавать помимо обычных веб-адресов и Data URL. Таким образом можно создать элемент `canvas`, добавить на него эмодзи, конвертировать в Data Url и передать в `setFavicon`.

```javascript
const emojiFavicon = (emoji) => {
  // Создаем `canvas`
  const canvas = document.createElement('canvas');
  canvas.height = 64;
  canvas.width = 64;

  // Задаем параметры холста и переносим эмодзи
  const context = canvas.getContext('2d');
  context.font = '64px serif';
  context.fillText(emoji, 0, 64);
  
  // Конвертируем холст в Data URL
  const url = canvas.toDataURL();
  
  // Обновляем фавиконку
  setFavicon(url);
};

// Вызов функции
emojiFavicon('🎉');
```
