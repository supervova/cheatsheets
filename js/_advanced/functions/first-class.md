- Могут быть присвоены переменным или сохранены в объекте.
- Могут передаваться в качестве аргументов другим функциям.
- Другие функции могут возвращать first-class function, как результат.

В практическом смысле это означает систему вложений (includ'ов) для функций.

В JS все функции — высшего порядка (первоклассные).

```js
/**
 * Функция которая будет передана в аргументе
 * следующей функции - «инклуд»
 */
function hawaiianTranslator(word) {
  let translation;
  if (word === 'Hello') {
    translation = 'Aloha';
  } else if (word === 'Goodbye') {
    translation = 'Aloha';
  }

  return translation;
}

/**
 * «Мастер-функция» которая получит в аргументе
 * «функцию-инклуд»
 *
 * @param {function} translator — функция, которая
 * переводит полученный аргумент.
 */
function sayIt(translator) {
  /* «Функция-инклуд», переданная в аргументе
  translator, вызывается, и полученное значение
  сохраняется в переменной phrase. */
  const phrase = translator('Hello');
  alert(phrase);
}

/* Вызываем sayIt, передавая ей в аргументе
«функцию-инклуд» */
sayIt(hawaiianTranslator);
```
