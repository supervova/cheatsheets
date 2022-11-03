Завершает выполнение текущей функции и возвращает её значение.

```js
function square(x) {
  return x * x;
  /* return может находиться в любом месте тела
  функции. Но после этой директивы код уже не будет
  выполняться. */
  console.log('В консоли это не появится');
}

// Значение demo будет равняться 9
const demo = square(3);
```

Вызовов `return` может быть несколько.

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('А родители разрешили?');
  }
}

let age = prompt('Сколько вам лет?', 18);

if ( checkAge(age) ) {
  alert( 'Доступ получен' );
} else {
  alert( 'Доступ закрыт' );
}
```

#### Использование `return` для раннего выхода

Возможно использовать `return` и без значения. Это приведёт к немедленному выходу из функции. Это один из способов раннего выхода — полезен в тех случаях, когда в расчетах соблюдается условие, после которого дальнейшие вычисления не нужны.

```js
function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert('Вам показывается кино');
  // ...
}
```

☝️🧐  Надо помнить, что функция всегда возвращает значение, а если оно не указывается, как в случаях с ранним выходом, то возвращается `undefined`.

☝️🧐 Поэтому, если в функции используется return для раннего выхода, лучше явно возвращать false. В таком случае, если функция будет использоваться в каком-то условии, не надо будет проверять на `undefined`.

```js
if (getName() === false) {/*👍*/}

if (getName() === undefined) {/*👎*/}
```

Реже для раннего выхода используются ключевые слова `break` и `throw`.

```js
const getName = (name) => {
  try {
    //get out of here
    if (name === 'Tommy Vercetti') throw 'exit';
  } catch (e) {
    // handle exception
  }
};

const getFirstName = () => {
  getName : {
    console.log("I get logged");
    break getName ;
    console.log("I don't get logged");
  }
};
```

#### Функции без `return` вообще

**Использование `return` необязательно.** Если функция не возвращает значение, а, например, просто назначает CSS-класс, можно не использовать `return`.

☝️🧐  Хотя некоторые разработчики используют пустой `return` в конце функции (не для раннего выхода, а для явного завершения выполнения), [Airbnb не рекомендует этого делать](https://eslint.org/docs/rules/no-useless-return).
