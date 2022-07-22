#### Добавить стили

```js
el.style.backgroundColor = 'red';
el.style['backgroundColor'] = 'red';
el.style['background-color'] = 'red';
```

#### Обновить стили

Можно обновить или заменить несколько уже созданных стилей через свойство `cssText`.

```js
// Добавить к существующим
el.style.cssText += 'color: white; margin: 8px';

// Заменить существующие
el.style.cssText = 'color: white; margin: 8px';
```

#### Удалить стили

```js
el.style.removeProperty('background-color');

/* ⚠️ «Верблюжий регистр» в методе `removeProperty`
не сработает */
el.style.removeProperty('backgroundColor');
```
