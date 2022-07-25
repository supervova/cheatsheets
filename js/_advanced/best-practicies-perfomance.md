# 14 советов по оптимизации

[Источник](https://webformyself.com/14-sovetov-po-optimizacii-koda-javascript-dlya-front-end-razrabotchikov/)

## 1. Удалить неиспользуемый код и функции

Чем больше кода содержится в приложении, тем больше данных необходимо передать клиенту, а браузеру потребуется больше времени для анализа и интерпретации кода.

Не надо включать в сборку неиспользуемые функции — пусть они хранятся в папках исходниках.

Неиспользуемый код можно удалить вручную, a также при сборке с UglifyJS или [Google Closure Compiler](https://developers.google.com/closure/compiler/docs/api-tutorial3).

При сборке webpack'ом применяют  [технику «встряхивания дерева»](https://bluepnume.medium.com/javascript-tree-shaking-like-a-pro-7bf96e139eb7).

Неиспользуемые пакеты npm, можно удалить командой `npm prune`.

## 2. Кешировать

Использовать [Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache) или [HTTP-кэширования](https://developer.mozilla.org/ru/docs/Web/HTTP/Caching).

## 3. Избегайте утечек памяти

Будучи языком высокого уровня, JS заботится о нескольких низкоуровневых системах управления, таких как управление памятью. Сборка мусора — это процесс, общий для большинства языков программирования. Сборка мусора с точки зрения непрофессионала — это просто сбор и освобождение памяти, которая была выделена объектам, но которая в настоящее время не используется. В таких языках программирования, как C, разработчик должен позаботиться о распределении и освобождении памяти, используя функции `malloc()` и `dealloc()`.

Даже если сборка мусора выполняется в JavaScript автоматически, могут быть определенные случаи, когда она не будет идеальной. В JavaScript ES6 `Map` и `Set` были представлены со своими «более слабыми» братьями и сестрами. Этот «более слабый» аналог, известный как [WeakMap](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) и WeakSet, содержит «слабые» ссылки на объекты. Они позволяют собирать ненужные значения и предотвращать утечки памяти.

## 4. Попытайтесь выходить из циклов раньше

Обработка больших циклов может занять много времени. Поэтому следует выходить из них как можно раньше — с помощью ключевого слова `break` и ключевого слова `continue`.

В приведенном ниже примере, если вы не вышли из цикла, ваш код будет запускать цикл 1000000000 раз, что явно слишком.

```js
let arr = new Array(1000000000).fill('----');
arr[970] = 'found';
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 'found') {
    console.log("Found");
    break;
  }
}
```

В приведенном ниже примере, если вы не сделали continue, когда цикл не соответствует условию, вы все равно будете запускать функцию 1000000000 раз. Мы обрабатываем элемент массива только в том случае, если он находится в четном положении. Это уменьшает выполнение цикла почти вдвое.

```js
let arr = new Array(1000000000).fill('----');
arr[970] = 'found';
for (let i = 0; i < arr.length; i++) {
  if(i%2!=0){
  continue;
 };
 process(arr[i]);
}
```

## 5. Минимизируйте количество вычислений переменных

Чтобы уменьшить количество вычислений переменной, вы можете использовать замыкания. С точки зрения непрофессионала, замыкания в JavaScript предоставляют доступ к области видимости внешней функции из внутренней функции. Замыкания создаются каждый раз, когда вызывается функция created-not. Внутренние функции будут иметь доступ к переменным внешней области видимости, даже после возврата внешней функции.

Давайте рассмотрим два примера, чтобы увидеть это в действии. Эти примеры взяты из блога Брета.

```js
function findCustomerCity(name) {
  const texasCustomers = ['John', 'Ludwig', 'Kate'];
  const californiaCustomers = ['Wade', 'Lucie','Kylie'];

  return texasCustomers.includes(name) ? 'Texas' :
    californiaCustomers.includes(name) ? 'California' : 'Unknown';
};
```

Если мы вызываем вышеупомянутые функции несколько раз, каждый раз создается новый объект. Для каждого вызова память излишне перераспределяется на переменные texasCustometrs и californiaCustomers. Используя решение с замыканиями, мы можем создать экземпляр переменных только один раз. Давайте рассмотрим приведенный ниже пример.

```js
function findCustomerCity() {
  const texasCustomers = ['John', 'Ludwig', 'Kate'];
  const californiaCustomers = ['Wade', 'Lucie','Kylie'];

  return name => texasCustomers.includes(name) ? 'Texas' :
 californiaCustomers.includes(name) ? 'California' : 'Unknown';
};

let cityOfCustomer = findCustomerCity();
cityOfCustomer('John');//Texas
cityOfCustomer('Wade');//California
cityOfCustomer('Max');//Unknown
```

В приведенном выше примере с помощью замыканий внутренняя функция, которая возвращается в переменную cityOfCustomer, имеет доступ к константам внешней функции findCustomerCity(). И всякий раз, когда вызывается внутренняя функция с именем, переданным в качестве параметра, ей не нужно снова создавать экземпляры констант.

## 6. Минимизируйте доступ к DOM

Доступ к DOM медленный по сравнению с другими операторами JavaScript. Если вы внесете изменения в DOM, которые приведут к перерисовке макета, это может привести к замедлению работы.

Чтобы уменьшить количество раз, когда вы обращаетесь к элементу DOM, обращайтесь к нему один раз и используйте его как локальную переменную. Когда необходимость отпадет, обязательно удалите значение переменной, установив для него null. Это предотвратит утечку памяти, поскольку позволит работать процессу сбора мусора.

## 7. Сожмите файлы

Используя такие методы сжатия, как Gzip, вы можете уменьшить размер файлов JavaScript. Эти файлы поменьше приведут к увеличению производительности сайта, так как браузер должен будет загружать меньшие ресурсы. Эти сжатия могут уменьшить размер файла до 80%. Подробнее о сжатии читайте здесь.

## 8. Оптимизируйте собранный код

Некоторые люди считают, что минимизация и сжатие – это одно и то же. Вовсе нет – это разные вещи. В сжатии используются специальные алгоритмы для изменения выходного размера файла. При минимизации в JS удаляются комментарии и лишние пробелы, переменные и функции переименовываются: длинные имена заменяются однобуквенными.

## 9. Используйте `throttling` и `debouncing`

Используя эти два метода, мы можем строго следить за тем, сколько раз событие должно обрабатываться кодом.
При `throttling` указывается максимальное количество раз, когда функция может быть вызвана. Например, «выполнять функцию события `onkeyup` не чаще, чем раз в 1000 миллисекунд». Это будет означать, что если вы нажмете клавиши 20 раз в секунду, событие будет срабатывать только один раз в секунду. Это уменьшит нагрузку на код.

[С другой стороны, `debouncing`](../07-dom/window/02-window-ready-load-resize.md) — это то, где вы указываете минимальную продолжительность времени для повторного запуска функции с момента предыдущего выполнения той же функции. Другими словами, «выполняйте эту функцию, только если прошло 600 миллисекунд без ее вызова».

Вы можете реализовать собственные функции `debounce` и `throttle`. Последний, используется чаще, так как является более универсальным.

Также можно импортировать готовые функции из библиотеки Lodash ([предпочтительный метод](https://www.sitepoint.com/throttle-scroll-events/)). `Импортировать можно при сборке Webpack'ом`(https://stackoverflow.com/questions/35250500/correct-way-to-import-lodash), который включает loadash.

## 10. Избегайте использования ключевого слова delete

Ключевое слово delete используется, чтобы удалить свойство из объекта. В качестве альтернативы, вы можете просто установить нежелательное свойство как `undefined`.

```js
const object = {name:"Jane Doe", age:43};
object.age = undefined;
```

Вы также можете использовать объект Map, так как его метод `delete` работает быстрее.

## 11. Используйте асинхронный код для предотвращения блокировки потоков

Вы должны знать, что JavaScript является синхронным по умолчанию, а также однопоточным. Но могут быть случаи, когда коду требуется много времени для вычислений. Будучи синхронным по своей природе, для JavaScript это будет означать, что этот фрагмент кода будет блокировать выполнение других операторов кода до тех пор, пока он не будет выполнен. Это снизит производительность в целом.

Но мы можем предотвратить эту ситуацию, внедрив асинхронный код. Асинхронный код был ранее написан в форме обратных вызовов, но с ES6 был введен новый стиль обработки асинхронного кода. Этот новый стиль был назван [промисами](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Using_promises).

## 12.  Используйте разделение кода

Если у вас есть опыт работы с Google Lighthouse, вы знакомы с метрикой, которая называется «первое значимое отображение». Это один из шести показателей, отслеживаемых в разделе «Производительность» отчета Light House.
First Contentful Paint (FCP) измеряет, сколько времени браузеру требуется для отображения первого фрагмента содержимого DOM после перехода пользователя на вашу страницу. Изображения, небелые <canvas> элементы и SVG на странице считаются содержимым DOM; ничего внутри iframe не включено.

Один из лучших способов получить более высокий балл FCP — использовать разделение кода. Разделение кода — это метод, при котором вы сначала отправляете пользователю только необходимые модули. Это сильно повлияет на оценку FCP, уменьшая размер полезной нагрузки, передаваемой изначально.

Популярные пакеты модулей, такие как webpack, предоставляют функционал разделения кода. Вы также можете использовать собственные модули ES, чтобы загрузить отдельные модули.

## 13. Используйте [`async` и `defer`](01-html.md)

## 14.  Используйте Web Worker для выполнения интенсивных задач процессора в фоновом режиме

[Web Worker](https://developer.mozilla.org/ru/docs/Web/API/Web_Workers_API/Using_web_workers) позволяют запускать скрипты в фоновых потоках. Если у вас есть очень интенсивные задачи, вы можете назначить их для Web Worker, которые будут выполнять их без вмешательства в пользовательский интерфейс. После создания Web Worker может общаться с кодом JavaScript, отправляя сообщения в обработчик событий, указанный этим кодом. Это может происходить и наоборот.
