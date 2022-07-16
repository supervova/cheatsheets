#### Добавить стили

```javascript
ele.style.backgroundColor = 'red';
ele.style['backgroundColor'] = 'red';
ele.style['background-color'] = 'red';
```

#### Обновить стили

Можно обновить или заменить несколько уже созданных стилей через свойство `cssText`.

```javascript
// Добавить к существующим
el.style.cssText += 'color: white; margin: 8px';

// Заменить существующие
el.style.cssText = 'color: white; margin: 8px';
```

#### Удалить стили

```javascript
ele.style.removeProperty('background-color');

/* ⚠️ «Верблюжий регистр» в методе `removeProperty`
не сработает */
ele.style.removeProperty('backgroundColor');
```
