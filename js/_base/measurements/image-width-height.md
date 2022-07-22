#### Изображение уже загружено

```js
const image = document.querySelector(...);

// Исходные размеры
const naturalWidth = image.naturalWidth;
const naturalHeight = image.naturalHeight;

// Размеры масштабированного изображения
const width = image.width;
const height = image.height;
```

#### Изображение еще не загружено

Первым делом создаем тег изображения и слушаем событие `load`, чтобы вычислить размер изображения, загружаемое с указанного URL…

```js
const image = document.createElement('img');

image.addEventListener('load', (e) => {
  const width = e.target.width;
  const height = e.target.height;
});

/* …Устанавливаем атрибут `src` и колбэк
в слушателе вернет нам размеры */
image.src = '/path/to/image.png';
```

Мы можем использовать объект `Promise`, чтобы превратить предыдущий сниппет в функцию.

```js
const calculateSize = (url) => {
  return new Promise((resolve, reject) => {
    const image = document.createElement('img');
    image.addEventListener('load', (e) => {
      resolve({
        width: e.target.width,
        height: e.target.height,
      });
    });
    
    image.addEventListener('error', () => {
      reject();
    });
    
    image.src = url;
  });
};

calculateSize('/path/to/image.png').then((data) => {
  const width = data.width;
  const height = data.height;
});
```

#### Сценарий использования

Задача — показать пользователю размер изоборажения, которое он хочет загрузить в качестве аватара.

Поставим слушателя на поле `#avatar[type="file"]`. Загрузим выбранный файл через объект `FileReader`. Получим размеры с помощью созданной ранее функции `calculateSize`.

```html
<input type="file" id="avatar">
<div id="size"></div>
```

```js
const avatarEle = document.getElementById('avatar');
const sizeEle = document.getElementById('size');

avatarEle.addEventListener('change', (e) => {
  // Получаем выбранный файл
  const file = e.target.files[0];
  
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener('loadend', (e) => {
    const src = e.target.result;
    
    calculateSize(src).then((data) => {
      const width = data.width;
      const height = data.height;
      
      sizeEle.innerHTML = `${width} x ${height}`;
    });
  });
});
```
