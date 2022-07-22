Иногда требуется избежать прокрутки к элементу, которому передан фокус — методом `element.focus()` или `autofocus="true"`. Например, фокус на поле в модальном окне может привести к прокрутке страницы к началу документа.

#### Опция `preventScroll` метода `focus()`

⚠️  [Значительный процент браузеров](https://caniuse.com/mdn-api_htmlelement_focus_preventscroll_option){:target="_blank"} не поддерживает эту опцию. Решение надо принимать по ситуации.

```js
element.focus({preventScroll: true});
```

#### Прокрутка к области документа, видимой перед передачей фокуса

Метод работает во всех браузерах. Перед передачей фокуса надо сохранить координаты мыши. А после передачи прокрутить документ к соответствующей области.

```js
const x = window.scrollX;
const y = window.scrollY;
elem.focus();

// Scroll to the previous location
window.scrollTo(x, y);
```
