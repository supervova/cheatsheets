#### Вставить до элемента `target`

```javascript
target.parentNode.insertBefore(ele, target);

// Или
target.insertAdjacentElement('beforebegin', ele);
```

#### Вставить после элемента `target`

```javascript
target.parentNode.insertBefore(ele, target.nextSibling);

// Или
target.insertAdjacentElement('afterend', ele);
```
