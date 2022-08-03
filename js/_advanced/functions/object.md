Функция, как почти все в JS — это объект. И у этого объекта есть свойства и методы. Например, свойство `name` содержит имя, указанное при объявлении функции, либо переменную / метод, в которую она сохранена.

```javascript
// myFunc.name == 'myFunc'
function myFunc() {}

// mySecondFunc.name == "mySecondFunc"
const mySecondFunc = () => {};

/* Метод toString возвращает код функции в виде
строки */
console.log(myFunc.toString());
```
