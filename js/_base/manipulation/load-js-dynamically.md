```javascript
// Создать script-ссылку
const script = document.createElement('script');
script.src = '/path/to/js/file.js';

// Вставить перед закрывающим тегом `body`
document.body.appendChild(script);
```

#### Исполнить JS по завершению загрузки

```javascript
// Создаем script-ссылку
// ...

script.addEventListener('load', function() {
  // Сейчас скрипт полностью загружен
  // Do smth
});

// Вставляем перед закрывающим тегом `body`
//...
```

#### Загрузка нескольких скриптов по порядку

Для это задачи мы подготовили массив скриптов `arrayOfJs`, собрав ссылки в нужном порядке. На странице мы подгрузим сначала первый скрипт. Когда он будет полностью загружен — второй. И так далее — пока не загрузим всё, что есть.

```javascript
/* Загружаем скрипт по ссылки переданной в `url`.
Можно добавить второй параметр — `reject` и вызывать
reject(true), если скрипт не загрузится — например,
по таймеру `setInterval` */
const loadScript = (url) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = url;

    script.addEventListener('load', () => {
      // Скрипт загружен, выходим из слушателя
      resolve(true);
    });

    // Вставляем в документ
    document.body.appendChild(script);
  });
};

// Выполняем все промисы по порядку
const waterfall = (promises) => {
  return promises.reduce(
    (p, c) => {
      // Ждем пока не будет выполнено `p`
      return p.then(() => {
        // и затем `c`
        return c().then((result) => {
          return true;
        });
      });
    },
    /* Метод resolve(value) возвращает промис
    выполненный с переданным значением */
    Promise.resolve([])
  );
};

// Загружаем массив скриптов по порядку
const loadScriptsInOrder = (arrayOfJs) => {
  const promises = arrayOfJs.map((url) => {
    return loadScript(url);
  });
  return waterfall(promises);
};
```

Функция `loadScriptsInOrder` возвращает промис, сигнализирующий, что все скрипты были загружены.

```javascript
loadScriptsInOrder([
  '/path/to/file.js',
  '/path/to/another-file.js',
  '/yet/another/file.js',
]).then(() => {
  // Все скрипты загружены
  // Do smth
});
```
