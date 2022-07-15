```javascript
// Устанавливаем слушатель события `paste`
document.addEventListener('paste', (e) => {

  // Получаем данные из буфера
  const clipboardItems = e.clipboardData.items;
  const items = [].slice
    .call(clipboardItems)
    .filter((item) => {
    
    // Фильтруем: только картинки
    return item.type.indexOf('image') !== -1;
  });

  if (items.length === 0) {
    return;
  }

  const item = items[0];

  // Получаем картинку, как объект `File`
  const blob = item.getAsFile();
});
```

Теперь мы можем увидеть картинку на странице, предположим, в «заглушке» `img#preview`. Для это в слушатель, после создания `blob` получаем этот элемент и устанавливаем его атрибут `src`.

```javascript
const imageEle = document.getElementById('preview');
imageEle.src = URL.createObjectURL(blob);
```

А можем отослать на сервер в AJAX-запросе. (Код нужно вставить в том же слушателе).

```javascript
// Создаем новую FormData
const formData = new FormData();
formData.append('image', blob, 'filename');

// Создает запрос. Лучше использовать `fetch` — см. ниже
const request = new XMLHttpRequest();
request.open('POST', '/path/to/back-end', true);

// Обработчики «успешно» и ошибки
request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    const res = request.responseText;
    // Do something with the response
    // ...
  }
};

// Отправляем
request.send(formData);
```
