```js
const isDateInputSupported = () => {
  // Создаем новый input
  const el = document.createElement('input');
  
  // Задаем атрибут type со значениемdate
  el.setAttribute('type', 'date');
  
  const invalidValue = 'not-a-valid-date';
  
  // Передаем в value переменную invalidValue
  el.setAttribute('value', invalidValue);

  /* Если браузер поддерживает type='date', value
  останется пустым. В противном случае `el.value`
  вернет 'not-a-valid-date' */
  return el.value !== invalidValue;
};
```
