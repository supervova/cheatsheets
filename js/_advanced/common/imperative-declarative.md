#### Императивное программирование

Императивное программирование (языки C, PHP и др.) описывает логику работы программы в явных командах.

Рассмотрим функцию, увеличивающую каждое число в массиве целых чисел.

```js
function incrementArray(arr) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr.push(arr[i] + 1);
  }
  return resultArr;
}
```

Эта функция описывает логику работы.

1. Мы перебираем полученный в параметр массив.
2. Увеличиваем каждое число в нем.
3. Перемещаем результат в новый массив.
4. Затем возвращаем новый массив.

#### Декларативное программирование

Декларативное программирование описывает, что выполняет логика программы без описания того, как это сделать.

Очень простой пример декларативного программирования может быть продемонстрирован с помощью SQL. Мы можем запросить таблицу базы данных (People) для людей с фамилией Smith следующим образом:

```sql
SELECT * FROM People WHERE LastName = 'Smith'
```

Этот код легко читается и описывает то, что мы хотим достичь. Нет описания того, как результат должен быть достигнут. Компьютер об этом позаботится сам.

Кроме SQL к декларативным языкам относится HTML. А JavaScript, Java и C# могут поддерживать обе парадигмы программирования.

Большая часть кода JS, который мы пишем, императивная. Однако, с ростом популярности функционального программирования в JS, декларативные подходы распространяются все больше.

Пример — функция `incrementArray()` из раздела о императивном программировании, написанная в декларативной парадигме.

```js
function incrementArray(arr) {
  return arr.map(item => item + 1);
}
```

Мы указываем компьютеру, что хотим достичь, но не как это сделать. Метод `Array.map()` делает всё без каких-либо инструкций — возвращает новый массив с результатами выполнения обратного вызова для каждого элемента из исходника.

Такой подход не изменяет существующие значения и не включает в себя последовательную логику.

Декларативное программирование имеет очевидные преимущества в отношении краткости и читаемости. Поэтому вместо императивных функций опытные программисты используют декларативные методы массива `map`, `reduce` и `filter` и библиотеки утилит вроде [`lodash`](https://nicozerpa.com/lodash-underscore-necessary-or-obsolete/){:target="_blank"}, предоставляющие декларативные методы `takeWhile`, `uniq`, `zip` и др.
