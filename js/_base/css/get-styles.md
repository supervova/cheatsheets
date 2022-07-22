Мы можем получить все стили элемента из блоков разных селекторов.

```js
const styles = window.getComputedStyle(el, null);
```

Из полученных стилей можем извлечь значение нужного свойства.

```js
const bgColor = styles.backgroundColor;
/* Или так. Свойства можно писать, как в шашлычном
так и в верблюжьем регистре */
const bgColor =
    styles.getPropertyValue('background-color');
const bgColor =
  styles.getPropertyValue('backgroundColor');
```

Для свойств с браузерным префиксом это делается иначе.

```js
const textSizeAdjust =
  styles['-webkit-text-size-adjust'];
```
