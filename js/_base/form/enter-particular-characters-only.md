#### Специальные типы полей

```html
<input type="email">
<input type="number">
<input type="tel">
<input type="url">
<input type="date">
<input type="time">
<input type="color">`
```

Другие специальные типы можно найти [здесь](https://developer.mozilla.org/ru/docs/Web/HTML/Element/input){:target="_blank"}.

#### Атрибут `pattern` элемента `input`

```html
<!-- Только 3 буквы. Никаких цифр и др. символов -->
<input name="code" type="text" pattern="[A-Za-z]{3}">

<!-- Не менее 8 символов. Мин. одна цифра и одна
буква в верхнем регистре -->
<input
  name="pwd"
  type="password"
  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
>

<!-- Веб-адрес должен начинаться с протокола -->
<input name="url" type="url" pattern="https?://.+">
```

#### Для особых случаев — JS

JS используется в тех случаях, когда нужны ограничения, отличные от свойственных специальным типам полей. В примере ввод ограничивается числами и пробелами. `input[type='number']` для такой задачи не годится.

```html
<input type="text" id="input">
```

#### Обработка событий

«Повесив» обработчик на событие `keypress`, мы можем предотвратить ввод символов отличных от цифр и пробелов.

```javascript
const ele = document.getElementById('input');

ele.addEventListener('keypress', (event) => {
  // Получаем код нажатой клавиши
  const key = event.which || event.keyCode;
  
  /* Клавишам цифр 0–9 назначены коды48–57.
  Пробел — 32 */
  if (key != 32 && (key < 48 || key > 57)) {
    // Если клавиша «неправильная», игнорируем
    event.preventDefault();
  }
});
```

Теперь надо разобраться со вставкой из буфера обмена и перетаскиванием текста в поле. Назначаем обработчик событию `input`.

```javascript
// Получаем текущее значение поля
let currentValue = ele.value || '';

ele.addEventListener('input', (event) => {
  const { target } = event;

  // Если пользователь ввел цифры или пробелы
  /^[0-9\s]*$/.test(target.value)
    ? // Сохраняем введенное значение
      (currentValue = target.value)
    : /* В противном случае возвращаем исходное
      значение. `e.preventDefault()` здесь
      не поможет */
      (target.value = currentValue);
});
```

Теперь остается маленькая проблема: `target.value = currentValue` переводит курсор в конец поля ввода. Нам следует сохранить позицию курсора.

```javascript
// Засекаем текущую позицию курсора в поле
const selection = {};

ele.addEventListener('keydown', (e) => {
  const { target } = e;
  selection = {
    selectionStart: target.selectionStart,
    selectionEnd: target.selectionEnd,
  };
});
```

Когда пользователь вставит в поле что-то неразрешенное, мы восстановим исходное значение и позицию курсора.

```javascript
ele.addEventListener('input', (e) => {
  const target = e.target;
  
  if (/^[0-9\s]*$/.test(target.value)) {
    currentValue = target.value;
  } else {
  /* Введены неразрешенные символы. Возвращаем
  исходное значение и позицию курсора */
  target.value = currentValue;
  target.setSelectionRange(
      selection.selectionStart,
      selection.selectionEnd
    );
  }
});
```

Мы можем объединить отслеживаемые свойства `selectionStart` и `selectionEnd` в одной переменной.

```javascript
const target = e.target;
state.selectionStart = target.selectionStart;
state.selectionEnd = target.selectionEnd;
```
