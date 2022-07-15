Функция `getDefaultProperty` возвращает значение по умолчанию для CSS-свойства `property` указанного тега. В процессе не задействуется текущая разметка — создается временный элемент по аргументу переданному в параметр `tagName`.

```javascript
const getDefaultProperty = (tagName, property) => {
  // Создать элемент по параметру `tagName`
  const ele = document.createElement(tagName);
  document.body.appendChild(ele);

  // Получить стили `ele`
  const styles = window.getComputedStyle(ele);

  /* Получить значение по умолчанию для свойства,
  переданного в параметр `property` */
  const value = styles.getPropertyValue(property);

  // Удалить элемент
  document.body.removeChild(ele);

  // Вернуть полученное значение
  return value;
};
```

Мы можем использовать такую функцию для получения, например, размера шрифта подзаголовка `h2`.

```javascript
getDefaultProperty('h2', 'font-size');

// Или
getDefaultProperty('h2', 'fontSize');
```
