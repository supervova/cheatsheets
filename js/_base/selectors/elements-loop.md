#### 1\. Рекомендовано: циклом `forEach`

```javascript
const elements =
  document.querySelectorAll('.my-element');

elements.forEach((ele) => {
  console.log(ele);
  // Do smth useful...
});
```

#### 2\. Тоже, но еще и с оператором расширения (`spread`-оператором)

```javascript
[...elements].forEach((ele) => {
  // Do smth
});
```

#### 3\. Тот же `forEach`, только, как метод массива

```javascript
Array.from(elements).forEach((ele) => {
  // Do smth...
});

// Или
[].forEach.call(elements, (ele) => {
  // Do smth...
});

// Или
[].slice.call(elements, 0).forEach((ele) => {
  // Do smth...
});
```

В данном случае метод массива `\[\].forEach` передается псевдомассиву `NodeList` (у которого раньше метода `forEach` не было) с помощью метода `call`.

#### 4\. Более быстрый цикл `for`

```javascript
for (let i = 0; i < elements.length; i++) {
  //Do smth w/ elements[i]
}
```
