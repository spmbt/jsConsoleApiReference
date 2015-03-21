# jsConsoleApiReference
Справочник **Javascript console api** - это страница с описанием методов объекта console в различных браузерах и средах исполнения Javascript.

### Варианты страницы с описанием на других языках:

* [english (английский)](https://github.com/spmbt/jsConsoleApiReference) (`*`.md); &nbsp; &nbsp; [HTML](http://spmbt.github.io/jsConsoleApiReference/jsConsoleApiReference.htm) (лучше), [свёрнутый](http://spmbt.github.io/jsConsoleApiReference/jsConsoleApiReference.htm#collapse_max), [развёрнутый](http://spmbt.github.io/jsConsoleApiReference/jsConsoleApiReference.htm#collapse_max);
* [russian (русский)](https://github.com/spmbt/jsConsoleApiReference/blob/gh-pages/jsConsoleApiReference-ru.md) (эта страница; `*`.md); [HTML](http://spmbt.github.io/jsConsoleApiReference/jsConsoleApiReference-ru.htm) (лучше), [свёрнутый](http://spmbt.github.io/jsConsoleApiReference/jsConsoleApiReference-ru.htm#collapse_max), [развёрнутый](http://spmbt.github.io/jsConsoleApiReference/jsConsoleApiReference-ru.htm#collapse_max).

Страница в формате Markdown не отображает всплывающие подсказки, поясняющие некоторые особенности реализаций методов в браузерах и средах. Полноценное описание находится [на HTML-странице](http://spmbt.github.io/jsConsoleApiReference/jsConsoleApiReference-ru.htm), которая, к тому же, может сворачивать все или часть описаний.

#### Сокращения

* <font class="suppNo" color=#ff6666>-&#8861;-</font> &mdash; метод в данной среде не используется;
* &plusmn; &mdash; метод используется, но реализован с особенностями;
* `+` &mdash; полноценная реализация метода.

### Описание методов и список поддержки браузерами и платформами

<table class="jCAR"><tr>
	<th></th>

<th><div class="divIn"><img src="img/iconChrome.png"/></div><div class="divIn"> Chrome</div></th>
<th><div class="divIn"><img src="img/iconFirebug.png"/></div><div class="divIn"> Firebug</div></th>
<th><div class="divIn"><img src="img/iconFirefox.png"/></div><div class="divIn"> Firefox</div></th>
<th><div class="divIn"><img src="img/iconIe.png"/></div><div class="divIn">&nbsp;IE</div></th>
<th><div class="divIn"><img src="img/iconNodejs.png"/></div><div class="divIn"> Node.js</div></th>
<th><div class="divIn"><img src="img/iconSafari.png"/></div><div class="divIn"> Safari</div></th>
<th class="abbr"><div class="divIn"><span class="abbr" title="ver. 12.15"><img src="img/iconOpera.png"/></span></div><div class="divIn"> <span class="abbr" title="ver. 12.15">Opera</span></div></th>
</tr><tr><td colspan="8"><dl><dt><b>assert(<i>expression[, object, ...]</i>)</b></dt><dd>Если выражение <i>expression</i> ложно, выводит <i>console.error</i>, иначе &mdash; ничего не выводит.</dd></dl></td>
</tr><tr>
	<td></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Console/assert"><font class="suppYes" color=#66dd66>&nbsp; +</font></a> <font class="gray" color=#999999>(28.0+)</font></td>
	<td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/ie/hh772171%28v=vs.85%29.aspx"><font class="suppYes" color=#66dd66>&nbsp; +</font></a></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td class="abbr">&nbsp; <span class="abbr" title="если expression &mdash; false, срабатывает как console.log">&plusmn;</span></td>
</tr><tr><td colspan="8"><dl><dt><b>clear()</b></dt><dd>Очищает окно консоли.</dd></dl></td>
</tr><tr>
	<td></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/ie/jj152131%28v=vs.85%29.aspx"><font class="suppYes" color=#66dd66>&nbsp; +</font></a></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
</tr><tr><td colspan="8"><dl><dt><b>count(<i>[object]</i>)</b></dt><dd>Каждый раз выводит количество проходов данной точки кода. Если есть аргумент <i>object</i>, то перед значением счётчика выводится <i>object.toString()</i>.</dd></dl></td>
</tr><tr>
	<td></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Console/count"><font class="suppYes" color=#66dd66>&nbsp; +</font></a> <font class="gray" color=#999999>(30.0+)</font></td>
	<td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/ie/dn265064%28v=vs.85%29.aspx"><font class="suppYes" color=#66dd66>&nbsp; +</font></a></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td class="abbr"><span class="abbr" title="игнорирует сложные объекты; не выводит ссылку">&plusmn; ...</span></td>
</tr><tr><td colspan="8"><dl><dt><b>debug(<i>object[, object, ...]</i>)</b></dt><dd>Эквивалент <i>console.log</i> для совместимости со старым вариантом объекта <i>console</i>, когда <i>.debug</i> выводил дополнительно ссылку на строку кода, из которой он был вызван.</dd></dl></td>
</tr><tr>
	<td><div class="def2"><i><font class="gray" color=#999999>&nbsp;&nbsp;&nbsp;равно .log()</font></i></div></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/ie/dn265066%28v=vs.85%29.aspx"><font class="suppYes" color=#66dd66>&nbsp; +</font></a></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td class="abbr"><span class="abbr" title="не поддерживает паттерны">&plusmn; ...</span></td>
</tr><tr><td colspan="8"><dl><dt><b>dir(<i>object</i>)</b></dt><dd><i>object</i> выводится как Javascript-объект (для DOM-элементов &mdash; все их атрибуты и методы). Похожим образом работает <b>%O</b> в <i>console.log</i> в Chrome.</dd></dl></td>
</tr><tr>
	<td></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Console/dir"><font class="suppYes" color=#66dd66>&nbsp; +</font></a> <font class="gray" color=#999999>(8+)</font></td>
	<td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/ie/jj152132%28v=vs.85%29.aspx"><font class="suppYes" color=#66dd66>&nbsp; +</font></a> <font class="gray" color=#999999>(9+)</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td class="abbr">&nbsp; <span class="suppYes abbr" title="принимает более 1 аргумента"><font color=#66dd66>+</font></span></td>
</tr><tr><td colspan="8"><dl><dt><b>dirxml(<i>object</i>)</b></dt><dd>Выводится XML-код объекта.</dd></dl></td>
</tr><tr>
	<td></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/ie/dn265067%28v=vs.85%29.aspx"><font class="suppYes" color=#66dd66>&nbsp; +</font></a> <font class="gray" color=#999999>(11+)</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td class="abbr"><span class="abbr" title="если объекты &mdash; не DOM, выводит на них ссылку; баг при 2 сложных объектах">&plusmn; ...</span></td>
</tr><tr><td colspan="8"><dl><dt><b>error(<i>object[, object, ...]</i>)</b></dt><dd>Выводит ошибку и результат <i>console.trace</i> для места, откуда она была вызвана (не останавливая выполнение программы). Поддерживаются паттерны (<b>%s</b>, <b>%d</b> (<b>%i</b>), <b>%f</b>, <b>%o</b>, <b>%O</b>, <b>%c</b>), как в <i>console.log</i>. Пример с трассировкой стека вызовов (Firefox 31+):<br>
	<img src="img/console-stack-traces.png"/></dd></dl></td>
</tr><tr>
	<td></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td class="abbr"><span class="abbr" title="трассирует, если передан ровно 1 аргумент">&plusmn; ...</span></td>
	<td class="abbr">&nbsp; <span class="suppYes abbr" title="трассировка (как в  console.trace) &mdash; с версии 31"><font color=#66dd66>+</font></span></td>
	<td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/ie/hh772176%28v=vs.85%29.aspx"><font class="suppYes" color=#66dd66>&nbsp; +</font></a> <font class="gray" color=#999999>(8+)</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td class="abbr"><span class="abbr" title="не выводит console.trace">&plusmn; ...</span></td>
</tr><tr><td colspan="8"><dl><dt><b>exception(<i>object[, object, ...]</i>)</b></dt><dd>Эквивалент <i>.error()</i>.</dd></dl></td>
</tr><tr>
	<td><div class="def2"><i><font class="gray" color=#999999>&nbsp;&nbsp;равно .error()</font></i></div></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Console/error"><font class="suppYes" color=#66dd66>&nbsp; +</font></a> <font class="gray" color=#999999>(28+)</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
</tr><tr><td colspan="8"><dl><dt><b>group(<i>object[, object, ...]</i>)</b></dt><dd>Начинает развёрнутую группу записей в консоли, которая вручную затем может сворачиваться. Группа оканчивается командой <i>.groupEnd()</i>. Поддерживаются паттерны (см. <i>.log()</i>). Пример кода и результата (из статьи «<a target="_blank" href="http://stepansuvorov.com/blog/2013/04/%D0%B2%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D0%BA%D0%BE%D0%BD%D1%81%D0%BE%D0%BB%D0%B8-%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B0/">Возможности консоли браузера</a>», 2013):<br>
	<i class="gray">(javascript)</i><br>
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
	<br>

	<img src="http://habrastorage.org/getpro/habr/post_images/b83/848/9be/b838489be648753e7f94d468bac7ac2f.png"/></dd></dl></td>
</tr><tr>
	<td></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td class="abbr"><span class="abbr" title="свернуть группу нельзя">&plusmn; ...</span></td>
	<td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/ie/dn265068%28v=vs.85%29.aspx"><font class="suppYes" color=#66dd66>&nbsp; +</font></a> <font class="gray" color=#999999>(11+)</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppYes" color=#66dd66>+</font> <font class="gray" color=#999999>(4+)</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
</tr><tr><td colspan="8"><dl><dt><b>groupCollapsed(<i>object[, object, ...]</i>)</b></dt><dd>Начинает изначально свёрнутую группу записей в консоли, которая вручную затем может разворачиваться. Группа оканчивается командой <i>.groupEnd()</i>. Поддерживаются паттерны (см. <i>.log()</i>).</dd></dl></td>
</tr><tr>
	<td></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td class="abbr"><span class="abbr" title="Изначально группа развёрнута и свернуть нельзя (равносильна .group())">&plusmn; ...</span> <font class="gray" color=#999999>(9+)</font></td>
	<td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/ie/dn265069%28v=vs.85%29.aspx"><font class="suppYes" color=#66dd66>&nbsp; +</font></a> <font class="gray" color=#999999>(11+)</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppYes" color=#66dd66>+</font> <font class="gray" color=#999999>(5.1+)</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
</tr><tr><td colspan="8"><dl><dt><b>groupEnd()</b></dt><dd>Обозначает конец группы сообщений лога, которые способны сворачиваться-разворачиваться (кроме Firefox) вручную.</dd></dl></td>
</tr><tr>
	<td></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><a target="_blank" href="https://getfirebug.com/wiki/index.php/Console.groupEnd"><font class="suppYes" color=#66dd66>&nbsp; +</font></a></td>
	<td><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd"><font class="suppYes" color=#66dd66>&nbsp; +</font></a> <font class="gray" color=#999999>(9+)</font></td>
	<td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/ie/dn265070%28v=vs.85%29.aspx"><font class="suppYes" color=#66dd66>&nbsp; +</font></a> <font class="suppNo" color=#999999>(11+)</font></td>
	<td><font color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppYes" color=#66dd66>+</font> <font class="gray" color=#999999>(4+)</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
</tr><tr>
	<th></th>
	<th><div class="divIn"><img src="img/iconChrome.png"/></div><div class="divIn"> Chrome</div></th>
	<th><div class="divIn"><img src="img/iconFirebug.png"/></div><div class="divIn"> Firebug</div></th>
	<th><div class="divIn"><img src="img/iconFirefox.png"/></div><div class="divIn"> Firefox</div></th>
	<th><div class="divIn"><img src="img/iconIe.png"/></div><div class="divIn"> IE</div></th>
	<th><div class="divIn"><img src="img/iconNodejs.png"/></div><div class="divIn"> Node.js</div></th>
	<th><div class="divIn"><img src="img/iconSafari.png"/></div><div class="divIn"> Safari</div></th>
	<th class="abbr"><div class="divIn"><span class="abbr" title="ver. 12.15"><img src="img/iconOpera.png"/></span></div><div class="divIn"> <span class="abbr" title="ver. 12.15">Opera</span></div></th>
</tr><tr><td colspan="8"><dl><dt><b>info(<i>object[, object, ...]</i>)</b></dt><dd>Аналогична <i>.log()</i>, но оформляется в ином дизайне, для различения типов сообщений, например, для градации важности или для иного смыслового значения этой группы сообщений. Поддерживаются паттерны (описаны в <i>.log()</i>). Пример различий для Firebug, Chrome, IE9:<br>
	<img src="img/consoleMessages.png"/></dd></dl></td>
</tr><tr>
	<td></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
</tr><tr><td colspan="8"><dl><dt><b>log(<i>object[, object, ...]</i>)</b></dt><dd>Выводит аргументы в консоль, разделяя пробелами. Самая популярная из команд <i>console</i>.<br>
	<br>
	Поддерживает паттерны &mdash; специальные имена в первом аргументе, указывающие, что его надо использовать как шаблон, в который будут подставляться следующие аргументы вместо переменных в шаблоне (как в <i>printf()</i> на С, но значительно проще). Примеры:<br>
	<br>
	<i class="gray">(javascript)</i><br>
	<div class="highlight highlight-javascript">
<pre>
  console.log('У Пети было %d %s',10,'яблок');
  console.log('Пи равно %f',Math.PI);
  console.log('%cКаждый %cОхотник %cЖелает%c знать, где сидит фазан',
      'color:red;','font-size:16px;color:orange;',
      'background:black;color:yellow;',
      'font:normal;color:normal;background:normal;');
  console.log('body as DOM: %o',document.getElementsByTagName('body')[0]);
  console.log('object: %O',{a:1,b:2});
  console.log('body as Object: %O',document.getElementsByTagName('body')[0]);
</pre></div>
	<br>

	Виды паттернов и тип данного, в который преобразуется значение подставляемого аргумента:<br>
	<b>%s</b> &mdash; строка.<br>
	<b>%d</b> или <b>%i</b> &mdash;	 число.<br>
	<b>%f</b> &mdash; число с плавающей точкой (Firebug тоже поддерживает).<br>
	<b>%o</b> &mdash; DOM-элемент (Firebug выводит как ссылку на элемент. Chrome, кроме ссылки, отображает элемент в консоли. Firefox по клику открывает элемент в модальном окне (доступны все атрибуты и методы этого объекта)).<br>
	<b>%O</b> &mdash; JS-объект (не поддерживается в Firefox; Chrome преобразует DOM-объект в JS-объект для этого паттерна; Firebug не отличает <b>%o</b> от <b>%O</b>).<br>
	<b>%c</b> &mdash; CSS-стиль (color, background, font; в Firefox &mdash; c версии 31). Пример стилизации паттерном <b>%c</b> (Firefox):<br>
	<img src="img/styled-console-logs.png"/></dd></dl></td>
</tr><tr>
	<td><div class="def2">&nbsp; &nbsp; <i><font color=#aa6699>(важно)</font></i></div></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td class="abbr"><span class="abbr" title="не поддерживает паттерны">&plusmn; ...</span></td>
</tr><tr><td colspan="8"><dl><dt><b>markTimeline()</b></dt><dd>Аналог <i>.timeStamp()</i> для Safari, но в нём <i>.timeStamp()</i> не поддерживается, и наоборот.</dd></dl></td>
</tr><tr>
	<td><div class="def2"><i><font class="gray" color=#999999>&nbsp;=.timeStamp()</font></i></div></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
</tr><tr><td colspan="8"><dl><dt><b>profile(<i>[label]</i>)</b></dt><dd><a target="_blank" href="https://developer.chrome.com/devtools/docs/console-api#consoleprofile">Запускает Javascript-профайлер</a>, затем показывает результаты под  именем <i>label</i>.</dd></dl></td>
</tr><tr>
	<td></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td class="abbr"><span class="abbr" title="будет работать, если открыта панель Dev. Tools">(devtools)</span></td>
	<td><font class="suppYes" color=#66dd66>+</font> <font class="gray" color=#999999>(10+)</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
</tr><tr><td colspan="8"><dl><dt><b>profileEnd()</b></dt><dd>Выключает Javascript-профайлер.</dd></dl></td>
</tr><tr>
	<td></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td class="abbr"><span class="abbr" title="будет работать, если открыта панель Dev. Tools">(devtools)</span></td>
	<td><font class="suppYes" color=#66dd66>+</font> <font class="gray" color=#999999>(10+)</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
</tr><tr><td colspan="8"><dl><dt><b>table(<i>data[, columns]</i>)</b></dt><dd>Двумерные табличные данные &mdash; в формате таблицы. <i>Data</i> &mdash; массив или объект (или объект из объектов, объект из массивов), каждый элемент которого будет строкой в таблице. Первый столбец двумерного массива будет его индексом (от 0). Или, если это &mdash; объект, первый столбец будет состоять из ключей объекта. Пример из Firefox (объект объектов):<br>
	<img src="http://habrastorage.org/getpro/habr/post_images/e00/b6b/85d/e00b6b85da16e663e206d18eb9ec5f27.png"/><br>
	<i>Columns</i> &mdash; дополнительный массив названий колонок для заголовков таблицы, если строки созданы из массивов, а мы не хотим, чтобы названиями были числовые индексы. Выше &mdash; был пример результата (Firefox), полученного или из именованных колонок, или из объекта объектов. Ниже &mdash; что было бы из массива массивов без параметра <i>columns</i>:<br>
	<img src="http://habrastorage.org/getpro/habr/post_images/c6a/2ad/93b/c6a2ad93bcd57694a2409fead6374600.png"/></dd></dl></td>
</tr><tr>
	<td></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><a target="_blank" href="http://www.softwareishard.com/blog/firebug/tabular-logs-in-firebug/"><font class="suppYes" color=#66dd66>&nbsp; +</font></a></td>
	<td><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Console/table"><font class="suppYes" color=#66dd66>&nbsp; +</font></a> <font class="gray" color=#999999>(34.0+)</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
</tr><tr><td colspan="8"><dl><dt><b>time(<i>label</i>)</b></dt><dd>Включает счётчик (миллисекунд) под именем <i>label</i>.</dd></dl></td>
</tr><tr>
	<td></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><a target="_blank" href="https://getfirebug.com/wiki/index.php/Console.time"><font class="suppYes" color=#66dd66>&nbsp; +</font></a></td>
	<td><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Console/time"><font class="suppYes" color=#66dd66>&nbsp; +</font></a> <font class="gray" color=#999999>(10+)</font></td>
	<td><font class="suppYes" color=#66dd66>+</font> <font class="gray" color=#999999>(11+)</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>+</font> <font class="gray" color=#999999>(4+)</font></td>
	<td class="abbr">&nbsp; <span class="abbr" title="игнорирует вызовы без аргументов">&plusmn;</span></td>
</tr><tr><td colspan="8"><dl><dt><b>timeEnd(<i>label</i>)</b></dt><dd>Останавливает счётчик (миллисекунд) под именем <i>label</i> и публикует результат под этим именем. Пример (Хром):<br>
	<img src="img/time-duration.png"/></dd></dl></td>
</tr><tr>
	<td></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><a target="_blank" href="http://www.stoimen.com/blog/2010/02/02/firebugs-console-time-accuracy/"><font class="suppYes" color=#66dd66>&nbsp; +</font></a></td>
	<td><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd"><font class="suppYes" color=#66dd66>&nbsp; +</font></a> <font class="gray" color=#999999>(10+)</font></td>
	<td><font class="suppYes" color=#66dd66>+</font> <font class="gray" color=#999999>(11+)</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>+</font> <font class="gray" color=#999999>(4+)</font></td>
	<td class="abbr">&nbsp; <span class="abbr" title="игнорирует вызовы без аргументов">&plusmn;</span></td>
</tr><tr><td colspan="8"><dl><dt><b>timeStamp(<i>[label]</i>)</b></dt><dd>Отрисовывает метки времени на диаграмме таймингов скрипта, что позволяет следить за динамикой поведения программы. Пример (Firebug):<br>
	<img src="http://habrastorage.org/getpro/habr/post_images/25e/589/78d/25e58978d986761ce31f442896df9c40.png"/></dd></dl></td>
</tr><tr>
	<td></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><a target="_blank" href="http://www.softwareishard.com/blog/firebug/firebug-1-8-console-timestamp/"><font class="suppYes" color=#66dd66>&nbsp; +</font></a></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td><font class="suppNo" color=#ff6666>-&#8861;-</font></td>
	<td class="abbr"><span class="abbr" title="выброс ошибки"><font class="suppNo" color=#ff6666>-&#8861;-</font></span></td>
</tr><tr><td colspan="8"><dl><dt><b>trace()</b></dt><dd>Показывает стек трассировки функции на данный момент исполнения (то же, что обычно показывается при остановке на месте ошибки). Пример в Safari (в боковой панели), в Хроме (в консоли):<br>
	<img src="img/safariStackTrace.png" width="288"/> <img src="img/stackTraceConsoleChrome.png"/><br>
	В Firefox:<br>
	<img src="img/stackTraceConsoleFirefox.png"/></dd></dl></td>
</tr><tr>
	<td></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Console/trace"><font class="suppYes" color=#66dd66>&nbsp; +</font></a> <font class="gray" color=#999999>(10+)</font></td>
	<td><font class="suppYes" color=#66dd66>+</font> <font class="gray" color=#999999>(11+)</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>+</font> <font class="gray" color=#999999>(7.0.1+)</font></td>
	<td class="abbr"><span class="abbr" title="на грани корректности">&plusmn; ...</span></td>
</tr><tr><td colspan="8"><dl><dt><b>warn(<i>object[, object, ...]</i>)</b></dt><dd>Аналогична <i>.log()</i> и <i>.info()</i>, но оформляется в ином дизайне, для различения типов сообщений. Поддерживаются паттерны (описаны в <i>.log()</i>).</dd></dl></td>
</tr><tr>
	<td></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
</tr><tr><td colspan="8"><dl><dt><b>debugger;</b></dt><dd>Останавливает выполнение Javascript на текущей строке. Равносилен установке точки останова (breakpoint) в отладчике. Кроме остановки, никак не отражается на исполняемой программе.</dd></dl></td>
</tr><tr>
	<td><div class="def2"><i><font class="gray" color=#999999>&nbsp;&nbsp;(оператор)</font></i></div></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
	<td><font class="suppYes" color=#66dd66>&nbsp; +</font></td>
</tr><tr><td colspan="8"><dl><dt><b>throw new Error(<i>'mesasge'</i>);</b></dt><dd>Останавливает выполнение Javascript на текущей строке, прерывая выполнение. <i>(Поддерживается всеми средами исполнения Javascript.)</i></dd></dl></td>
</tr><tr>
	<th></th>
	<th><div class="divIn"><img src="img/iconChrome.png"/></div><div class="divIn"> <a target="_blank" href="https://developer.chrome.com/devtools/docs/console-api">Chrome</a></div></th>
	<th><div class="divIn"><img src="img/iconFirebug.png"/></div><div class="divIn"> <a target="_blank" href="https://getfirebug.com/wiki/index.php/Console_API">Firebug</a></div></th>
	<th><div class="divIn"><img src="img/iconFirefox.png"/></div><div class="divIn"> <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Console">Firefox</a></div></th>
	<th><div class="divIn"><img src="img/iconIe.png"/></div><div class="divIn"> <a target="_blank" href="https://msdn.microsoft.com/en-us/library/ie/hh772169%28v=vs.85%29.aspx">IE</a></div></th>
	<th><div class="divIn"><img src="img/iconNodejs.png"/></div><div class="divIn"> <a target="_blank" href="https://nodejs.org/api/console.html">Node.js</a></div></th>
	<th><div class="divIn"><img src="img/iconSafari.png"/></div><div class="divIn"> <a target="_blank" href="https://developer.apple.com/library/mac/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html#//apple_ref/doc/uid/TP40007874-CH6-SW3">Safari</a></div></th>
	<th class="abbr"><div class="divIn"><span class="abbr" title="ver. 12.15"><img src="img/iconOpera.png"/></span></div><div class="divIn"> <span class="abbr" title="ver. 12.15"><a target="_blank" href="http://www.opera.com/dragonfly/documentation/console/">Opera</a></span></div></th>
</tr></table>


## Ссылки

* 7 ссылок из последней строки таблицы вверху.
* <a target="_blank" href="https://hacks.mozilla.org/2014/05/editable-box-model-multiple-selection-sublime-text-keys-much-more-firefox-developer-tools-episode-31/">... + much more – Firefox Developer Tools Episode 31</a> - console stack traces, styled console logs in Fx31;
* <a target="_blank" href="https://msdn.microsoft.com/library/gg589530">Using the F12 Tools Console to View Errors and Status</a> (MSDN);
* <a target="_blank" href="http://stepansuvorov.com/blog/2013/04/%D0%B2%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D0%BA%D0%BE%D0%BD%D1%81%D0%BE%D0%BB%D0%B8-%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B0/">Возможности консоли браузера</a> - 2013-04.
* <a target="_blank" href="http://habrahabr.ru/post/114483/">Используем <i>console</i> на полную</a>;
* <a target="_blank" href="http://habrahabr.ru/post/202394/">Продвинутая JavaScript-отладка при помощи <i>console.table()</i></a>;
* <a target="_blank" href="http://habrahabr.ru/post/188066/">FireBug* Console API</a> - описаны тонкости реализации, замеченные в тестах браузеров 2013 г;
* <a target="_blank" href="http://habrahabr.ru/post/198372/">API консоли Javascript</a>.
* ...
