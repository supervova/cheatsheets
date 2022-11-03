Замыкание — вложенная функция, имеющая доступ к переменным внешних функций; при этом все её внутренние переменные для внешних скриптов скрыты. Собственные, а также доступные родительские переменные и параметры называются окружением.

Замыкание используется для ограничения области видимости и создания частных переменных, которые не могут изменить другие скрипты на странице.

Замыкания часто используются для сохранения состояния в обработчиках событий.

#### Самовызывающиеся функции и выражения

Замыканием может стать любая вложенная функция. Но когда замыкание создают специально, обычно в качестве родителя используют самовызывающиеся функциональное выражение или анонимную функцию. Родительские переменные и параметры передаются вложенным функциям, и в дальнейшим не возвращаются к исходным значениям до окончания сессии.

После самовызова родительской функции код оперируют только значениями, возвращаемыми вложенными функциями.

Самовызывающееся выражение или функция, как следует, из названия срабатывают без вызова, сразу после своего объявления. Используется, когда нужно выполнить код один раз и сохранить его результаты для вложенных функций, без объявления глобальных переменных). Записывается с помощью двух пар круглых скобок и точки с запятой.

```js
/* Анонимная самовызывающаяся функция IIFE
(Immediately-invoked Function Expression) */
(() => {
  // код функции
})();

/**
 * Самовызывающееся функциональное выражение.
 * Создает замыкание для вложенной функции.
 * Переменной add присваивается результат
 * самовызывающейся функции, а это — вложенная
 * функция increment().
 */
const add = (() => {
  /* Переменная counter, созданная в add, передает
  значение вложенной функции increment() только
  раз. Далее в коде уже используются результаты
  increment(). В примере counter будет
  равняться 0 ровно до момента, когда
  increment() не увеличит его до единицы. */
  let counter = 0;

  /**
   * Вложенная функция.
   * @return {Number}
   */
  function increment() {
    counter += 1;
    return counter;
  }
  return increment;
})();

add(); // Выражение вернет 1
add(); // Выражение вернет 2
add(); // Выражение вернет 3
```

### IIFE с параметрами

```js
// В первой строке мы определяем два параметра
((msg, times) => {
  // В цикл передаем аргументы…
  for (let i = 1; i <= times; i++) {
    console.log(msg);
  }
/* …которые получаем при вызове функции в последней
строке */
}("Hello!", 5));

// Пример из jQuery
(function($, global, document) {
  // use $ for jQuery, global for window
}(jQuery, window, document));
```

#### Локальная область видимости

С каждой функцией связывается окружение, которое содержит локальные переменные из внешней области видимости (функции-родителя). Вызывая функцию на другом уровне, мы получаем и связанные с ней локальные переменные.

На книжном языке это явление еще объясняют так. Каждая функция определяют свою лексическую область действия, объект переменных LexicalEnvironment. Каждый запуск функции создает новый такой объект. На верхнем уровне им является «глобальный объект», в браузере – window. Таким образом программа создает несколько объектов с независимыми свойствами и методами.