JSON — это текстовой формат для хранения и передачи данных, записываемых по правилам JS-объекта. Пары ключ/значение, массивы в квадратных скобках, объекты в фигурных скобках.

Однако, в отличие от JS, в котором «ключи» могут быть строками, идентификаторами без кавычек и числами, в JSON «ключи» должны быть только строками и записываться в двойных кавычках.

Пример записи объекта в JSON.

```javascript
const str = `{ "names":
  [
    {"first": "Hakuna", "last": "Matata" }
    {"first": "Jane", "last": "Doe" }
    {"first": "Air", "last": "Jordan"}
  ]
}`;
```

#### Парсинг данных, полученных с сервера

Сервер передает данные всегда в виде строки. Для превращения их в JS-объект используется метод `JSON.parse`.

```javascript
const obj = JSON.parse(str);
// Доступ к данным объекта
console.log(obj.names[1].first);
```

#### Отправка данных на сервер

```javascript
// Создать объект
const myObj = { name: 'Jane', age: 18, city: 'Chicago' };

// Перевести его в JSON
const myJSON = JSON.stringify(myObj);

// Передать JSON PHP-скрипту
window.location = `demo.php?x=${myJSON}`;
```

#### Хранение данных в браузере. Доступ к этим данным

```javascript
// Создать объект
const myObj = { name: 'Jane', age: 18, city: 'Chicago' };

// Перевести его в JSON
const myJSON = JSON.stringify(myObj);

/* Сохранить myJSON в объект веб-хранилища localStorage
под именем `testJSON` */
localStorage.setItem('testJSON', myJSON);

// Получить `testJSON` из объекта localStorage
const text = localStorage.getItem('testJSON');

// Парсинг данных
const obj = JSON.parse(text);

// Использование
console.log(obj.name);
```
