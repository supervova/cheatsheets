```javascript
const isDateInputSupported = () => {
  // Создаем новый input
  const ele = document.createElement('input');
  
  // Задаем атрибут type со значениемdate
  ele.setAttribute('type', 'date');
  
  const invalidValue = 'not-a-valid-date';
  
  // Передаем в value переменную invalidValue
  ele.setAttribute('value', invalidValue);

  /* Если браузер поддерживает type='date', value
  останется пустым. В противном случае `ele.value`
  вернет 'not-a-valid-date' */
  return ele.value !== invalidValue;
};
```
