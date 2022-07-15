# TODO

Notes ➜ Development ➜ Фреймворки и CMS ➜ SSG ➜ Jekyll ➜ 1. ❤️ Новый Jekyll-сайт

## Шпаргалки (cheatsheets.super-mark.ru )

12. Настроить сборку непосредственно на Github Pages
https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll

13. Настроить CNAME на reg.ru (сначала CNAME нужно сохранить yf github)

14. Закончить HOW-TO

https://htmldom.dev/

{%- include details.html title="" path="how-to/dragging/.md" -%}
Make a resizable element

{%- include details.html title="" path="how-to/general/.md" -%}
Scroll to an element smoothly (Пользовательская настройка анимации)

{%- include details.html title="" path="how-to/media-and-data/.md" -%}
Resize columns of a table
Show or hide table columns
Sort a table by clicking its headers
Zoom an image

15. В папке _topics найти и заменить: ele на el.
(ele)
, ele)
 ele.
`ele`
^ele.
[^\w]ele[^\w>\\]

16. Прочитать [подсказку CodeAcademy](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/cheatsheet) и добавить сюда то, что покажется важным.

17. Сделать третий файл — advanced-theory.

18. Перечитать конспекты и дополнительные материалы и перенести в index и advanced-theory то, что кажется важным. Сложные и не перспективные с точки зрения практики темы только упоминать — собрать в блок ссылок на статьи в W3School, MDN и Современном учебнике.

А вот темы, которые нужно перенести сюда в виде конспектов:

- ~/Sites/notes/👨🏻‍💻 development/js/cheatsheet.md

- Base
  Типы данных
    Примитивные и составные
  Переменные
  Операторы
  Циклы
  Условные конструкции (включая)
- Функции
  параметры и аргументы: «Аргументы – это значения, которые передаём функции в момент её вызова».
  return, возвращаемое значение
  функции, не возвращающие значения
  https://www.w3schools.com/js/js_this.asp
  https://www.w3schools.com/js/js_arrow_function.asp
  https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/#when-you-should-not-use-arrow-functions
  объявление функции и функциональное выражение: 👨🏻‍💻 development/js/cheatsheet.md
  https://learn.javascript.ru/function-expressions
  функция обратного вызова (обработчик события)
  Слушатели
- DOM.

- Regex
  👨🏻‍💻 development/js/05-regex/
    cheat-sheet.md
    recipes.md
    (сделать не таблицами, а открывашками)

- [Использование return false; для раннего выхода из функций](https://www.jsdiaries.com/how-to-exit-out-of-a-function-in-javascript/)
- [Связывание](https://ru.hexlet.io/courses/js-introduction-to-oop/lessons/bind/theory_unit)
- Деструктуризация
👨🏻‍💻 development/js/
  03-functions/04-parameters-destructuring-assignment.md
  05-array/destructuring.md
  04-01-objects/destructuring.md
- Классы и ООП
👨🏻‍💻 development/js/04-03-classes/*
  - [Полное руководство по классам JavaScript](https://webdevblog.ru/polnoe-rukovodstvo-po-klassam-javascript/)

- Когда не надо использовать [стрелочные функции](https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/)
- [Стандартные встроенные объекты](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects)

- MS To-do ➜ На очереди ➜ 👨🏻‍🎓 Программирование — основы ➜ Шпаргалка

## 01-boilerplate (boilerplate.super-mark.ru)

1) Заново собрать pproject — на основе:
- [WaterCSS](https://github.com/kognise/water.css/tree/master/src/parts)
- [PicoCSS](https://github.com/picocss/pico/tree/master/scss)
- [Milligram](https://github.com/milligram/milligram/tree/master/src)
- pproject-YYYY/2021

[Таблица структур](https://bit.ly/3yII57A)

- Писать на SCSS — ради молчаливых селекторов, примесей, вложенных медиазапросов, циклов для создания классов-утилит.
- Все плюшки, которые могут когда-нибудь пригодиться собирать в src/stock.
- Там где можно отказаться от классов — например, в полях ввода, отказываться. Но, не делать отказ от классов самоцелью.
  Например, там где нужны модификаторы — is-primary, is-2ry etc — очевидно, нужны и безовые классы. Поэтому, ориентируемся на milligram:
  ```
  .button,
  button,
  input[type='button'],
  input[type='reset'],
  input[type='submit']
  ```

- БЭМ — для сложной вёрстки промо-блоков и крупных компонентов. Там где можно избежать сложных названий классов, использовать схему .parent tag / .parent .child.

Логика тут такая.

С одной стороны, скорая реализация [@scope](https://drafts.csswg.org/css-cascade-6/#scoped-styles), позволяет просто избегать конфликтов каскада.

```css
@scope (.article) {
  header {
    color: var(--text);
  }

  .content {
    width: min(100%, 64rem);
  }
}
```

До того, как поддержка браузерами достигнет 90%, можно делать правила  .parent .child / .parent tag вложениями — затем будет проще заменить родительский селектор на `@scope`.

Элементы глобального уровня, названия которых могут повторяться на уровне компонентов — .header, .footer etc — можно писать сразу с модификатором .is-global.

Однако сложность современной верстки со множеством вложенных div'ов, вынудит меня использовать заковыристые селекторы типа: .section picture + div > p.
И в таком контексте БЭМ-селекторы выглядят, конечно, предпочтительнее.

```pug
article.section.is-performance
  .section__content
    .section__header
      picture.section__image.is-top
        source(srcset='' media='')
        img(src='' alt)

      h2.section__eyebrow Performance
      .section__copy.large#{:}9.medium#{:}11.small#{:}12
        p Lorem ipsum dolor sit amet

    .section__badges.row.large#{:}6.large#{:}centered.medium#{:}9.small#{:}10
      figure.kpi
        span.kpi__caption Up to
        span.kpi__value 1.4x
      figure.kpi
        span.kpi__caption Up to
        span.kpi__value 15x

    .section__base
      picture.section__image.is-main
        source(srcset='' media='')
        img(src='' alt)
```

- Уже сейчас использовать [@layer](https://www.smashingmagazine.com/2022/01/introduction-css-cascade-layers/#combining-cascade-layers-and-preprocessor-includes):

```scss
@layer reset url(reset.css);
// альтернативный синтаксис
@import url(bootstrap.css) layer(bootstrap);
@layer base url(base.css);
@layer components url(components.css);
@layer variations url(variations.css);
@layer pages url(pages.css);
```

- Уже сейчас использовать [@use](~/Sites/notes/👨🏻‍💻 development/styles/misc/use.md)

- Сетку сделать на основе Bootstrap'овской, grid-based. Потому что она не нуждается в padding'е колонок. И ее можно использовать в формах вместо .form__row и .form__item — также, как в других блоках макета.

Полезно изучить аналогичную технику Tailwind[https://tailwindcss.com/docs/grid-column] и сократить количество адаптивных классов.

.grid, .column, .col-1o3, .col-1o2, .col-2o3
[sm-xl]:[col-1o4, col-3o4, col-start-*]
[lg,xl]:[.col-1, .col-2, .col-5, .col-7, .col-9, .col-10., .col-11, .col-12]

В src/stock определить .grid-5 и [md,lg,xl]:[1o5,2o5,3o5,4o5].

(Использованию удобочитаемой маркировки адаптивных классов — small, medium, large, как у Apple — мешают планы использования утилит BS: d-md-none etc. Да и вообще, когда утилит несколько длинные слова в классах будут, напротив, затруднять чтение кода).

Не думаю, что очень полезны специальные классы col-end-*, как у [Tailwind](https://tailwindcss.com/docs/grid-column#starting-and-ending-lines).
Но классы ширины col-* лучше делать, как у [Tailwind](https://tailwindcss.com/docs/grid-column): .col-4	{ grid-column: span 4 / span 4;}. Так, предположительно, не будет конфликта с модификаторами .col-start-* , потому что использование ключевого слово `span` в обоих частях значения свойства, означает, что начало и конец блока лежит на равном удалении друг от друга.
У BS в первой части используется слово auto, что потенциально может конфликтовать с .col-start-*.

Для d-*[flex-, flex-inline] надо выбрать утилиты: direction, justify и align.

По хорошему, миксины утилит BS надо стырить, изменив стиль названий адаптивных классов на Tailwind-like: md:d-none, lg:d-flex…

2) Сделать открытый сине-желтый диалог на первую страницу. Я — гражданин Росии, но Слава Україні! Добро переможе!

3) Перенести в ~/Sites/01-boilerplate/docs/ из supermark'а: gulpfile.babel, _config.yml, package.json, Gemfile. Отладить сборку. Посмотреть, как сейчас выглядит сайт дизайн-системы.

4) Дублировать в Figm'е файл 01-qwerty-boilerplate и на его основе создать 02-vn-boilerplate.

5) Разработать цветовую гамму по текущему алгоритму.

6) Сделать простенький макет. Как в [Pico](https://picocss.com/docs/) или [MD2](https://material.io/components/buttons). Только без «шапки» на всю ширину страницы.
По содержанию также ориентироваться на Pico — также на первых порах очень лаконично. Чтобы можно было просто перевести на английский.

7) Для первой страницы сделать какую-нибудь красивую абстрактную картинку по мотивам каньона Антилопы с вписанными буквами и геометрическими фигурами (поиск Typography и https://www.pinterest.ru/supervova/design-inspiration/geometry/ в Pinterest) список планируемых конспектов. Добавить ссылки на https://super-mark.ru и https://super-mark.ru/ru/blog/. Добавить CNAME blog.supermark.ru.

8) Обновить 01-boilerplate согласно pproject'у.

9) Опубликовать 01-boilerplate на Github Pages.

10) Законспектировать экспертные материалы по ключевым UI-элементам, каждый новый публиковать в 01-boilerplate. Ссылку давать из раздела блога, также, как и на обычные посты.

- Base - Typography (базовая размерная шкала для мобильных по HIG — cм. Notes; но также учитывать материалы Material Design)
  См. все статьи в избранных системах дизайн-матрицы. А также:
  https://protocol.mozilla.org/patterns/atoms/typographic.html
- Base - Link
- Base - Button
- Base - Icon
- Input - Text Field
- Input - Radio Button
- Input - Checkbox
- Input - Select
- Base - Layout
  https://www.w3.org/WAI/ARIA/apg/example-index/landmarks/index.html

- Actions - Toolbar
- Actions - Menu
- Content - Table
- Hide/Show - Accordion
- Hide/Show - Dialog (Modal)
- Hide/Show - Tabs
- Hide/Show - Tooltip
- Feedback - Alert
- Input - Combobox
- Input - Number
- Input - Slider
- View - Split
- View - Tree

- Base - Color

Схема конспектов
- Что это?
- В каких случаях использовать?
- Анатомия
- Поведение и состояния
- Доступность
- [Уникальные разделы компонента]
- Спецификации
- Код

Do и Don't делать внутри разделов

13) «Грокаем алгоритмы»

14) C++
https://javarush.ru/quests/lectures/questharvardcs50.level02.lecture05

15) Доделать шпаргалку JS

- HTML APIs
  - Blob: [1](https://developer.mozilla.org/ru/docs/Web/API/Blob), [2](https://learn.javascript.ru/blob), [3](https://docs.microsoft.com/en-us/answers/questions/480791/what-is-the-difference-between-storing-documents-i.html#answer-481051)
  - [Гео](https://www.w3schools.com/html/html5_geolocation.asp)
  - [Drag and drop](https://www.w3schools.com/html/html5_draganddrop.asp)
  - [Веб хранилище](https://www.w3schools.com/html/html5_webstorage.asp)
  - [Web Workers](https://www.w3schools.com/html/html5_webworkers.asp)
  - [Server-sent events](https://www.w3schools.com/html/html5_serversentevents.asp)

- [Модули](https://learn.javascript.ru/modules-intro)
- Webpack (вынести в отдельную шпаргалку)
/👨🏻‍💻 development/react/07-build/*
- [Веб-компоненты](https://learn.javascript.ru/web-components)
- [CanIuse DevTools](https://www.canidev.tools/) - раздел JS; надо клинкуть на чекбокс, чтобы открыть инструкции

В advanced-theory:
[\[\].slice.call()](https://www.stevenchang.tw/blog/2020/05/23/JavaScript-slice-call-function)
[What is the purpose of calling Array.prototype.slice against a NodeList?](https://stackoverflow.com/questions/21921282/what-is-the-purpose-of-calling-array-prototype-slice-against-a-nodelist)
[Поверхностное и глубокое копирование](https://doka.guide/js/shallow-or-deep-clone/)

- [What is the difference](https://thisthat.dev/)
- [Favorite JavaScript Utilities](https://1loc.dev/)

15) Затем перейти к изучению Dart/Flutter
