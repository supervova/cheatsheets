Исходное поле ввода.

```html
<input id="textbox" type="text" >
```

Чтобы изменять его по содержанию, создадим вспомогательный элемент, чьё содержание будет идентичным значению атрибута `value` поля. Затем будем менять ширину поля, измеря ширину вспомогательного элемента.

```js
// Создаем div
const fakeEl = document.createElement('div');

// Прячем его
fakeEl.style.position = 'absolute';
fakeEl.style.top = '0';
fakeEl.style.left = '-9999px';
fakeEl.style.overflow = 'hidden';
fakeEl.style.visibility = 'hidden';
fakeEl.style.whiteSpace = 'nowrap';
fakeEl.style.height = '0';

/* Назначаем вспомогательному элементу те стили
поля ввода, которые влияют на ширину */
const textboxEl = document.getElementById('textbox');
const styles = window.getComputedStyle(textboxEl);

fakeEl.style.fontFamily = styles.fontFamily;
fakeEl.style.fontSize = styles.fontSize;
fakeEl.style.fontStyle = styles.fontStyle;
fakeEl.style.fontWeight = styles.fontWeight;
fakeEl.style.letterSpacing = styles.letterSpacing;
fakeEl.style.textTransform = styles.textTransform;
fakeEl.style.borderLeftWidth = styles.borderLeftWidth;
fakeEl.style.borderRightWidth = styles.borderRightWidth;
fakeEl.style.paddingLeft = styles.paddingLeft;
fakeEl.style.paddingRight = styles.paddingRight;

// Вставляем вспомогательный элемент в документ
document.body.appendChild(fakeEl);
```

Функция `setWidth` передает во вспомогательный элемент содержание, вычисляет его ширину и задает такую же полю.

```js
const setWidth = () => {
  const string =
    textboxEl.value ||
    textboxEl.getAttribute('placeholder') ||
    '';
  fakeEl.innerHTML = string.replace(/\s/g, '&nbsp;');

  const fakeElStyles = window.getComputedStyle(fakeEl);
  textboxEl.style.width = fakeElStyles.width;
};
```

Вызываем функцию на загрузке страницы и на пользовательском вводе.

```js
setWidth();

textboxEl.addEventListener('input', () => {
  setWidth();
});
```
