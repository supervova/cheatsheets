JavaScript может отправлять сетевые запросы на сервер и асинхронно подгружать новую информацию по мере необходимости. Сетевые запросы из JS широко известны под аббревиатурой AJAX (Asynchronous JavaScript And XML).

Мы можем использовать сетевой запрос, чтобы:

- отправить заказ;
- загрузить информацию о пользователе;
- запросить последние обновления с сервера;
- и т.п.

Практическая реализация сетевых запросов (AJAX) осуществляется с помощью двух API: `XMLHttpRequest` и более современного и удобного `Fetch` — аналога методов jQuery `ajax()` и `get()`.

Первым аргументом методу `fetch()` передается URL. Вторым, необязательным — опции запроса. `fetch()` возвращает промис для обработки запроса.

```javascript
fetch('/data.json')
  .then((data) => {
    // Обработчик данных
  })
  .catch((error) => {
    // Обработчик ошибки
  });
```

#### Пример. Открытие внешней ссылки в модальном окне Bootstrap

```javascript
(() => {
  const modal = document.getElementById('modal');

  if (modal) {
    const container = modal.querySelector('.modal__box');

    modal.addEventListener('show.bs.modal', (event) => {
      // Индикатор загрузки
      const loader = document.createElement('div');
      loader.className = 'progress';
      loader.setAttribute('role', 'status');
      loader.innerHTML = 'Товар загружается...';
      document.body.appendChild(loader);

      // Получаем URL документа из атрибута `href`
      const href =
        event.relatedTarget.getAttribute('href');

      fetch(href)
        .then((response) => {
          // Получаем HTML как строку
          return response.text();
        })
        // Цепочка `then`
        .then((html) => {
          // Конвертируем строку в DOM-дерево
          const parser = new DOMParser();
          const doc =
            parser.parseFromString(html, 'text/html');

          /* Забераем из DOM нужную часть
          и вставляем в окно */
          const content =
            doc.querySelector('.is-modal-src');
          container.appendChild(content);

          // Удаляем индикатор
          loader.remove();
        });
    });

    // Очищаем модальное окно в момент закрытия
    modal.addEventListener('hidden.bs.modal', () => {
      container.innerHTML = '';
    });
  }
})();
```
