Мы можем получить все стили элемента из блоков разных селекторов.

```javascript
const styles = window.getComputedStyle(ele, null);
```

Из полученных стилей можем извлечь значение нужного свойства.

```javascript
const bgColor = styles.backgroundColor;
/* Или так. Свойства можно писать, как в шашлычном
так и в верблюжьем регистре */
const bgColor =
    styles.getPropertyValue('background-color');
const bgColor =
  styles.getPropertyValue('backgroundColor');
```

Для свойств с браузерным префиксом это делается иначе.

```javascript
const textSizeAdjust =
  styles['-webkit-text-size-adjust'];
```
