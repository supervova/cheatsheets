Плавную прокрутку легко можно сделать в JS…

```js
el.scrollIntoView({ behavior: 'smooth' });
```

… Или CSS.

```css
scroll-behavior: smooth;
```

Но оба метода не дают разработчику изменить анимацию прокрутки.

В этом разделе разбираем сложный, но дающий большую свободу метод.

Разметка:

```html
<a class="trigger" href="#section-1"></a>
<a class="trigger" href="#section-2"></a>
...

<div id="section-1">...</div>
<div id="section-2">...</div>
```

После клика по ссылка страница должны прокрутиться к соответствующему разделу.

```js
const triggers = document.querySelectorAll(
  '.trigger'
);

triggers.forEach((el) => {
  el.addEventListener('click', clickHandler);
});
```

`clickHandler` обрабатывает событие `click` по ссылке. Определяет целевой раздел страницы по атрибуту `href` и прокручивает страницу к нужному разделу:

```js
const clickHandler = (e) => {
  e.preventDefault();

  // Получаем id целевой секции из атрибута `href`
  const href = e.target.getAttribute('href');
  const id = href.substr(1);
  const target = document.getElementById(id);

  scrollToTarget(target);
};
```

#### Функция `scrollToTarget`

Чтобы прокрутить страницу к нужному место можно использовать метод `window.scrollTo(0, y)` который прокручивает к месту по указанному расстоянию от верхнего края.

- Начальная точка прокрутки — текущее положение страницы в области просмотра — `window.pageYOffset`.
- Конечная точка — расстояние до целевого раздела. Значение можно получить с помощью `target.getBoundingClientRect().top`.
- Продолжительность прокрутки указывается в миллисекундах. В примере — 800 мс.

```js
const duration = 800;

const scrollToTarget = (target) => {
  const { top } = target.getBoundingClientRect();
  const startPos = window.pageYOffset;
  const diff = top;

  let startTime = null;
  let requestId;

  const loop = (currentTime) => {
    if (!startTime) {
      startTime = currentTime;
    }

    // Время в миллисекундах
    const time = currentTime - startTime;

    const percent = Math.min(time / duration, 1);
    window.scrollTo(0, startPos + diff * percent);

    if (time < duration) {
      // Продолжаем прокрутку
      requestId = window.requestAnimationFrame(loop);
    } else {
      // Останавливаем
      window.cancelAnimationFrame(requestId);
    }
  };
  requestId = window.requestAnimationFrame(loop);
};
```

Здесь мы указываем браузеру выполнить функцию `loop` до того, как появится целевой радел. При первом выполнении функции инициализируется переменная `starttime` — как текущая временная метка `currenttime`.

Затем мы вычисляем время, затраченное к текущему моменту на прокрутку:

```js
const time = currentTime - startTime;
```

Зная затраченное время и заданную продолжительность, нетрудно рассчитать процент выполнения полного цикла прокрутки. И затем передать данные в метод `scrollTo` для расчета конечной координаты.

```js
// `percent` — это диапазон от 0 до 1
const percent = Math.min(time / duration, 1);
window.scrollTo(0, startPos + diff * percent);
```

Если затраченное время меньше заданной продолжительности, продолжаем прокрутку. В противном случае останавливаемся.

```js
if (time < duration) {
  requestId = window.requestAnimationFrame(loop);
} else {
  window.cancelAnimationFrame(requestId);
}
```

☝️🧐 Часто для расчетов анимации используется `setTimeout()` или `setInterval()`, но использованный  в примере[requestAnimationFrame](https://developer.mozilla.org/ru/docs/Web/API/window/requestAnimationFrame){:target="_blank"} метод лучше по показателям производительности.

#### Настройка анимации

До сих пор анимация осуществлялась неестественно прямолинейно. Но мы можем добавить [любой эффект замедления](https://1loc.dev/misc/easing-functions/){:target="_blank"}.

```js
const easeInQuad = (t) => {
  return t * t;
};

const loop = (currentTime) => {
  // ...
  const percent = Math.min(time / duration, 1);
  window.scrollTo(
    0, startPos + diff * easeInQuad(percent)
  );
};
```

См. демо на [HTML DOM](https://htmldom.dev/demo/scroll-to-an-element-smoothly/index.htm){:target="_blank"}.
