# jsConsoleApiReference
Справочник **Javascript console api** - это страница с описанием методов объекта console в различных браузерах и средах исполнения Javascript.

Варианты страницы с описанием на различных языках:

* [английский](https://github.com/spmbt/jsConsoleApiReference)
* [русский](https://github.com/spmbt/jsConsoleApiReference/blob/master/jsConsoleApiReference-ru.md) (эта страница).


<table><tr>
	<th></th>
	<th><img src="img/iconChrome.png"/> Chrome</th>
	<th><img src="img/iconFirebug.png"/> Firebug</th>
	<th><img src="img/iconFirefox.png"/> Firefox</th>
	<th><img src="img/iconIe.png"/>&nbsp;IE</th>
	<th><img src="img/iconNodejs.png"/> Node.js</th>
	<th><img src="img/iconSafari.png"/> Safari</th>
	<th><img src="img/iconOpera.png"/> <abbr title="ver. 12.15">Opera</abbr></th>
</tr><tr><td colspan="8"><dl><dt><b>assert(expression[, object, ...])</b></dt><dd>Если выражение expression ложно, выводит console.error, иначе - ничего не выводит.</dd></dl></td>
</tr><tr>
	<td></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/assert">&#10003;</a> <font color=#999999>(28.0+)</font></td>
	<td>&nbsp; <a href="https://msdn.microsoft.com/en-us/library/ie/hh772171%28v=vs.85%29.aspx">&#10003;</a></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; <abbr title="если expression == false, срабатывает как console.log">&plusmn;</abbr></td>
</tr><tr><td colspan="8"><dl><dt><b>clear()</b></dt><dd>Очищает окно консоли.</dd></dl></td>
</tr><tr>
	<td></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td>&nbsp; <a href="https://msdn.microsoft.com/en-us/library/ie/jj152131%28v=vs.85%29.aspx">&#10003;</a></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
</tr><tr><td colspan="8"><dl><dt><b>count([object])</b></dt><dd>Выводит, сколько раз данный код был выполнен. Если необязательный аргумент object передан, то перед значением счётчика, выводится object.toString()**.</dd></dl></td>
</tr><tr>
	<td></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/count">&#10003;</a> <font color=#999999>(30.0+)</font></td>
	<td>&nbsp; <a href="https://msdn.microsoft.com/en-us/library/ie/dn265064%28v=vs.85%29.aspx">&#10003;</a></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td>&nbsp; &#10003;</td>
	<td><abbr title="игнорирует сложные объекты; не выводит ссылку">&plusmn; ...</abbr></td>
</tr><tr><td colspan="8"><dl><dt><b>debug(object[, object, ...])</b></dt><dd>Эквивалент console.log  для совместимости со старым вариантом объекта console, когда .debug выводил дополнительно ссылку на строку кода, из которой он был вызван.</dd></dl></td>
</tr><tr>
	<td><i><font color=#999999>&nbsp;&nbsp;&nbsp;равно .log()</font></i></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; <a href="https://msdn.microsoft.com/en-us/library/ie/dn265066%28v=vs.85%29.aspx">&#10003;</a></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td>&nbsp; &#10003;</td>
	<td><abbr title="не поддерживает паттерны">&plusmn; ...</abbr></td>
</tr><tr><td colspan="8"><dl><dt><b>dir(object)</b></dt><dd><i>object</i> выводится как Javascript-объект (для DOM-элементов — все их аттрибуты и методы). Похожим образом работает %O в console.log в Chrome.</dd></dl></td>
</tr><tr>
	<td></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/dir">&#10003;</a> <font color=#999999>(8+)</font></td>
	<td><a href="https://msdn.microsoft.com/en-us/library/ie/jj152132%28v=vs.85%29.aspx">&#10003;</a> <font color=#999999>(9+)</font></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; <abbr title="принимает более 1 аргумента">&#10003;</abbr></td>
</tr><tr><td colspan="8"><dl><dt><b>dirxml(object)</b></dt><dd>Выводится XML-код объекта.</dd></dl></td>
</tr><tr>
	<td></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td><a href="https://msdn.microsoft.com/en-us/library/ie/dn265067%28v=vs.85%29.aspx">&#10003;</a> <font color=#999999>(11+)</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td>&nbsp; &#10003;</td>
	<td><abbr title="если объекты - не DOM, выводит на них ссылку; баг при 2 сложных объектах">&plusmn; ...</abbr></td>
</tr><tr><td colspan="8"><dl><dt><b>error(object[, object, ...])</b></dt><dd>Выводит ошибку и результат console.trace для места, откуда она была вызвана (не останавливая выполнение программы). Поддерживаются паттерны(%s, %d (%i), %f, %o, %O, %c), как в console.log. Пример с трассировкой стека вызовов (Firefox 31+):<br>
<img src="img/console-stack-traces.png"/></dd></dl></td>
</tr><tr>
	<td></td>
	<td>&nbsp; &#10003;</td>
	<td><abbr title="трассирует, если передан ровно 1 аргумент">&plusmn; ...</abbr></td>
	<td>&nbsp; <abbr title="трассировка (как в  console.trace) - с версии 31">&#10003;</abbr></td>
	<td><a href="https://msdn.microsoft.com/en-us/library/ie/hh772176%28v=vs.85%29.aspx">&#10003;</a> <font color=#999999>(8+)</font></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td><abbr title="не выводит console.trace">&plusmn; ...</abbr></td>
</tr><tr><td colspan="8"><dl><dt><b>exception(object[, object, ...])</b></dt><dd>Эквивалент error()</dd></dl></td>
</tr><tr>
	<td><i><font color=#999999>&nbsp;&nbsp;равно .error()</font></i></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/error">&#10003;</a> <font color=#999999>(28+)</font></td>
	<td><font color=#ff6666>-&#8861;-</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
</tr><tr><td colspan="8"><dl><dt><b>group(object[, object, ...])</b></dt><dd>Начинает развёрнутую группу записей в консоли, которая вручную затем может сворачиваться. Группа оканчивается командой .groupEnd(). Поддерживаются паттерны (см. <i>.log()</i>). Пример кода и результата (из статьи "<a href="http://stepansuvorov.com/blog/2013/04/%D0%B2%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D0%BA%D0%BE%D0%BD%D1%81%D0%BE%D0%BB%D0%B8-%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B0/">Возможности консоли браузера</a>", 2013):<br>
```javascript<br>
<div class="highlight highlight-javascript">
<pre>
	console.group("module A")
	console.log('a')
	console.log('a')
	console.log('a')
	console.group("nested module B")
	console.log('b')
	console.log('b')
	console.log('b')
	console.groupEnd()
	console.groupCollapsed("nested collapsed module C")
	console.log('c')
	console.log('c')
	console.log('c')
	console.groupEnd()
	console.groupEnd()
	console.group("module D")
	console.log('d')
	console.log('d')
	console.log('d')
	console.groupEnd()
</pre></div>
```<br>

<img src="http://habrastorage.org/getpro/habr/post_images/b83/848/9be/b838489be648753e7f94d468bac7ac2f.png"/></dd></dl></td>
</tr><tr>
	<td></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td><abbr title="свернуть группу нельзя">&plusmn; ...</abbr></td>
	<td><a href="https://msdn.microsoft.com/en-us/library/ie/dn265068%28v=vs.85%29.aspx">&#10003;</a> <font color=#999999>(11+)</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td>&#10003; <font color=#999999>(4+)</font></td>
	<td>&nbsp; &#10003;</td>
</tr><tr><td colspan="8"><dl><dt><b>groupCollapsed(object[, object, ...])</b></dt><dd>Начинает изначально свёрнутую группу записей в консоли, которая вручную затем может разворачиваться. Группа оканчивается командой .groupEnd(). Поддерживаются паттерны (см. <i>.log()</i>).</dd></dl></td>
</tr><tr>
	<td></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td><abbr title="Изначально группа развёрнута и свернуть нельзя (равносильна .group())">&plusmn; ...</abbr> <font color=#999999>(9+)</font></td>
	<td><a href="https://msdn.microsoft.com/en-us/library/ie/dn265069%28v=vs.85%29.aspx">&#10003;</a> <font color=#999999>(11+)</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td>&nbsp; &#10003; <font color=#999999>(5.1+)</font></td>
	<td>&nbsp; &#10003;</td>
</tr><tr><td colspan="8"><dl><dt><b>groupEnd()</b></dt><dd>Обозначает конец группы.</dd></dl></td>
</tr><tr>
	<td></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; <a href="https://getfirebug.com/wiki/index.php/Console.groupEnd">&#10003;</a></td>
	<td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd">&#10003;</a> <font color=#999999>(9+)</font></td>
	<td><a href="https://msdn.microsoft.com/en-us/library/ie/dn265070%28v=vs.85%29.aspx">&#10003;</a> <font color=#999999>(11+)</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td>&nbsp; &#10003; <font color=#999999>(4+)</font></td>
	<td>&nbsp; &#10003;</td>
</tr><tr>
	<th></th>
	<th><img src="img/iconChrome.png"/> Chrome</th>
	<th><img src="img/iconFirebug.png"/> Firebug</th>
	<th><img src="img/iconFirefox.png"/> Firefox</th>
	<th><img src="img/iconIe.png"/> IE</th>
	<th><img src="img/iconNodejs.png"/> Node.js</th>
	<th><img src="img/iconSafari.png"/> Safari</th>
	<th><img src="img/iconOpera.png"/> <abbr title="ver. 12.15">Opera</abbr></th>
</tr><tr><td colspan="8"><dl><dt><b>info(object[, object, ...])</b></dt><dd>Аналогична .log(), но оформляется в ином дизайне, для различения типов сообщений, например, для градации важности или для иного смыслового значения этой группы сообщений. Поддерживаются паттерны (описаны в <i>.log()</i>).</dd></dl></td>
</tr><tr>
	<td></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
</tr><tr><td colspan="8"><dl><dt><b>log(object[, object, ...])</b></dt><dd>Выводит аргументы в консоль, разделяя пробелами. Самая популярная из команд console.<br>
<br>
Поддерживает паттерны - специальные имена в первом аргументе, указывающие, что его надо использовать как шаблон, в который будут подставляться следующие аргументы вместо термов (как в printf() на С, но значительно проще). Примеры:<br>
<br>
```javascript
<div class="highlight highlight-javascript">
<pre>
	console.log('У Пети было %d %s',10,'яблок');
	console.log('Пи равно %f',Math.PI);
	console.log('%cКаждый %cОхотник %cЖелает%c знать, где сидит фазан',
		'color:red;','font-size:16px;color:orange;','background:black;color:yellow;',
		'font:normal;color:normal;background:normal;');
	console.log('body as DOM: %o',document.getElementsByTagName('body')[0]);
	console.log('object: %O',{a:1,b:2});
	console.log('body as Object: %O',document.getElementsByTagName('body')[0]);
</pre></div>
```

Виды паттернов и тип данного, в который преобразуется значение подставляемого аргумента:<br>
<b>%s</b> - строка.<br>
<b>%d</b> или <b>%i</b> -	 число.<br>
<b>%f</b> - число с плавающей точкой (Firebug тоже поддерживает).<br>
<b>%o</b> - DOM-элемент (Firebug выводит как ссылку на элемент. Chrome, кроме ссылки, отображает элемент в консоли. Firefox по клику открывает элемент в модальном окне (доступны все аттрибуты и методы этого объекта)).<br>
<b>%O</b> - JS-объект (не поддерживается в Firefox; Chrome преобразует DOM-объект в js-объект для этого паттерна; Firebug не отличает %o от %O).<br>
<b>%c</b> - CSS-стиль (color, background, font; не поддерживается в Firefox). Пример стилизации паттерном %c (Firefox):<br>
<img src="img/styled-console-logs.png"/></dd></td>
</tr><tr>
	<td>&nbsp; &nbsp; <i><font color=#aa6699>(важно)</font></i></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td><abbr title="не поддерживает паттерны">&plusmn; ...</abbr></td>
</tr><tr><td colspan="8"><dl><dt><b>markTimeline()</b></dt><dd>Аналог .timeStamp() для Safari, но в нём .timeStamp() не поддерживается, и наоборот.</dd></dl></td>
</tr><tr>
	<td><i><font color=#999999>&nbsp;=.timeStamp()</font></i></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td>&nbsp; &#10003;</td>
	<td><font color=#ff6666>-&#8861;-</font></td>
</tr><tr><td colspan="8"><dl><dt><b>profile([label])</b></dt><dd><a href="https://developer.chrome.com/devtools/docs/console-api#consoleprofile">Запускает Javascript-профайлер</a>, затем показывает результаты под  именем "label".</dd></td>
</tr><tr>
	<td></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td><abbr title="будет работать, если открыта панель Dev. Tools">(devtools)</abbr></td>
	<td>&#10003; <font color=#999999>(10+)</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td>&nbsp; &#10003;</td>
	<td><font color=#ff6666>-&#8861;-</font></td>
</tr><tr><td colspan="8"><dl><dt><b>profileEnd()">Выключает Javascript-профайлер.</dd></td>
</tr><tr>
	<td></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td><abbr title="будет работать, если открыта панель Dev. Tools">(devtools)</abbr></td>
	<td>&#10003; <font color=#999999>(10+)</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td>&nbsp; &#10003;</td>
	<td><font color=#ff6666>-&#8861;-</font></td>
</tr><tr><td colspan="8"><dl><dt><b>table(data[, columns])</b></dt><dd>Двумерные табличные данные - в формате таблицы. Data - массив или объект (или объект из объектов, объект из массивов), каждый элемент которого будет строкой в таблице. Первый столбец двумерного массива будет его индексом (от 0). Или, если это - объект, первый столбец будет состоять из ключей объекта. Пример из Firefox (объект объектов):<br>
<img src="http://habrastorage.org/getpro/habr/post_images/e00/b6b/85d/e00b6b85da16e663e206d18eb9ec5f27.png"/><br>
Columns - дополнительный массив названий колонок для заголовков таблицы, если строки созданы из массивов, а мы не хотим, чтобы названиями были числовые индексы. Выше - был пример результата (Firefox), полученного или из именованных колонок, или из объекта объектов. Ниже - что было бы из массива массивов без параметра columns:<br>
<img src="http://habrastorage.org/getpro/habr/post_images/c6a/2ad/93b/c6a2ad93bcd57694a2409fead6374600.png"/></dd></td>
</tr><tr>
	<td></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; <a href="http://www.softwareishard.com/blog/firebug/tabular-logs-in-firebug/">&#10003;</a></td>
	<td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/table">&#10003;</a> <font color=#999999>(34.0+)</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
</tr><tr><td colspan="8"><dl><dt><b>time(label)</b></dt><dd>Включает счётчик (миллисекунд) под именем label.</dd></dl></td>
</tr><tr>
	<td></td>
	<td>&nbsp; &#10003;</td>
	<td><a href="https://getfirebug.com/wiki/index.php/Console.time">&#10003;</a></td>
	<td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/time">&#10003;</a> <font color=#999999>(10+)</font></td>
	<td>&#10003; <font color=#999999>(11+)</font></td>
	<td>&nbsp; &#10003;</td>
	<td>&#10003; <font color=#999999>(4+)</font></td>
	<td>&nbsp; <abbr title="игнорирует вызовы без аргументов">&plusmn;</abbr></td>
</tr><tr><td colspan="8"><dl><dt><b>timeEnd(label)</b></dt><dd>Останавливает счётчик (миллисекунд) под именем label и публикует результат под этим именем. Пример (Хром):<br>
<img src="img/time-duration.png"/></dd></dl></td>
</tr><tr>
	<td></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; <a href="http://www.stoimen.com/blog/2010/02/02/firebugs-console-time-accuracy/">&#10003;</a></td>
	<td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd">&#10003;</a> <font color=#999999>(10+)</font></td>
	<td>&#10003; <font color=#999999>(11+)</font></td>
	<td>&nbsp; &#10003;</td>
	<td>&#10003; <font color=#999999>(4+)</font></td>
	<td>&nbsp; <abbr title="игнорирует вызовы без аргументов">&plusmn;</abbr></td>
</tr><tr><td colspan="8"><dl><dt><b>timeStamp([label])</b></dt><dd>Отрисовыввает метки времени на диаграмме таймингов скрипта, что позволяет следить за динамикой поведения программы. Пример (Firebug):<br>
<img src="http://habrastorage.org/getpro/habr/post_images/25e/589/78d/25e58978d986761ce31f442896df9c40.png"/></dd></dl></td>
</tr><tr>
	<td></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; <a href="http://www.softwareishard.com/blog/firebug/firebug-1-8-console-timestamp/">&#10003;</a></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td><abbr title="выброс ошибки"><font color=#ff6666>-&#8861;-</font></abbr></td>
</tr><tr><td colspan="8"><dl><dt><b>trace()</b></dt><dd>Показывает стек трассировки функции на данный момент исполнения (то же, что обычно показывается при остановке на месте ошибки). Пример в Safari (в боковой панели), в Хроме (в консоли):<br>
<img src="img/safariStackTrace.png" width="288"/> <img src="img/stackTraceConsoleChrome.png"/>
В Firefox:<br>
<img src="img/stackTraceConsoleFirefox.png"/></dd></dl></td>
</tr><tr>
	<td></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/trace">&#10003;</a> <font color=#999999>(10+)</font></td>
	<td>&#10003; <font color=#999999>(11+)</font></td>
	<td>&nbsp; &#10003;</td>
	<td>&#10003; <font color=#999999>(7.0.1+)</font></td>
	<td><abbr title="на грани корректности">&plusmn; ...</abbr></td>
</tr><tr><td colspan="8"><dl><dt><b>warn(object[, object, ...])</b></dt><dd>Аналогична .log() и .info(), но оформляется в ином дизайне, для различения типов сообщений. Поддерживаются паттерны (описаны в <i>.log()</i>).</dd></dl></td>
</tr><tr>
	<td></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
</tr><tr><td colspan="8"><dl><dt><b>debugger;</b></dt><dd>Останавливает выполнение Javascript на текущей строке. Равносилен установке точки останова (breakpoint) в отладчике. Кроме остановки, никак не отражается на исполняемой программе.</dd></dl></td>
</tr><tr>
	<td><i><font color=#999999>&nbsp;&nbsp;(оператор)</font></i></td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
	<td>&nbsp; &#10003;</td>
</tr><tr><td colspan="8"><dl><dt><b>throw new Error('mesasge');</b></dt><dd>Останавливает выполнение Javascript на текущей строке, прерывая выполнение. <i>(Поддерживается всеми средами исполнения Javascript.)</i></dd></dl></td>
</tr><tr>
	<th></th>
	<th><img src="img/iconChrome.png"/> <a href="https://developer.chrome.com/devtools/docs/console-api">Chrome</a></th>
	<th><img src="img/iconFirebug.png"/> <a href="https://getfirebug.com/wiki/index.php/Console_API">Firebug</a></th>
	<th><img src="img/iconFirefox.png"/> <a href="https://developer.mozilla.org/en-US/docs/Web/API/Console">Firefox</a></th>
	<th><img src="img/iconIe.png"/> <a href="https://msdn.microsoft.com/en-us/library/ie/hh772169%28v=vs.85%29.aspx">IE</a></th>
	<th><img src="img/iconNodejs.png"/> <a href="https://nodejs.org/api/console.html">Node.js</a></th>
	<th><img src="img/iconSafari.png"/> <a href="https://developer.apple.com/library/mac/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html#//apple_ref/doc/uid/TP40007874-CH6-SW3">Safari</a></th>
	<th><abbr title="ver. 12.15"><img src="img/iconOpera.png"/> <a href="http://www.opera.com/dragonfly/documentation/console/">Opera</a></abbr></th>
</tr></table>


## Ссылки

* <a href="https://developer.chrome.com/devtools/docs/console-api">Console API Reference for Chrome</a>
* <a href="https://getfirebug.com/wiki/index.php/Console_API">Console API in Firebug</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/API/Console">Console object (MDN)</a>
* <a href="https://msdn.microsoft.com/en-us/library/ie/hh772169%28v=vs.85%29.aspx">Console object in IE10 (MSDN)</a>
* <a href="https://nodejs.org/api/console.html">in Node.js v0.12.0</a>
* <a href="https://developer.apple.com/library/mac/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html#//apple_ref/doc/uid/TP40007874-CH6-SW3">... in Safari Web Inspector Guide</a>
* <a href="http://www.opera.com/dragonfly/documentation/console/">Console in Opera Dragonfly</a>


* <a href="http://habrahabr.ru/post/114483/">Используем console на полную</a>
* <a href="http://habrahabr.ru/post/202394/">Продвинутая JavaScript отладка при помощи console.table()</a>
* <a href="http://habrahabr.ru/post/109046/">Релиз Firebug 1.6</a> (console.table)
* <a href="https://msdn.microsoft.com/library/gg589530">Using the F12 Tools Console to View Errors and Status</a> (MSDN)
* <a href="https://hacks.mozilla.org/2014/05/editable-box-model-multiple-selection-sublime-text-keys-much-more-firefox-developer-tools-episode-31/">... + much more – Firefox Developer Tools Episode 31</a> - console stack traces, styled console logs в Fx31.


* <a href="http://habrahabr.ru/post/188066/">FireBug* Console API</a> - описаны тонкости реализации, замеченные в тестах браузеров 2013 г;
* <a href="http://habrahabr.ru/post/198372/">API консоли Javascript</a>
