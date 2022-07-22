```js
const parent = el.closest('.some-top-level-container');
```

Метод `Element.closest()` возвращает ближайший родительский элемент (или сам элемент) по CSS-селектору или `null`, если таковых элементов вообще нет.

```html
<article>
  <div class="granny">Большая матрешка
    <div class="mommy">Средняя матрешка
      <div id="child">Маленькая матрешка</div>
    </div>
  </div>
</article>
```

```js
// Находим элемент, чьи предки нас интересуют
const el = document.getElementById('child');

// Находим ближайшего предка с классом .mommy
const r1 = el.closest('.mommy');

/* В эту переменную будет сохранен сам элемент
.child, так как closest возвращает и сам элемент,
если он соответствует селектору.
В данном случае — div'у вложенному в div */
const r2 = el.closest('div div');

/* Здесь мы выбрали .granny — первый div,
являющийся прямым потомком article */
const r3 = el.closest('article > div');

/* Здесь мы выбрали article — первого предка,
не являющегося div'ом */
const r4 = el.closest(':not(div)');
```
