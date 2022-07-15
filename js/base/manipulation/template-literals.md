Шаблонные литералы заключены в обратные кавычки (`` ` `` `` ` ``).

- Могут быть многострочными;
- содержать подстановки, обозначаемые знаком доллара и фигурными скобками — `${переменная или выражение}`;
- содержать условные конструкции: тернарный оператор или конструкцию `if … else`, заключенную в анонимную самовызывающуюся функцию (IIFE);

```javascript
const wizards = [
    'Hermione', 'Neville', 'Gandalf', 'Radagast'
  ];
  const showHeading = true;

  const str = `
    ${showHeading ? '<h1>Awesome Wizards</h1>' : ''}
    <p>Abracadabra! Expecto Patronum!</p>
    ${(() => {
      if (wizards.length > 3) {
        return '<p>There are at least 3 wizards.</p>';
      }
      return '<p>There are fewer than 3 wizards.</p>';
    })()}
    <ul>
      ${wizards
        .map((wizard) => {
          return `<li>${wizard}</li>`;
        })
        .join('')}
    </ul>
  `;

  console.log(str);`
```

#### Вложенные шаблонные литералы

```javascript
const classes = `header ${ isLargeScreen() ? '' :
  `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;
```

#### Теговый шаблон и функции тега

Расширенной формой шаблонных литералов являются теговые шаблоны. Они позволяют разбирать шаблонные литералы с помощью специальной пользовательской функции.

Вызывается такая функция, не как обычно — `myFunc(arg1, arg2)`. А так: ``myTag`строковый литерал с ${подстановками}!` ``.

При вызове в первый параметр такой функции передается массив подстрок из шаблона. В первом примере это будет `['строковый литерал с ', '!']`.

В остальные параметры передаются выражения или переменные из подстановок.

В итоге, функция должна вернуть собранную строку или что-то еще, как будет показано в примере №3.

```javascript
const person = 'Mike';
const age = 28;

function myTag(strings, personExp, ageExp) {
  /* При вызове функции ниже, в параметр
  `strings` будет передан массив
  ['That ', 'is a '] первый, нулевой
  элемент — 'That ' */
  const str0 = strings[0];
  // 'is a '
  const str1 = strings[1];

  let ageStr;
  /* `ageExp` — это третий параметр функции тега,
  а, значит, второе выражение в шаблоне-аргументе */
  if (ageExp > 99) {
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  /* Возвращаем строку, также используя шаблонный
  литерал. `personExp` — это второй параметр
  функции тега, а, значит, первое выражение
  в шаблоне-аргументе */
  return `${str0}${personExp}${str1}${ageStr}`;
}

/* Вызываем функцию myTag и передаем в параметры
строку с подстановками из заранее определенных
переменных */
const output = myTag`That ${person} is a ${age}`;

console.log(output); // That Mike is a youngster
```

**Пример №3.** Функция тега не обязана возвращать строку.

```javascript
function template(strings, ...keys) {
  return (...values) => {
    const dict = values[values.length - 1] || {};
    const result = [strings[0]];
    keys.forEach((key, i) => {
      const value =
        Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  };
}

const t1Closure = template`${0}${1}${0}!`;
t1Closure('Y', 'A'); // "YAY!"
const t2Closure = template`${0} ${'foo'}!`;
t2Closure('Hello', { foo: 'World' }); // "Hello World!"`
```

#### Сырые строки

Специальное свойство `raw` первого аргумента тегового шаблона, позволяет получить строку в том виде, в каком она была введена, без экранирования.

```javascript
function tag(strings) {
  return strings.raw[0];
}

/* В rawSample будет сохранена строка 'line 1 \\n line 2'
со символом экранирования (первый слеш) и символом новой
строки `\n`, а без rоw сохранилось бы две строки
без спецсимовлов */
const rawSample = tag`line 1 \\n line 2`;
```
