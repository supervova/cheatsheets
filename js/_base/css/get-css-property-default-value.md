Функция `getDefaultProperty` возвращает значение по умолчанию для CSS-свойства `property` указанного тега. В процессе не задействуется текущая разметка — создается временный элемент по аргументу переданному в параметр `tagName`.

```js
const getDefaultProperty = (tagName, property) => {
  // Создать элемент по параметру `tagName`
  const el = document.createElement(tagName);
  document.body.appendChild(el);

  // Получить стили `
  const styles = window.getComputedStyle(el);

  /* Получить значение по умолчанию для свойства,
  переданного в параметр `property` */
  const value = styles.getPropertyValue(property);

  // Удалить элемент
  document.body.removeChild(el);

  // Вернуть полученное значение
  return value;
};
```

Мы можем использовать такую функцию для получения, например, размера шрифта подзаголовка `h2`.

```js
getDefaultProperty('h2', 'font-size');

// Или
getDefaultProperty('h2', 'fontSize');
```
