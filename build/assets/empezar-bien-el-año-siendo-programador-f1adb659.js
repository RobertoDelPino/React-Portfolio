const e=`{\r
  "title":"5 consejos para desarrolladores Junior", \r
  "date":"2022-03-23",\r
  "description":"Te comparto 5 consejos para desarrolladores que están comenzando en el mundo de la programación",\r
  "topic":"javascript",\r
  "toc":true\r
}\r
\r
**El pasado 4 de diciembre** se celebró el 25 aniversario del tan querido, y vilipendiado, lenguaje de programación **JavaScript**. Lo cierto es que de una forma u otra, en estos 25 años, **JavaScript se ha convertido en la lingua franca de la programación**, especialmente de la referida a la web pero que ha traspasado fronteras gracias, seguramente, a su sencillez.\r
\r
Si lo prefieres, hice un especial de dos horas en mi [**canal de Youtube**](https://www.youtube.com/midudev):\r
\r
{{< youtube id="swfvSLCXxHE" >}}\r
\r
Y si no, sigue leyendo y empezamos con estas 25 curiosidades.\r
\r
## ¿Seguro que fue ayer el aniversario de JavaScript?\r
\r
Sí y no. En realidad, **la primera versión del lenguaje que hoy conocemos como JavaScript se lanzó en mayo de 1995**. Su primer nombre fue *Mocha*. Más tarde pasó a llamarse *LiveScript* y, tras unos meses, se quedó con el nombre definitivo de **JavaScript**.\r
\r
Así lo explica el propio creador de JavaScript, *Brendan Eich*:\r
\r
<blockquote class="twitter-tweet" data-conversation="none" data-dnt="true"><p lang="en" dir="ltr">That (trademarked) name is 25 today. The birthday was in May, already celebrated. I&#39;m torn, as JS name was a big fat marketing scam! Java was hot, but died in the browser (MS rejecting Java after doing a Sun deal, and mostly Flash, killed it; then HTML5/fast-JS spiked its heart).</p>&mdash; BrendanEich (@BrendanEich) <a href="https://twitter.com/BrendanEich/status/1334966006813319168?ref_src=twsrc%5Etfw">December 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>\r
\r
Finalmente aunque creado en marzo de 1995 y anunciado en diciembre, no fue **hasta marzo de 1996**, en **Netscape Navigator 2.0 que se lanzó con soporte para Javascript 1.0** de forma estable.\r
\r
## ¿Realmente se creó en 10 días?\r
\r
**La primera versión que se lanzó con el nombre de Mocha sí tardó 10 días en desarrollarse.** Eso es porque *Netscape* presionó a Brendan en tener una primera versión funcional lo antes posible para poder enfrentarse al empuje de Microsoft para usar Visual Basic en la web.\r
\r
Obviamente, la primera versión de JavaScript que conocemos como Mocha no es, para nada, parecida a la que conocemos ahora. Ni siquiera a la versión que apareció en diciembre de 1995 (ya que los 10 días se usaron en mayo y se iteró el lenguaje final).\r
\r
[Fuente: A brief history of JavaScript](https://www.youtube.com/watch?v=GxouWy-ZE80&feature=emb_title)\r
\r
## ¿Realmente no tiene nada que ver con Java?\r
\r
A ver **JavaScript CLARAMENTE no es una versión de Java para programar en páginas web.** Y seguramente hayas escuchado el manido chiste que **Java es a JavaScript lo que Palo es a Paloma.**\r
\r
**PERO...** en realidad sí que tiene cosas que ver. Aunque no es el mismo lenguaje sí que hay muchas referencias. La sintaxis de **Java influenció mucho a JavaScript**. La idea de tipos de datos primitivos y objetos... ¡hasta el objeto **Date** es port directo de \`java.util.Date\`!.\r
\r
No sólo eso, **el propio nombre se utilizó ya que Java tenía muchísima popularidad en la época.** Utilizar Java en el nombre fue gracias a un acuerdo al que se llegó con Sun Microsystems.\r
\r
No es la única influencia, por supuesto. Por ejemplo, **la mítica herencia de prototipos viene del lenguaje Self, también de Sun Microsystems**. Y hay más:\r
\r
{{< img align="center" src="/images/25-cosas-de-javascript-aniversario-01.png" alt="Las influencias de JavaScript" >}}\r
\r
[Fuente: SpeakingJS](http://speakingjs.com/es5/ch03.html#:~:text=JavaScript%20was%20influenced%20by%20several,is%20a%20port%20of%20java)\r
\r
## ¿Por qué se creó JavaScript?\r
\r
Lo cierto es que en aquel entonces Java, a secas, tenía cierta popularidad y se usaba en las páginas web para darles cierta funcionalidad. Así que **la idea inicial de JavaScript era la de ser un lenguaje pegamento, que permitiera a los diseñadores Web, que tampoco es que supieran mucho de programación, poder añadir cierta funcionalidad básica**.\r
\r
La idea, además, era **poder manipular y recoger datos en la web para que pudieran interactuar**, justamente, con el código Java. De forma que las interacciones más sencillas se podían hacer en la parte de la web y, las más complejas, en Java.\r
\r
[Fuente: 2ality](https://2ality.com/2011/03/JavaScript-how-it-all-began.html#:~:text=This%20post%20presents%20a%20brief,what%20influenced%20its%20design%20decisions.&text=They%20recruited%20Eich%20in%201995,Scheme%20(a%20Lisp%20dialect).)\r
\r
## No siempre existió la igualdad estricta ===\r
\r
Como hemos explicado, JavaScript buscaba ser un lenguaje de programación pensado para diseñadores. Por ello Brendan decidió adoptar uno de los aspectos más diferenciadores de JavaScript: **la coerción de datos**. Y, para ello, la igualdad convertía los datos para poder compararlos. Así que \`2 == "2"\` era, y sigue siendo, \`true\`.\r
\r
No fue hasta unos años después, en 1999, cuando apareció **Javascript 1.3 que se añadió la igualdad estricta** con \`===\`. De forma que \`2 === "2"\` es \`false\`.\r
\r
**Hoy en día deberías utilizar siempre la igualdad estricta** para asegurarte un mejor control de los tipos de datos de tu aplicación.\r
\r
[Fuente: Javascript 1.3 Manual](https://docs.oracle.com/cd/E19957-01/816-6409-10/816-6409-10.pdf)\r
\r
## JavaScript es una marca registrada por...\r
\r
No te lo vas a creer, pero JavaScript en realidad es una marca registrada. ¿Y sabes quién tiene ese privilegio? Pues nada más y nada menos que **Oracle.** Efectivamente, **la empresa propietaria de Java.** Así que luego no es ninguna sorpresa que haya gente que los asocie.\r
\r
[Fuente: United States Patent and Trademark Office](https://tsdr.uspto.gov/#caseNumber=75026640&caseType=SERIAL_NO&searchType=statusSearch)\r
\r
## Jscript, la copia de Microsoft\r
\r
El caso es que allá por 1996, **Microsoft vió en JavaScript un potente competidor** ya que su sencillez dotaba a las páginas que se visualizaban en Netscape una ventaja competitiva. Pero claro, JavaScript era una marca registrada como hemos comentado antes y Microsoft no quería lidiar con Sun Microsystemas.\r
\r
Lo que hizo fue crear su propio lenguaje llamado... **wait for it!**... \`JScript\`. Quitando tres letras al nombre conseguían olvidarse de los problemas legales, eso sí, tras hacer ingeniería inversa de \`JavaScript\`.\r
\r
Se añadió en **Internet Explorer 3.0** y su **última versión estable es de 2011.**\r
\r
[Fuente: Wikipedia](https://en.wikipedia.org/wiki/JScript)\r
\r
## ECMAScript !== Javascript\r
\r
Viendo que Microsoft creó *su propio* *JavaScript* y el auge que iba teniendo JavaScript como lenguaje de scripting en la web se llegó a un entendimiento para estandarizar el lenguaje de programación en un ente independiente. De esta forma la *ECMA* (*European Computer Manufacturers Association*) fue la encargada de poner en común lo que Javascript y JScript intentaban lograr.\r
\r
A pesar de la primera especificación, que apareció en junio de 1997, **JavaScript y JScript siguieron durante un tiempo divergiendo** en ciertos métodos y funcionalidades que aportaban.\r
\r
De esta forma podríamos decir que **ECMAScript** es el estándar para crear un lenguaje de programación y JavaScript es la implementación de ese lenguaje. Hoy en día no hay diferenciación en la práctica pero, para que nos hagamos una idea, ECMAScript usa la extensión \`.es\` para sus ficheros.\r
\r
Sobre el nombre, aquí os dejo una perla del creador de Javascript:<br>\r
***EcmaScript siempre ha sido un nombre indeseado que suena como una enfermedad de piel.***\r
\r
[Fuente: Press Release de Netscape sobre la estandarización de Javascript](https://web.archive.org/web/19981203070212/http://cgi.netscape.com/newsref/pr/newsrelease289.html)<br>\r
[Fuente: Mozilla Discussion Mailing List](https://mail.mozilla.org/pipermail/es-discuss/2006-October/000133.html)\r
\r
## ECMAScript 4\r
\r
Parecía que ECMA iba en el buen camino y año tras año iba añadiendo nuevas y necesarias mejoras al lenguaje. Sin embargo, después de tres versiones, vendría la que sería la versión abandonada de la especificación. **ECMAScript 4.**\r
\r
¿Y por qué fue esto? Pues **resulta que ECMAScript 4 era una nueva especificación que traía MUCHÍSIMOS cambios.** Algunos que, a día de hoy ni se han añadido.\r
\r
Por ejemplo, se añadían clases pero algo más avanzadas que las que tenemos hoy en día. Teníamos \`Interfaces\` y hasta **tipado estricto**, no muy diferente al que hoy en día nos da **TypeScript**.\r
\r
Algunos ejemplos:\r
\r
\`\`\`javascript\r
// clase con tipos genéricos\r
class C<T> {\r
  // propiedades de clase como variables\r
  var number = 500;\r
  const pi = 3.14\r
\r
  // funciones dentro de la clase\r
  function f(n) { return n+val*2 }\r
}\r
// una interfaz\r
interface MyInterface {\r
  function foo();\r
}\r
\r
// tipos estrictos\r
function add(a: int, b:int): int {\r
  return a + b;\r
}\r
\`\`\`\r
\r
Al final como traía TANTOS cambios y no se llegaba a ningún acuerdo **se desestimó esta versión después de 10 años de estar trabajando en ello.** Esta es una de las razones que motivó muchos cambios en lo que conocemos hoy como TC39, para evitar este tipo de problemas con las especificaciones.\r
\r
[Fuente: ECMAScript 4, la versión perdida](https://evertpot.com/ecmascript-4-the-missing-version/)\r
\r
## E4X\r
\r
Pero lo que hemos visto no era la única sorpresa que traía **ECMAScript 4.** También se trabajaba en una extensión de la especificación conocida como **E4X** que buscaba unir Javascript con XML. Era tal que así:\r
\r
\`\`\`javascript\r
const myClass = 'welcome';\r
const name = 'Evert';\r
const foo = <div class={myClass}>{"Hello " + name }</div>;\r
\`\`\`\r
\r
¿Te suena? Efectivamente, **hoy en día JSX de Facebook hace algo similar** y, sin ninguna duda, E4X sirvió como inspiración.\r
\r
Como curiosidad, **E4X** llegó a funcionar en Firefox en algunas versiones y se **retiró su soporte en Firefox 10.**\r
\r
[Fuente: E4X MDN Docs](https://developer.mozilla.org/es/docs/E4X)\r
\r
## Node.js no fue el primer Javascript en el servidor\r
\r
Una vez superada la crisis de **ECMAScript 4**, seguimos evolucionando el lenguaje y llevando Javascript a nuevas cotas. Tras el lanzamiento del motor V8 por parte de Google, Javascript comenzó a ir **MUY rápido**. Esto hacía que empezase a ser un lenguaje más interesante para otros ámbitos. \r
\r
Y así fue con Node.js, nacido en 2009. Pero, por raro que parezca, **Node.js no fue la primera vez que se intentaba llevar Javascript a la parte del servidor.** De hecho este objetivo se buscó desde el primer día.\r
\r
**Netscape** tenía un framework llamado **LiveWire** que usaba **Javascript** para **desarrollar sus aplicaciones tanto en servidor como en cliente.** De esta forma podríamos crear scripts que se ejecutaban en el servidor utilizando un intérprete y que, además, permitía usar ese mismo código en el cliente.\r
\r
{{< img align="center" src="/images/25-cosas-de-javascript-aniversario-02.gif" alt="Netscape LiveWire ya permitía usar Javascript en el servidor" >}}\r
\r
[Fuente: Using LiveWire with Javascript](http://balok.wooten.net/livewire/mocha.htm)\r
\r
## CoffeeScript\r
\r
Ya hemos visto anteriormente los lenguajes que influenciaron a Javascript en el inicio pero... **¿qué lo llevó al siguiente nivel?** Lo cierto es que, entre otras cosas, CoffeeScript tiene bastante que ver gracias a la popularidad que consiguió en 2010 y que abrió un nuevo ecosistema en Javascript que dura hoy en día con *TypeScript* y *Babel*: **los transpiladores.**\r
\r
**CoffeeScript es un lenguaje de programación que compila su código a Javascript.** Su objetivo era simplificar el código que se escribía, haciéndolo más breve y en ocasiones verboso. Además, incluía ciertas características que ahora son conocidas por todos, como las *arrow function*, el *return implícito* o el *azúcar sintáctico para usar clases.*\r
\r
**Todavía hoy en día sigue usándose** (a la hora de escribir este artículo, la última versión es la 2.5.1), aunque menos que antes, y algunos grandes proyectos como **Atom Editor** fueron construidos con este lenguaje (aunque poco a poco han ido migrando de nuevo a Javascript tras la irrupción de Babel):\r
\r
\`\`\`coffee\r
square = (x) -> x * x\r
\r
race = (winner, runners...) -> print winner, runners\r
\r
alert "I knew it!" if elvis?\r
\`\`\`\r
\r
[Fuente: CoffeeScript](https://coffeescript.org/)\r
\r
## Conclusiones\r
\r
Hasta aquí la primera parte de este artículo. Seguiremos en un siguiente artículo para seguir hablando de **curiosidades de Javascript**. Mientras, puedes ver **el vídeo que hice hablando sobre estas** y otras anécdotas de este lenguaje de programación que cumple 25 años. 👇\r
\r
{{< youtube id="swfvSLCXxHE" >}}`;export{e as default};
