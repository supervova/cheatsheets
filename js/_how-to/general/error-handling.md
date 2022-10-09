#### "Cannot read Properties of Undefined" — в случае, когда объект или его поле не создано

Современный способ — с помощью [оператора опциональной последовательности](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Optional_chaining){:target="_blank"}.

В примере если элемент `.potter` создан, вызываем его метод. Если такого элемента нет, ничего не произойдёт.

А если `harry` не является свойством объекта `wizards` или не имеет поля `house`, ничего не произойдет. Если же нужные свойства будут найдены, то `house` будет переведён в нижний регистр.

```js
document.querySelector('.potter')?.classList.add('meh');

const wizards = {};
wizards.harry?.house.toLowerCase();
```

Оператор `?.` можно также использовать совместно с [оператором нулевого слияния](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator){:target="_blank"} — `??` — для добавления запасного кода, на случай отсутствия нужного объекта или поля.

В пример если `harry` не является свойством объекта `wizards` или не имеет поля `house`, то Гарри определяем в Пуффендуй (англ. Hufflepuff).

```js
const house =
  wizards.harry?.house.toLowerCase() ??
  'hufflepuff';
```

Проверка по-старинке.

```js
const harry = document.querySelector('.potter');
const wizards = {};

/* Если элемент `.potter` создан, вызываем его
метод */
if (harry) {
  harry.classList.add('meh');
}

/* Если свойство wizards.harry.house существует,
переводим его в нижний регистр */
if (wizards.harry && wizards.harry.house) {
  wizards.harry.house.toLowerCase();
}
```

[Источник](https://gomakethings.com/optional-chaining-in-vanilla-js/). См. также: [список ошибок](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Errors){:target="_blank"}
