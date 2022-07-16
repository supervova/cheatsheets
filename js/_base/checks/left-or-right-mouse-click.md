Определять можно по событию `mousedown` или `mouseup`.

```javascript
ele.addEventListener('mousedown', (e) => {
  // e.button === 0: the left button is clicked
  // e.button === 1: the middle button is clicked
  // e.button === 2: the right button is clicked
  // e.button === 3: the `Browser Back` button is clicked
  // e.button === 4: it's the `Browser Forward` button
});
```
