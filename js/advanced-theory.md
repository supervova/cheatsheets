---
title: 'JavaScript. Теория — углубленное изучение'
categories:
  - JavaScript
# has-patronymic: true
---

<section>
  <h2>Общие темы</h2>
  {%- include details.html title="Ключевое слово `this` и контекст (контекст выполнения)" path="_advanced/common/context-and-this.md" id="topic-context" -%}
  {%- include details.html title="Явное указание `this`: методы `call()`, `apply()`" path="_advanced/common/binding-call-and-apply.md" id="topic-common-call-apply" -%}
  {%- include details.html title="Привязка контекста к функции / методу - `bind`()" path="_advanced/common/binding-bind.md" id="topic-common-bind" -%}
</section>

<section>
  <h2>Условия и циклы</h2>
  {%- include details.html title="`if...else`" path="_advanced/control-structures/if-else.md" id="topic-if-else" -%}
  {%- include details.html title="`switch`" path="_advanced/control-structures/switch.md" id="topic-switch" -%}
  {%- include details.html title="`for`" path="_advanced/control-structures/loop-for.md" id="topic-loop-for" -%}
</section>

<section>
  <h2>Функции</h2>
  {%- include details.html title="Оператор `return`" path="_advanced/functions/return.md" id="topic-functions-return" -%}
  {%- include details.html title="Вызов (call) функции" path="_advanced/functions/call.md" id="topic-functions-call" -%}
  {%- include details.html title="Любая функция — это объект. И любая функция — это метод" path="_advanced/functions/object.md" id="topic-functions-object" -%}
  {%- include details.html title="Функции высшего порядка (или функции первого класса)" path="_advanced/functions/first-class.md" id="topic-functions-first-class" -%}
  {%- include details.html title="Локальные переменные" path="_advanced/functions/local-variables.md" id="topic-functions-local-variables" -%}
  {%- include details.html title="Параметры по умолчанию" path="_advanced/functions/parameters-default-values.md" id="topic-functions-parameters-default-values" -%}
  {%- include details.html title="Анонимные функции" path="_advanced/functions/anonymous.md" id="topic-functions-anonymous" -%}
  {%- include details.html title="Стрелочные функции" path="_advanced/functions/arrow.md" id="topic-functions-arrow" -%}
  {%- include details.html title="Функция обратного вызова, callback" path="_advanced/functions/arrow.md" id="topic-functions-callback" -%}
  {%- include details.html title="Деструктуризация в параметрах" path="_advanced/functions/parameters-destructuring-assignment.md" id="topic-functions-parameters-destructuring" -%}
  {%- include details.html title="Остаточные параметры, оператор расширения и псевдомассив `arguments`" path="_advanced/functions/rest-parameters-spread-operator.md" id="topic-functions-rest-parameters-spread-operator" -%}
  {%- include details.html title="Замыкание (closure) и самовызывающиеся функции" path="_advanced/functions/closure-and-self-invoking-expressions.md" id="topic-functions-closure" -%}
  {%- include details.html title="Рекурсивные функции" path="_advanced/functions/recursion.md" id="topic-functions-recursion" -%}
</section>

<section>
  <h2>Объекты</h2>
  {%- include details.html title="Введение" path="_advanced/objects/overview.md" id="topic-objects-overview" -%}
  {%- include details.html title="Свойства" path="_advanced/objects/properties.md" id="topic-objects-properties" -%}
  {%- include details.html title="Методы" path="_advanced/objects/methods.md" id="topic-objects-methods" -%}
  {%- include details.html title="Прототип объекта" path="_advanced/objects/prototype.md" id="topic-objects-prototype" -%}
  {%- include details.html title="Добавление или удаление свойств и методов" path="_advanced/objects/add-remove-method-property.md" id="topic-objects-add-remove-methods-properties" -%}
  {%- include details.html title="`Object.defineProperty` — изменение или добавление свойства" path="_advanced/objects/define-property.md" id="topic-objects-define-property" -%}
  {%- include details.html title="Метод `Object.assign()` — копирование свойств" path="_advanced/objects/assign-copy-properties.md" id="topic-objects-assign-copy-properties" -%}
  {%- include details.html title="Другие встроенные методы объекта" path="_advanced/objects/built-in-methods.md" id="topic-objects-built-in-methods" -%}
  {%- include details.html title="Добавление объекта в массив" path="_advanced/objects/add-to-array.md" id="topic-objects-add-to-array" -%}
  {%- include details.html title="Сравнение объектов" path="_advanced/objects/comparison.md" id="topic-objects-comparison" -%}
  {%- include details.html title="Деструктурирующее присваивание или просто деструктуризация" path="_advanced/objects/destructuring.md" id="topic-objects-destructuring" -%}
  {%- include details.html title="Объединение объектов" path="_advanced/objects/joining-and-spread-operator.md" id="topic-objects-joining-and-spread-operator" -%}
  {%- include details.html title="Аксессоры: «геттеры» и «сеттеры»" path="_advanced/objects/accessors-getters-and-setters.md" id="topic-objects-getters-setters" -%}
  {%- include details.html title="Передача объектов в функции — в качестве аргументов" path="_advanced/objects/using-in-functions.md" id="topic-objects-using-in-functions" -%}
</section>

<section>
  <h2>Встроенные объекты и глобальные свойства и методы</h2>
  {%- include details.html title="Встроенные объекты" path="_advanced/built-in-objects/overview.md" id="topic-built-in-objects" -%}
  {%- include details.html title="Глобальные свойства и методы JS" path="_advanced/built-in-objects/global.md" id="topic-built-in-global" -%}
  {%- include details.html title="Объект `Date`" path="_advanced/built-in-objects/date.md" id="topic-built-in-date" -%}
  {%- include details.html title="Объект `Math`" path="_advanced/built-in-objects/math.md" id="topic-built-in-math" -%}
  {%- include details.html title="Метод `Math.random()` и простой генератор случайных чисел" path="_advanced/built-in-objects/math-random.md" id="topic-built-in-math-random" -%}
  {%- include details.html title="`NaN` / `isNaN()`, `isFinite()`" path="_advanced/built-in-objects/nan-isnan.md" id="topic-built-in-nan-isnan" -%}
</section>

<section>
  <h2>Классы</h2>
  {%- include details.html title="Общие сведения" path="_advanced/classes/base.md" id="topic-classes" -%}
  {%- include details.html title="Наследование" path="_advanced/classes/inheritance.md" id="topic-classes-inheritance" -%}
  {%- include details.html title="Наследование — методы `hasOwnProperty`, `isPrototypeOf`" path="_advanced/classes/inheritance-check.md" id="topic-classes-hasownproperty-isprototypeof" -%}
  {%- include details.html title="Наследование — `instanceof`" path="_advanced/classes/inheritance-instanceof.md" id="topic-classes-instanceof" -%}
  {%- include details.html title="Добавление или удаление свойств и методов класса, `prototype`" path="_advanced/classes/add-remove-method-property.md" id="topic-classes-add-remove-method-property" -%}
  {%- include details.html title="Аксессоры — «геттеры» и «сеттеры» — класса" path="_advanced/classes/getters-and-setters.md" id="topic-classes-getters-and-setters" -%}
  {%- include details.html title="Приватные и публичные поля классов, инкапсуляция" path="_advanced/classes/public-private-fields.md" id="topic-classes-public-private-fields" -%}
  {%- include details.html title="Создание нового объекта, экземпляра класса. Доступ к его свойствам и методам" path="_advanced/classes/new.md" id="topic-classes-new-instance" -%}
  {%- include details.html title="Состояние и stateful-компоненты" path="_advanced/classes/new.md" id="topic-classes-stateful-components" -%}
  {%- include details.html title="Предки классов — функции-конструкторы" path="_advanced/classes/deprecated-constructor-function.md" id="topic-classes-deprecated-constructor-function" -%}
</section>

<section>
  <h2>Советы и ссылки</h2>
  {%- include details.html title="14 советов по оптимизации" path="_advanced/best-practicies-perfomance.md" id="topic-performance-tips" -%}
  {%- include details.html title="Полезные ссылки" path="_advanced/links.md" -%}
</section>

См. также [шпаргалку](/) и [практическое руководство](/js/how-to.html).
