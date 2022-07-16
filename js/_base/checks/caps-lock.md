Такую проверку используют для предупреждения пользователя о возможной ошибке: например, при вводе пароля.

В примерах ниже проверяется ввод в `input#textbox`, а предупреждение выводится текстом в `#message`.

```html
<input type="text" id="textbox">
<div id="message"></div>
```

#### 1\. Функция `getModifierState()`

`getModifierState()` возвращает состояние клавишей-модификаторов. В том числе — фиксатора верхнего режима <kbd>Caps Lock</kbd>.

```javascript
const textboxEle = document.getElementById('textbox');
const messageEle = document.getElementById('message');

textboxEle.addEventListener('keydown', (e) => {
  const capsLockOn = e.getModifierState('CapsLock');

  // Обновляем предупреждение
  messageEle.innerHTML =
    capsLockOn ? 'Набираете прописными' : '';

  // Показываем или скрываем предупреждение
  messageEle.style.display =
    capsLockOn ? 'block' : 'none';
});
```

#### Добавляем проверку смены регистра с помощью клавиши <kbd>Shift</kbd>

`getModifierState()` не позволяет одновременно определить нажатый Shift. Поэтому добавляем еще один слушатель на `keypress`.

⚠️ MDN и VS Code считают метод `navigator.platform` устаревшим. И ходят слухи, что Chrome планирует отказаться от поддержки. Хотя в официальных документах таких планов найти не удалось. В качестве альтернативы MDN рекомендует использовать `navigator.userAgentData`. Однако поддержка браузерами нового метода пока сильно ограничена. Поэтому проверку на macOS делаем двойной. См. [здесь](https://caniuse.com/?search=userAgentData){:target="_blank"} и [здесь](https://bit.ly/3HVZHzY){:target="_blank"}.

```javascript
textboxEle.addEventListener('keypress', (e) => {
  const isMac =
    /Mac/.test(navigator.userAgentData.platform) ||
    /Mac/.test(navigator.platform);

  const keyCode = e.keyCode || e.which;

  // Shift нажат?
  const shiftKey = e.shiftKey || keyCode === 16;

  // Получаем введенный символ
  const s = String.fromCharCode(keyCode);
  const capsLockOn =
    (s.toUpperCase() === s &&
      s.toLowerCase() !== s &&
      !(shiftKey && isMac)) ||
    (s.toUpperCase() !== s &&
      s.toLowerCase() === s &&
      shiftKey);

  messageEle.innerHTML =
    capsLockOn ? 'Набираете прописными' : '';
  messageEle.style.display =
    capsLockOn ? 'block' : 'none';
});
```
