```js
function index(item, collection) {
  return [].slice
    .call(document.querySelectorAll(collection))
    .indexOf(document.querySelector(item));
}

console.log(index('#item', '.collection'));
```
