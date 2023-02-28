Привязка данных означает способы взаимодействия интерфейса и модели (бизнес-логики).

В случае односторонней привязки одна сторона реагирует на изменения, вторая нет. При двусторонней обе реагируют на изменения друг друга.

В обоих случаях привязку можно осуществлять через стандартные селекторы HTML-элементов или, обращаясь к объекту события в DOM.

#### Двухсторонняя привязка (связывание) данных

Two-way data binding - это механизм, который связывает данные веб-приложения между представлением (view) и моделью (model). То есть, когда изменяются данные в модели, это автоматически отображается в представлении, и когда изменяются данные в представлении, они также обновляются в модели. Это упрощает поддержку и улучшает пользовательский опыт, поскольку пользователь видит моментальные изменения в данных.

Angular и Vue реализуют двухстороннее связывание under the hood, но можно реализовать привязку и на HTML и ванильном JS.

```html
<!-- Простейший пример -->
<input id="inputField" type="text">
<span id="outputField"></span>

<script>
  const inputField =
    document.getElementById("inputField");
  const outputField =
    document.getElementById("outputField");

  inputField.addEventListener("input", () => {
    outputField.innerHTML = inputField.value;
  });

  outputField.addEventListener("input", () => {
    inputField.value = outputField.innerHTML;
  });
</script>
```

```html
  <!-- Посложнее -->
  Name:
  <input data-bind="name" type="text">
  <span data-bind="name"></span>

  Surname:
  <input data-bind="surname" type="text">
  <span data-bind="surname"></span>

  <button onclick="log()">See Scope Values</button>
  <button onclick="changeNameByCode()">
    Change Name By Code
  </button>
  <button onclick="changeSurnameByCode()">
    Change Surname By Code
  </button>
```

```js
(() => {
  // Выбираем связываемые поля ввода
  const elements = document.querySelectorAll(
    '[data-bind]'
  );

  /* Объект, в котором будут храниться значения
  полей */
  const scope = {};

  // Перебираем всем элемент с атрибутом data-bind
  elements.forEach((element) => {

    /**
     * Функция для установки и получения свойств
     * объекта scope.
     * Получает в параметр param название атрибута.
     * Объявляет переменную value для нового
     * значения.
     * Вызывает defineProperty на объекте scope.
     * В сеттере defineProperty в связанные поля
     * передается новое значение.
     * Геттер возвращает значение переменной value.
     */
    function addScopeProp(prop) {

      // eslint-disable-next-line no-prototype-builtins
      if (!scope.hasOwnProperty(prop)) {
        // переменная для нового значения
        let value;

        /* Метод Object.defineProperty() определяет
        новое или изменяет существующее свойство
        непосредственно на объекте, возвращая этот
        объект. */
        Object.defineProperty(scope, prop, {
          // Сеттер - обновляем значения полей ввода
          set(newValue) {
            value = newValue;

            elements.forEach((el) => {
  
              if (
                el.getAttribute('data-bind') ===
                prop
              ) {

                if (
                  el.type &&
                  (
                    el.type === 'text' ||
                    el.type === 'textarea'
                  )
                ) {
                  el.value = newValue;
                } else if (!el.type) {
                  el.innerHTML = newValue;
                }
              }
            });
          },

          // Геттер - передаем значения в поля
          get() {
            return value;
          },
          enumerable: true,
        });
      }
    }

    // Выполняем сеттер
    if (
      element.type === 'text' ||
      element.type === 'textarea'
    ) {
      const propToBind = element.getAttribute(
        'data-bind'
      );
      addScopeProp(propToBind);
      element.onkeyup = () => {
        scope[propToBind] = element.value;
      };
    }
  });

  const log = () => {
    Object.keys(scope).forEach((key) => {
      console.log(`${key}: ${scope[key]}`);
    });
  };

  const changeNameByCode = () => {
    scope.name = 'name Changed by Code';
  };

  const changeSurnameByCode = () => {
    scope.surname = 'surname Changed by Code';
  };
})();
```

#### Односторонняя привязка (связывание) данных

Означает, что изменения в модели отображаются в представлении, но изменения в представлении не отображаются в модели. Но это не значит, что однонаправленный поток делает невозможным обновление состояния из интерфейса. Это означает только то, что такие обновления делаются намеренно, а не автоматичечски, как в случае с двусторонней привязкой.

Такой подход, в частности использует React. Это сделано для того, чтобы [улучшить производительность и упростить управление состоянием приложения](https://medium.com/devschacht/справочник-современных-концепций-javascript-часть-2-8ecf07f3f36a#8f95){:target="_blank"}. В React используется явное управление состоянием, что позволяет лучше понимать, как и когда данные меняются, и как это влияет на представление. Это также позволяет лучше следить за историей изменений в приложении.

В случае с односторонней привязкой на элемент DOM устанавливается событийный атрибут — `oninput`, `onchange` etc – с вызовом метода компонента. Взаимодействие с элементом DOM запускает метод-обработчик.

Обработчик узнает об элементе, сгенерировавшем событие по свойству `event.target`.

Простейшие примеры.

```html
<script>
  function myAlert(event) {
    alert(event.target.value);
  }

  function myWordCounter(e) {
    const { value } = e.target;
    const numWords =
      value.split(' ').filter(Boolean).length;
    document.getElementById('demo').innerHTML =
      `You wrote: ${numWords}`;
  }
</script>

<input type="text" oninput="myAlert(event)">
<input type="text" oninput="myWordCounter(event)">
<p id="demo"></p>
```

Современные фреймворки, как правило отдают предпочтение односторонней привязке.
