Мы можем прокрутить документ к любым указанным координатам…

```js
window.scrollTo(pageX, pageY);
```

…В том числе — к нулевым, началу документа.

```js
window.scrollTo(0, 0);
```

Для плавности можно использовать в стилях `scroll-behavior: smooth` или передать опции в параметры.

```js
window.scrollTo({
  top: 1000,
  left: 0,
  behavior: 'smooth',
})
```

#### Сценарии использования

- Кнопка «Наверх».
- В SPA (одностраничных веб-приложениях) при «переходе» на другую страницу. Браузер сохраняет позцию документа в окне просмотра, поэтому, чтобы пользователь понял, что страница сменилось нужно прокрутить её вверх. Ниже показан пример React-приложения, использующего React Router.

```js
import { useLocation } from 'react-router-dom';

export default ({ children }) => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Do smth...
};
```
