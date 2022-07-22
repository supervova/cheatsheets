#### 1\. Рекомендовано: циклом `forEach`

```js
const elements =
  document.querySelectorAll('.my-element');

elements.forEach((el) => {
  console.log(el);
  // Do smth useful...
});
```

#### 2\. Тоже, но еще и с оператором расширения (`spread`-оператором)

```js
[...elements].forEach((el) => {
  // Do smth
});
```

#### 3\. Тот же `forEach`, только, как метод массива

```js
Array.from(elements).forEach((el) => {
  // Do smth...
});

// Или
[].forEach.call(elements, (el) => {
  // Do smth...
});

// Или
[].slice.call(elements, 0).forEach((el) => {
  // Do smth...
});
```

В данном случае метод массива `\[\].forEach` передается псевдомассиву `NodeList` (у которого раньше метода `forEach` не было) с помощью метода `call`.

#### 4\. Более быстрый цикл `for`

```js
for (let i = 0; i < elements.length; i++) {
  //Do smth w/ elements[i]
}
```
