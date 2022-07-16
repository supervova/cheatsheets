**Задача**. Масштабировать изображение на заданное в процентах значение. Для выбора картинки есть `#upload[type='file']`, для предпросмотра — пустой `div#preview`.

```javascript
const picture = document.getElementById('upload').files[0];
const previewEle = document.getElementById('preview');

/**
* Получение объекта Blob из data URL
*
* Если браузер не поддерживает метод `canvas.toBlob`,
* конвертируем data URL изображения, полученный
* из функции `resize`, в объект Blob.
*
* @param { string } url data URL изображения
*/
const dataUrlToBlob = (url) => {
  const arr = url.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const str = atob(arr[1]);
  let { length } = str;
  const uintArr = new Uint8Array(length);
  while (length--) {
    uintArr[length] = str.charCodeAt(length);
  }
  return new Blob([uintArr], { type: mime });
};

/**
* Масштабирование изображения
*
* @param { object } image изображение
* @param { number } ratio коэффициент сжатия: 0.01 - 0.99
*/
const resize = (image, ratio) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // Читаем файл
    reader.readAsDataURL(image);

    // После загрузки изображения
    reader.addEventListener('load', (e) => {
      // Создаем объект типа `Image`
      const ele = new Image();
      ele.addEventListener('load', () => {
        // Создаем холст
        const canvas = document.createElement('canvas');

        /* Выводим на холсте заглушку масштабированного
        изображения */
        const context = canvas.getContext('2d');
        const w = ele.width * ratio;
        const h = ele.height * ratio;
        canvas.width = w;
        canvas.height = h;
        context.drawImage(ele, 0, 0, w, h);

        // Получаем данные масштабированной картинки
        'toBlob' in canvas
          ? canvas.toBlob((blob) => {
              resolve(blob);
            })
          : resolve(dataUrlToBlob(canvas.toDataURL()));
      });

      // Задаем атрибут `src`
      ele.src = e.target.result;
    });

    reader.addEventListener('error', () => {
      reject();
    });
  });
};
```

Как только мы получаем Blob масштабированной картинки, мы можем просмотреть ее на странице или отослать на сервер, как часть `FormData`.

```javascript
// Уменьшаем картинку на 50%
resize(picture, 0.5).then((blob) => {
  // Предпросмотр
  previewEle.src = URL.createObjectURL(blob);
});
```
