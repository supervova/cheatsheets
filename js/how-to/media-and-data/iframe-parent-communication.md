#### Передача данных из `iframe` наверх, родительскому окну

В этом примере в переменной `message` передаем строку.

```javascript
window.parent.postMessage(message, '*');
```

А если нужно передать объект, сначала записываем в формате JSON и конвертируем в строку методом `stringify`.

```javascript
const message = JSON.stringify({
  message: 'Hello from iframe',
  date: Date.now(),
});

// Вызов из `iframe`
window.parent.postMessage(message, '*');
```

#### Передача данных в `iframe`

```javascript
// Вызов из родительской страницы
myFrame.contentWindow.postMessage(message, '*');
```

#### Получение данных

Чтобы получить данные, в `iframe` или на родительской странице нужно добавить слушателя события `message`.

```javascript
window.addEventListener('message', (e) => {
  // Получаем данные
  const data = e.data;

  /* Если данные содержат десериализованный JSON,
  их нужно сериализовать — перевести из строки
  в объект */
  const decoded = JSON.parse(data);
});
```

#### Совет

Если обмен данными осуществляется с разными `iframe`, можно добавить свойство-«подпись».

```javascript
// Передача данных из `iframe`
const message = JSON.stringify({
  channel: 'FROM_FRAME_A',
  // ...
});

window.parent.postMessage(message, '*');
```

В получателе (в примере — родительская страница) теперь можно распознавать отправителей.

```javascript
window.addEventListener('message', (e) => {
  const data = JSON.parse(e.data);

  // Откуда «дровишки»?
  const channel = data.channel;
});
```
