☝️🧐 **Использовать фигурные скобки** для `case` и `default`, если они содержат присвоение значений переменных или объявление класса (так называемые «лексические декларации»).

**Не объявлять** в switch функций. eslint: no-case-declarations, no-inner-declarations

```js
// ⛔️ плохо
switch (foo) {
  case 1:
    const x = 1;
    break;
  case 2:
    const y = 2;
    break;
  default:
    /**
     * JSDoc
     */
    class C {}
}

// 👍 хорошо
switch (foo) {
  case 1: {
    const x = 1;
    break;
  }
  case 2: {
    const y = 2;
    break;
  }
  case 3:
    bar();
    break;
  default: {
    /**
     * JSDoc
     */
    class C {}
  }
}
```

#### Примеры

```js
const a = 2 + 2;

switch (a) {
  case 3:
    alert('Маловато');
    break;
  case 4:
    alert('В точку!');
    break;
  case 5:
    alert('Перебор');
    break;
  default:
    alert('Я таких значений не знаю');
}

/* Сначала получаем номер дня недели из объекта
Date. Затем присваиваем переменной переменной
значения зависимости от этого номера */
switch (new Date().getDay()) {
  case 6:
    text = 'Today is Saturday';
    break;
  case 0:
    text = 'Today is Sunday';
    break;
  default:
    text = 'Looking forward to the Weekend';
}
```

#### Группировка `case`

Несколько значений case можно группировать. В примере ниже case 3 и case 5 выполняют один и тот же код

```js
switch (a) {
  case 4:
    alert('Верно!');
    break;

  case 3:
  case 5:
    alert('Немного ошиблись, бывает.');
    break;

  default:
    alert('Странный результат, очень странный');
}
```
