Для отправки файлов (иными словами POST-запроса) или запроса с методом, отличным от GET, необходимо использовать параметры `fetch`:

- `method` – HTTP-метод: POST, PUT, DELETE, etc.
- `body` – тело запроса. Чаще всего — JSON. Но может быть объект `FormData`, `Blob` для картинок и пр. бинарных данных, `URLSearchParams`.

```javascript
const url = 'https://example.com/profile';
const data = { username: 'example' };

// Асинхронная функция. Всегда возвращает промис
(async () => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      // данные могут быть 'строкой' или {объектом}
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('Успех:', JSON.stringify(json));
  } catch (error) {
    console.error('Ошибка:', error);
  }
})();
```
