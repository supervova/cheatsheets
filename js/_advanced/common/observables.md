Observable — это функция, реализующая паттерн проектирования Observer, в котором данные представлены в виде потока событий, что позволяет отслеживать их изменения.

Observable для JS реализована в библиотеке [RxJS](https://rxjs.dev/){:target="_blank"}.

Простой пример: изменение размера окна браузера. Изменение размера окна браузера создает поток событий в течение определенного периода времени (пока окно принимает нужный размер). Мы можем создать observable и подписаться на него, чтобы реагировать.

```js
const Rx = require('rxjs');

// создаем поток изменения размера окна
// с задержкой 350 миллисекунд
const resize$ = Rx.Observable
  .fromEvent(window, 'resize')
  .throttleTime(350);

/* подписываемся на observable resize$
и выводим в консоль размеры окна */
const subs = resize$.subscribe((event) => {
  const t = event.target;
  console.log(
    `${t.innerWidth}px x ${t.innerHeight}px`
  );
})
```

Существуют другие подходы для обработки и группировки асинхронных событий: функции обратного вызова, [промисы](/js/#topic-promises), [async/await](/js/#topic-fetch-upload).

См. также [Observable в RxJS](https://bit.ly/3Yfe4rs){:target="_blank"}.
