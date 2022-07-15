Функция [сериализует данные формы](https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F): названия и значения полей.

```javascript
const serialize = (formEle) => {
  /* Получаем все элементы формы `formEle`
  и конвертируем их в массив, чтобы использовать
  методы: `map` и `join`. */
  const fields = [].slice.call(formEle.elements, 0);

  return fields
    .map((ele) => {
      const { name } = ele;
      const { type } = ele;
      
      /* Игнорируем:
      - поля без атрибута `name`
      - поля с атрибутом `disabled`
      - поля типа `file`
      - неотмеченные `checkbox`/`radio` */
      if (
        !name ||
        ele.disabled ||
        type === 'file' ||
        (/(checkbox|radio)/.test(type) && !ele.checked)
      ) {
        return '';
      }

      // Множественный `select`
      if (type === 'select-multiple') {
        return ele.options
          .map((opt) => {
            return opt.selected
              ? `${encodeURIComponent(name)}=
                 ${encodeURIComponent(opt.value)}`
              : '';
          })
          .filter((item) => {
            return item;
          })
          .join('&');
      }

      return `
        ${encodeURIComponent(name)}=
        ${encodeURIComponent(ele.value)}`;
    })
    .filter((item) => {
      return item;
    })
    .join('&');
};
```
