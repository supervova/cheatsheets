Для выхода в полноэкранный режим используется Fullscreen API, интерфейсы веб API и метод `requestFullscreen()`, который он добавляет объектам `Document` и `Element`.

```html
<article>
  <h1>Hello World</h1>
</article>
<button>Say it louder</button>
```

```js
const greetings = document.querySelector('article');
const button = document.querySelector('button');

const takeFullscreen = () => {
  greetings.requestFullscreen();
};

button.addEventListener('click', takeFullscreen);
```
