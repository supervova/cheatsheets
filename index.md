---
title: 'JavaScript. Шпаргалка'
categories:
  - JavaScript
is-index: true
# has-patronymic: true
---

<section>
  <h2>Теория</h2>
  {%- include details.html title="Основы" path="js/_base/theory/base.md" -%}
  {%- include details.html title="Типы данных" path="js/_base/theory/data-types.md" -%}
  {%- include details.html title="Переменные" path="js/_base/theory/variables.md" -%}
  {%- include details.html title="Операторы" path="js/_base/theory/operators.md" -%}
  {%- include details.html title="Условные выражения" path="js/_base/theory/conditionals.md" -%}
  {%- include details.html title="События" path="js/_base/theory/events.md" id="topic-js-events" -%}
  {%- include details.html title="Циклы" path="js/_base/theory/loops.md" -%}
  {%- include details.html title="Функции" path="js/_base/theory/functions.md" -%}
  {%- include details.html title="Строки" path="js/_base/theory/string.md" -%}
  {%- include details.html title="Числа и методы объекта `Math`" path="js/_base/theory/number-and-math.md" -%}
  {%- include details.html title="Массивы" path="js/_base/theory/arrays.md" -%}
  {%- include details.html title="Объекты" path="js/_base/theory/objects.md" -%}
  {%- include details.html title="Классы" path="js/_base/theory/classes.md" id="topic-js-classes" -%}
  {%- include details.html title="Регулярные выражения" path="js/_base/theory/regex.md" -%}
  {%- include details.html title="JSON" path="js/_base/theory/json.md" -%}
  {%- include details.html title="Дата" path="js/_base/theory/date.md" -%}
  {%- include details.html title="Глобальные функции и объекты" path="js/_base/theory/global-functions.md" -%}
  {%- include details.html title="Промисы" path="js/_base/theory/promises.md" id="topic-promises" -%}
  {%- include details.html title="Модули" path="js/_base/theory/modules.md" -%}
  {%- include details.html title="Ошибки" path="js/_base/theory/errors.md" -%}
  {%- include details.html title="Правила хорошего кода" path="js/_base/theory/best-practicies.md" -%}
</section>

<section>
  <h2>Поиск и выбор элементов</h2>
  {%- include details.html title="Выбор элемента" path="js/_base/selectors/base.md" -%}
  {%- include details.html title="Перебор массива элементов" path="js/_base/selectors/elements-loop.md" id="topic-loop-nodelist" -%}
  {%- include details.html title="Получить родительский элемент" path="js/_base/selectors/parent.md" -%}
  {%- include details.html title="Выбор предка по селектору" path="js/_base/selectors/parent-closest.md" -%}
  {%- include details.html title="Получить потомков" path="js/_base/selectors/children.md" -%}
  {%- include details.html title="Получить соседей" path="js/_base/selectors/siblings.md" -%}
  {%- include details.html title="Проверка на соответствие селектору" path="js/_base/selectors/check-selector.md" -%}
  {%- include details.html title="Является ли элемент потомком/предком другого?" path="js/_base/selectors/check-descendant.md" -%}
  {%- include details.html title="Получение индекса элемента в коллекции" path="js/_base/selectors/index-position.md" -%}
  {%- include details.html title="Поиск предка с прокруткой" path="js/_base/selectors/parent-scrollable.md" -%}
</section>

<section>
  <h2>Манипуляции с DOM</h2>
  {%- include details.html title="Создать элемент или текстовой узел" path="js/_base/manipulation/create.md" -%}
  {%- include details.html title="Клонирование элемента" path="js/_base/manipulation/clone.md" -%}
  {%- include details.html title="Атрибуты: проверить наличие; получить, задать или переопределить значение; удалить" path="js/_base/manipulation/attributes-check-get-set-remove.md" -%}
  {%- include details.html title="Получение, установка, удаление data-атрибутов" path="js/_base/manipulation/attributes-data.md" -%}
  {%- include details.html title="Вставить элемент после открывающего тега будущего родителя" path="js/_base/manipulation/prepend.md" -%}
  {%- include details.html title="Вставить элемент перед закрывающим тегом будущего родителя" path="js/_base/manipulation/append.md" -%}
  {%- include details.html title="Вставить элемент до или после другого элемента" path="js/_base/manipulation/insert-el.md" -%}
  {%- include details.html title="Вставить HTML-разметку до или после элемента" path="js/_base/manipulation/insert-html.md" -%}
  {%- include details.html title="Заменить элемент" path="js/_base/manipulation/replace.md" -%}
  {%- include details.html title="«Завернуть» один элемент в другой" path="js/_base/manipulation/wrap.md" -%}
  {%- include details.html title="Удалить элемент" path="js/_base/manipulation/remove-el.md" -%}
  {%- include details.html title="Удалить все дочерние узлы элемента" path="js/_base/manipulation/remove-children.md" -%}
  {%- include details.html title="Удалить элемент, но сохранить его потомков" path="js/_base/manipulation/unwrap.md" -%}
  {%- include details.html title="Поменять два узла в DOM'е местами" path="js/_base/manipulation/swap.md" -%}
  {%- include details.html title="Шаблонные литералы" path="js/_base/manipulation/template-literals.md" id="topic-template-literal" -%}
  {%- include details.html title="Тег `template`" path="js/_base/manipulation/template.md" -%}
  {%- include details.html title="Динамическая загрузка JS" path="js/_base/manipulation/load-js-dynamically.md" -%}
</section>

<section>
  <h2>Разметка и текстовое содержание</h2>
  {%- include details.html title="Получить или задать/переопределить HTML-разметку элемента" path="js/_base/attributes-markup-text/html-of-element.md" id="topic-inner-html" -%}
  {%- include details.html title="Создать / изменить содержимое элемента" path="js/_base/attributes-markup-text/set-edit.md" -%}
  {%- include details.html title="Получить текст элемента и его потомков" path="js/_base/attributes-markup-text/get.md" -%}
  {%- include details.html title="Выделить текстовое содержимое элемента" path="js/_base/attributes-markup-text/select.md" -%}
  {%- include details.html title="Получить выделенный пользователем текст" path="js/_base/attributes-markup-text/get-selected-text.md" id="topic-get-selected-text" -%}
  {%- include details.html title="Очистить содержание элемента от HTML-разметки" path="js/_base/attributes-markup-text/strip-html.md" -%}
  {%- include details.html title="Вставить из буфера обмена чистый текст, без форматирования" path="js/_base/attributes-markup-text/paste-as-plain-text.md" -%}
  {%- include details.html title="Копировать текст в буфер обмена" path="js/_base/attributes-markup-text/copy-text-to-clipboard.md" -%}
  {%- include details.html title="Сохранить и восстановить выделение" path="js/_base/attributes-markup-text/text-selection-save-and-restore.md" -%}
</section>

<section>
  <h2>CSS</h2>
  {%- include details.html title="Добавить, удалить, переключить, заменить класс" path="js/_base/css/classes-add-remove-toggle.md" -%}
  {%- include details.html title="Проверка CSS-класса" path="js/_base/css/does-el-have-class.md" -%}
  {%- include details.html title="Получить стили элемента" path="js/_base/css/get-styles.md" -%}
  {%- include details.html title="CSS-переменные" path="js/_base/css/custom-properties.md" -%}
  {%- include details.html title="Добавление, обновление и удаление строковых стилей" path="js/_base/css/set.md" -%}
  {%- include details.html title="Показать / скрыть элемент" path="js/_base/css/toggle-element.md" -%}
  {%- include details.html title="Выделение целевой области для перетаскиваемых файлов" path="js/_base/css/highlight-el-when-dragging-over-it.md" -%}
  {%- include details.html title="Остановка прокрутки `body` при открытом модальном окне" path="js/_base/css/prevent-body-scrolling-modal-open.md" -%}
  {%- include details.html title="Показать или спрятать элемент" path="js/_base/css/toggle-element-show-hide.md" -%}
  {%- include details.html title="Динамическая загрузка стилей" path="js/_base/css/load-css-dynamically.md" -%}
  {%- include details.html title="Узнать значение по умолчанию для определенного CSS-свойства" path="js/_base/css/get-css-property-default-value.md" -%}
</section>

<section>
  <h2>События</h2>
  {%- include details.html title="Добавить / удалить обработчик события" path="js/_base/events/attach-detach-handler.md" -%}
  {%- include details.html title="Предотвращение действия по умолчанию" path="js/_base/events/prevent-default-action.md" -%}
  {%- include details.html title="Всплытие и делегирование: обработка событий на динамически созданных элементах и на массе однотипных" path="js/_base/events/bubbling-and-event-delegation.md" -%}
  {%- include details.html title="Вложенные обработчики событий" path="js/_base/events/nested-handlers.md" id="topic-nested-handlers" -%}
  {%- include details.html title="События клавиатуры" path="js/_base/events/keyboard-events.md" -%}
  {%- include details.html title="Событие прокрутки" path="js/_base/events/scroll-event.md" -%}
  {%- include details.html title="Кликнул ли пользователь за границами элемента?" path="js/_base/events/detect-outside-clicks.md" -%}
  {%- include details.html title="Проверка поддержки событий касания" path="js/_base/events/check-touch-events-support.md" -%}
  {%- include details.html title="Генерация пользовательских событий, конструктор `Event` и его потомки" path="js/_base/events/event-constructor.md" -%}
  {%- include details.html title="Предотвращение прокрутки к элементу, попавшему в фокус" path="js/_base/events/prevent-page-scrolling-to-focused-el.md" -%}
</section>

<section>
  <h2>Формы и ввод данных</h2>
  {%- include details.html title="Показать/скрыть введенный пароль" path="js/_base/form/toggle-password.md" -%}
  {%- include details.html title="Перевод строки в `textarea` только Shift+Enter'ом" path="js/_base/form/shift-enter-for-new-line.md" -%}
  {%- include details.html title="Ограничение ввода данных определенным набором символов" path="js/_base/form/enter-particular-characters-only.md" -%}
  {%- include details.html title="Подсчёт количества знаков, введенных в &lt;textarea&gt;" path="js/_base/form/characters-of-textarea.md" -%}
  {%- include details.html title="Выделить на фокусе текст в `textarea`" path="js/_base/form/select-text-of-textarea-automatically.md" -%}
  {%- include details.html title="Перенести курсор в конец введенной строки" path="js/_base/form/put-cursor-at-end-of-input.md" -%}
  {%- include details.html title="Отправить форму AJAX'ом, метод `POST`" path="js/_base/form/ajax-submit.md" id="topic-ajax-form" -%}
  {%- include details.html title="Сериализация данных формы" path="js/_base/form/serialize-form-data-into-query-string.md" -%}
  {%- include details.html title="Динамическое изменение ширины поля ввода" path="js/_base/form/resize-width-of-text-box-to-fit-content.md" -%}

</section>

<section>
  <h2>AJAX</h2>
  {%- include details.html title="Получить данные с сервера — `fetch`" path="js/_base/ajax/fetch-get-data.md" -%}
  {%- include details.html title="Послать файлы на сервер — `fetch`" path="js/_base/ajax/fetch-upload-files.md" id="topic-fetch-upload" -%}
  {%- include details.html title="Послать файлы на сервер — `XMLHttpRequest`" path="js/_base/ajax/xml-http-request.md" -%}
</section>

<section id="topic-common-checks">
  <h2>Общие проверки</h2>
  {%- include details.html title="Медиазапросы в JS" path="js/_base/checks/media-queries.md" -%}
  {%- include details.html title="Виден ли элемент в области просмотра браузера" path="js/_base/checks/is-element-in-viewport.md" id="topic-is-visible" -%}
  {%- include details.html title="Проверка: элемент в фокусе?" path="js/_base/checks/is-focused.md" -%}
  {%- include details.html title="Клик левой кнопкой или ПКМ?" path="js/_base/checks/left-or-right-mouse-click.md" -%}
  {%- include details.html title="Проверка: набор в верхнем режиме" path="js/_base/checks/caps-lock.md" -%}
  {%- include details.html title="Выполнить код, когда DOM готов и все файлы загружены" path="js/_base/checks/is-document-ready.md" -%}
  {%- include details.html title="Поддерживает ли браузер `input[type=\"date\"]`?" path="js/_base/checks/support-native-date-input.md" -%}
  {%- include details.html title="Определение мобильного браузера" path="js/_base/checks/is-it-mobile-browser.md" -%}
  {%- include details.html title="Определение темной темы ОС" path="js/_base/checks/is-it-dark-mode.md" -%}
  {%- include details.html title="Определение операционной системы" path="js/_base/checks/detect-os.md" -%}
  {%- include details.html title="Определение браузера в iOS / macOS" path="js/_base/checks/is-it-ios-macos-browser.md" -%}
  {%- include details.html title="Определение прокрутки у блока" path="js/_base/checks/is-scrollable.md" -%}
  {%- include details.html title="Определение направления выделения текста: слева направо или наоборот" path="js/_base/checks/direction-of-text-selection.md" -%}
  {%- include details.html title="Выполняет ли код в браузере или где-то ещё?" path="js/_base/checks/is-it-browser.md" -%}
</section>

<section>
  <h2>Измерения</h2>
  {%- include details.html title="Получить размеры элемента" path="js/_base/measurements/el-width-height.md" -%}
  {%- include details.html title="Получить координаты элемента" path="js/_base/measurements/el-position-relative-to-doc.md" -%}
  {%- include details.html title="Позиция элемента относительно другого" path="js/_base/measurements/el-position-relative-to-another.md" -%}
  {%- include details.html title="Получить габариты изображения" path="js/_base/measurements/image-width-height.md" -%}
  {%- include details.html title="Получить ширину и высоту документа" path="js/_base/measurements/doc-width-height.md" -%}
  {%- include details.html title="Получить файловый размер" path="js/_base/measurements/file-size.md" -%}
  {%- include details.html title="Абсолютное позиционирование элемента относительно другого" path="js/_base/measurements/el-position-absolutely-to-another.md" -%}
  {%- include details.html title="Координаты клика" path="js/_base/measurements/mouse-position-relative-to-el.md" -%}
  {%- include details.html title="Ширина полосы прокрутки" path="js/_base/measurements/scrollbar-width.md" -%}
  {%- include details.html title="Расчет ширины надписи, набранной определенным шрифтом" path="js/_base/measurements/text-width.md" -%}
</section>

<section>
  <h2>Документ, область просмотра, переходы</h2>
  {%- include details.html title="Получить или задать `title`" path="js/_base/window/title-get-set.md" -%}
  {%- include details.html title="Переадресация на другую страницу" path="js/_base/window/redirect.md" -%}
  {%- include details.html title="Вернуться на предыдущую страницу" path="js/_base/window/back-to-previous-page.md" -%}
  {%- include details.html title="Перегрузить страницу" path="js/_base/window/reload-page.md" -%}
  {%- include details.html title="Прокрутка к элементу" path="js/_base/window/scroll-to-el.md" -%}
  {%- include details.html title="Прокрутка к любой области страницы: наверх, к определенному разделу и т.д." path="js/_base/window/scroll-to-any-place-on-page.md" -%}
  {%- include details.html title="Смена favicon сайта" path="js/_base/window/change-favicon.md" -%}
</section>

См. также [практическое пособие](/js/how-to.html) и [материалы для углубленного изучения](/js/advanced-theory.html).
