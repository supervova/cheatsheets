Следующая функция отправит данные из формы `formEle` на сервер в AJAX-запросе.

```js
const submit = (formEle) => {
  return new Promise(function (resolve, reject) {
    /* Вызов функции сериализации данных —
    см. раздел «Сериализация данных формы» */
    const params = serialize(formEle);    
    
    /* Создаем Ajax-запрос. Лучше использовать
    `fetch` — см. ниже */
    const req = new XMLHttpRequest();
    req.open('POST', formEle.action, true);
    req.setRequestHeader(
      'Content-Type',
      'application/x-www-form-urlencoded;charset=UTF-8'
    );    
    
    // Обработчики на загрузке и ошибке
    req.onload = () => {
      if (req.status >= 200 && req.status < 400) {
        resolve(req.responseText);
      }
    };
    req.onerror = function () {
      reject();
    };

    // Отправляем
    req.send(params);
  });
};
```

#### Применение

```js
const formEle = document.getElementById('my-form');

submit(formEle).then((response) => {
  /* `response` — это то, что мы получим с сервера.
  Если пришел JSON, парсим */
  const data = JSON.parse(response);
  // И т.д.
});
```
