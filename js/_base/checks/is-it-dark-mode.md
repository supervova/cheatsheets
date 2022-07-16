Темную тему операционной системы macOS или Windows 10 можно определить с помощью медиазапроса `prefers-color-scheme` и его значений: `light`, `dark` и `no-preference`

```javascript
const isDarkMode =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;
```
