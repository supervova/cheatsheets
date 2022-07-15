Исходное поле ввода.

```html
<input id="textbox" type="text" >
```

Чтобы изменять его по содержанию, создадим вспомогательный элемент, чьё содержание будет идентичным значению атрибута `value` поля. Затем будем менять ширину поля, измеря ширину вспомогательного элемента.

```javascript
// Создаем div
const fakeEle = document.createElement('div');

// Прячем его
fakeEle.style.position = 'absolute';
fakeEle.style.top = '0';
fakeEle.style.left = '-9999px';
fakeEle.style.overflow = 'hidden';
fakeEle.style.visibility = 'hidden';
fakeEle.style.whiteSpace = 'nowrap';
fakeEle.style.height = '0';

/* Назначаем вспомогательному элементу те стили
поля ввода, которые влияют на ширину */
const textboxEle = document.getElementById('textbox');
const styles = window.getComputedStyle(textboxEle);

fakeEle.style.fontFamily = styles.fontFamily;
fakeEle.style.fontSize = styles.fontSize;
fakeEle.style.fontStyle = styles.fontStyle;
fakeEle.style.fontWeight = styles.fontWeight;
fakeEle.style.letterSpacing = styles.letterSpacing;
fakeEle.style.textTransform = styles.textTransform;
fakeEle.style.borderLeftWidth = styles.borderLeftWidth;
fakeEle.style.borderRightWidth = styles.borderRightWidth;
fakeEle.style.paddingLeft = styles.paddingLeft;
fakeEle.style.paddingRight = styles.paddingRight;

// Вставляем вспомогательный элемент в документ
document.body.appendChild(fakeEle);
```

Функция `setWidth` передает во вспомогательный элемент содержание, вычисляет его ширину и задает такую же полю.

```javascript
const setWidth = () => {
  const string =
    textboxEle.value ||
    textboxEle.getAttribute('placeholder') ||
    '';
  fakeEle.innerHTML = string.replace(/\s/g, '&nbsp;');

  const fakeEleStyles = window.getComputedStyle(fakeEle);
  textboxEle.style.width = fakeEleStyles.width;
};
```

Вызываем функцию на загрузке страницы и на пользовательском вводе.

```javascript
setWidth();

textboxEle.addEventListener('input', () => {
  setWidth();
});
```
