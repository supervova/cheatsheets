#### Обработчики события

#### Атрибуты и свойства vs слушатели

Обработчик события может быть назначен прямо в разметке, в атрибуте, который называется `on`-событие.

```html
<button type="button" onclick="myFunc()">
  Нажми меня
</button>
```

Можно назначать обработчик из скрипта, через свойство DOM-объекта.

```html
<button id="elem" type="button">Нажми меня</button>
<script>
  elem.onclick = () => {
    alert('Спасибо');
  };
</script>
```

Фундаментальный недостаток описанных выше способов — невозможность повесить несколько обработчиков на одно событие.

Альтернативный способ назначения обработчиков — методы `addEventListener` и `removeEventListener`. Они свободны от указанного недостатка.

```js
function handler() {
  alert( 'Спасибо!' );
}

elem.addEventListener('click', handler);
elem.removeEventListener('click', handler);
```

#### Аргумент для обработчика — объект события

Каждый обработчик события на вход принимает объект события `event`. Он содержит информацию о том, какое именно событие наступило, и подробности. В частности, использовав свойство этого объекта `event.target`, можно обратиться к элементу, на котором сработало событие. А свойство `event.currentTarget` возвращает элемент на котором установлен слушатель.

То есть, если пользователь кликнет на потомке кнопки, описанной в примере, — `span` или иконку — `event.currentTarget` всё равно будет содержать объект `btn`.

```js
`btn.addEventListener('click', (event) => {
  const el = event.currentTarget;
  console.log(`You've clicked on ${el}`);
});
```

#### Распространенные события

- `click` — клик или прикосновение на элементе страницы.
- `focus` — поле ввода попало в фокус.
- `blur` — поле ввода пропало из фокуса.
- `input` — ввод в поле: нажатие клавиши, вставка из буфера, перетаскивание.
- `submit` — отправка формы.
- `load` — завершении загрузки страницы браузером.
- `unload` — закрытие окна браузера или уход со страницы.
- `resize` — изменение размера окна браузера.
- `contextmenu` – пользователь кликнул на элемент правой кнопкой мыши.
- `touchstart` — прикосновение к элементам на устройствах с сенсорными экранами.
- `touchend` — завершении прикосновения.
- `mouseover` — наведение курсора на элемент.
- `mousemove` — перемещение курсора над элементом.
- `mouseout` — выход курсора за границы элемента.
- `dragstart` — Начало перетаскивания элемента на странице.
- `drop` — Перетаскиваемый элемент отпущен.
- `keypress` — нажатие клавиши.
- `transitionend` — завершение CSS-перехода.
- `play` — нажатие кнопки воспроизведения элемента `<video>`.
- `pause` — нажатии кнопки паузы.

#### События мыши и клавиатуры

- `dblclick`,
- `keydown`,
- `keyup`,
- `mousedown`,
- `mouseenter`,
- `mouseleave`,
- `mouseup`

#### События объекта window

- `scroll`,
- `abort`,
- `beforeunload`,
- `error`,
- `hashchange`,
- `pageshow`,
- `pagehide`

#### События формы

- `change`,
- `focusin`,
- `focusout`,
- `invalid`,
- `reset`,
- `search`,
- `select`

#### События анимации

- `animationend`,
- `animationiteration`,
- `animationstart`

#### События перетаскивания

- `drag`,
- `dragend`,
- `dragenter`,
- `dragleave`,
- `dragover`

#### События буфера обмена

- `copy`,
- `cut`,
- `paste`

#### События медиафайлов

- `abort`,
- `canplay`,
- `canplaythrough`,
- `durationchange`,
- `ended`,
- `error`,
- `loadeddata`,
- `loadedmetadata`,
- `loadstart`,
- `pause`,
- `playing`,
- `progress`,
- `ratechange`,
- `seeked`,
- `seeking`,
- `stalled`,
- `suspend`,
- `timeupdate`,
- `volumechange`,
- `waiting`

#### Прочие

- `message`,
- `mousewheel`,
- `online`,
- `offline`,
- `popstate`,
- `show`,
- `storage`,
- `toggle`,
- `wheel`,
- `touchcancel`,
- `touchmove`

#### Хронометражные события (события таймеров)

Создаются вызовами `setTimeout` или `setInterval`.

```js
setTimeout(() => {
  alert('Hello');
}, 3000);
```

#### События конкретных API

Например JavaScript API, относящиеся к `Geolocation`, `LocalStorage`, `Web Workers` и т. д. Пример — определение координат пользователя по событию JavaScript API.
