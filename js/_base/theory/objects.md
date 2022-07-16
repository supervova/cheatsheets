```javascript
const student = {
  // Свойства
  firstName: 'Jane',
  lastName: 'Doe',
  age: 18,
  height: 170,

  // Метод
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

/* Переопределение значения свойства и точечная
нотация — обращение к свойству через точку */
student.age = 19;
student[age] += 1;

// Вызов метода объекта
fullName = student.fullName();
```

#### DOM-коллекции

В JS всё является объектом. В том числе — так называемые DOM-коллекции. Это объекты (псевдомассивы), представляющие список узлов (DOM-элементов).

- [`HTMLCollection`](https://developer.mozilla.org/ru/docs/Web/API/HTMLCollection) — коллекция HTML-элементов;
- [`NodeList`](https://developer.mozilla.org/ru/docs/Web/API/NodeList) — коллекция DOM-узлов (кроме HTML-элементов, это текстовые узлы, комментарии и др.), возвращаемая такими это коллекция узлов, возвращаемая такими методами, как `Node.childNodes` и `document.querySelectorAll`.

DOM-коллекции бывают:

- динамическими — реагируют на изменение DOM;
- статическими — моментальный снимок данных, не реагируют на изменение DOM.

Вид коллекции зависит от способа, с помощью которого она получена: `querySelector()` и `querySelectorAll()`.

Несмотря на то, что `NodeList` не является массивом, его вполне возможно перебрать при помощи метода `forEach()`. `NodeList` также можно конвертировать в массив при помощи `Array.from()`.
