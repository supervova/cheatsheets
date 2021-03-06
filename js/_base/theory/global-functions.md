```js
// Явное преобразование к строке
String(23);
(23).toString();

// Явное преобразование к числу
Number('23');

/* Кодирует строку по правилам универсального
идентификатора ресурса (URI), замещая всё, что не
является цифрами, латинскими буквами и символами,
разделяющие URL на компоненты (слеши, знаки вопросов,
«решетки») управляющими последовательностями,
представляющими UTF-8 кодировку символа. Например,
пробел кодируется в `%20`, или `Б` — в `%D0%91` */
encodeURI('http://site.com:8080/abc?efg#hij');

/* Кодирует строку по правилам URI, заменяя, помимо
прочего слеши, знаки вопросов, «решетки», двоеточия.
Используется, когда надо закодировать компоненты URL
в которых есть перечисленные символы-разделители */
encodeURIComponent('hello world');

// Декодирует URI
decodeURI('hello%20world');

// Декодирует компонент URI
decodeURIComponent(enc);

/* Является ли число конечным, т.е. не
`Infinity`, `-Infinity`, или `NaN` */
isFinite();

/* Если математическая операция не может быть
совершена, то возвращается специальное значение
`NaN` (Not-A-Number). `NaN` используется для
обозначения математической ошибки. Например,
деление `0/0` в математическом смысле не определено,
поэтому его результат `NaN`. Тоже самое получится,
если попробовать умножить строку на число.
Функция isNaN проверяет полученное значение на `NaN` */
isNaN();

/* Возвращает первое целое число. В примере — это 3.
Вторым параметром указывается основание системы
счисления (radix) */
parseInt('3 months', 10);

// Возвращает число с плавающей запятой — 3.5
parseFloat('3.5 days');

/* ⛔️ Выполняет строку, как код. Создает возможности
для злоумышленников и в прикладных программах
не используется */
eval();
```
