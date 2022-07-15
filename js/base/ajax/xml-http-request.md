
### Послать файлы на сервер — `XMLHttpRequest`

☝️🧐 Лучше использовать `fetch`. Встроенный объект `XMLHttpRequest` приводится здесь только для полноты картины.

Функция `upload` посылает выбранные в `fileEle` файлы на сервер.

```javascript
const upload = (fileEle, backendUrl) => {
  return new Promise((resolve, reject) => {
    // Получаем выбранные файлы
    const { files } = fileEle;

    /* Создаем объект FormData. Он позволяет
    конструировать наборы пар ключ-значение,
    представляющие поля формы и их значения,
    которые в дальнейшем можно отправить
    с помощью метода `send()`.
    https://mzl.la/3JpvKsr */
    const formData = new FormData();

    // Добавляем выбранные файлы в `formData`
    files.forEach((file) => {
      formData.append(fileEle.name, file, file.name);
    });

    // Создаем AJAX-запрос.
    const request = new XMLHttpRequest();
    request.open('POST', backendUrl, true);

    // Обработчики событий «успешно» и «ошибка»
    request.onload = () => {
      if (
      request.status >= 200 &&
      request.status < 400
    ) {
        resolve(request.responseText);
      }
    };
    request.onerror = () => {
      reject();
    };

    // Отправляем
    request.send(formData);
  });
};
```

См. также «[Отправить форму AJAX'ом](#topic-ajax-form)»
