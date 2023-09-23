const e=`{\r
  "title":"5 consejos para desarrolladores Junior", \r
  "date":"2022-03-23",\r
  "description":"Te comparto 5 consejos para desarrolladores que están comenzando en el mundo de la programación",\r
  "topic":"javascript",\r
  "toc":true\r
}\r
\r
# 1️⃣ NO PUEDES SABERLO TODO\r
\r
Eres junior. Acabas de empezar. ¿Te sientes que no lo sabes todo? ¿Te sientes mal por eso? Pues abandona ese sentimiento. NO te compares con nadie. Acabas de empezar y tienes muchas cosas por delante que aprender y asimilar. No te sientas mal. Estás aprendiendo. Estás creciendo.\r
\r
# 2️⃣ TEN PACIENCIA\r
\r
NO tengas prisa con tu crecimiento. ¿Acabas de empezar y ya te estás preocupando cuándo llegarás a Senior? ¿Acabas de empezar y sólo estás pensando cuántos meses pasarán por tu próxima subida?\r
\r
Cambia el enfoque. Tienes que ser una esponja y absorber. ¿Pero qué pasa cuando estrujas una esponja? Pues que pierde lo que había absorbido. CRECE al ritmo que necesites. A veces vamos más rápido pero no lo fuerces.\r
\r
# 3️⃣ PREGUNTAR NO ES MALO\r
\r
¿No entiendes algo? PREGUNTA.<br>\r
¿No sabes algo? PREGUNTA.<br>\r
¿Quieres conocer a alguien? PREGUNTA.\r
\r
Preguntar NO es malo. Especialmente si sabes hacer las preguntas adecuadas. Intenta hacer preguntas específicas en base a lo que entiendes. No es lo mismo decir: *"No funciona. ¿Por qué?"* a *"Veo que me da un error sobre la falta de una dependencia pero he revisado y la veo bien instalada. ¿Te ha pasado alguna vez?".*\r
\r
Está bien que intentes buscar por tu parte, en Google, las soluciones. Pero llegado el punto, no tengas miedo a hacer preguntas. **Yo tengo 15 años de experiencia y no me da miedo a preguntar a cualquier persona.**\r
\r
# 4️⃣ PERSONAS por encima del CONOCIMIENTO\r
\r
Saber programar es importante. Saber tratar con personas, comunicarte, empatizar, ayudar... es MUCHO más importante. Por ejemplo, cuando entramos a una empresa lo más complicado es saber cómo lo tienen todo montado, los procesos que siguen y la lógica del negocio. ¿Sabes quién guarda ese conocimiento?\r
\r
**Por mucha documentación que tengan, al final, las personas son quién te va a saber transmitir mejor esto**. NO descuides esto. No hay nada peor que ser muy listo pero idiota.\r
\r
# 5️⃣ TÚ OPINIÓN IMPORTA\r
\r
A todos nos pasa. Tenemos miedo de dar nuestra opinión porque creemos que no tenemos nivel suficiente y vamos a decir una tontería. Pues igual sí dices una tontería. ¡O no! ¿Pero sabes qué? Que también vas a aprender con eso.\r
\r
Si sabes mostrar tu opinión correctamente, siempre será apreciado. *"Quizás me falta todo el contexto y la experiencia. ¿Sería posible hacer X en lugar de Y? ¿Cómo lo veis?"*.\r
\r
**Recibir feedback de opiniones nos ayuda a crecer.**\r
\r
\r
En Stack Overflow, la comunidad de desarrolladores más grande del mundo, se publican preguntas y respuestas sobre programación. En este post, vamos a ver las 5 preguntas más populares de JavaScript en Stack Overflow.\r
\r
## 5. ¿Cómo comprobar que una cadena de texto incluye otra?\r
\r
Solución: usar el método String.prototype.includes.\r
\r
Devuelve un booleano cuando la cadena de texto que se le pasa como argumento es parte de la cadena que lo llama.\r
\r
Ejemplo:\r
\r
\`\`\`javascript\r
const string = "midudev"\r
const substring = "midu"\r
\r
// la mejor\r
string.includes(substring) // true\r
\r
// forma antigua\r
string.indexOf(substring) !== -1 // true\r
\`\`\`\r
\r
## 4. ¿Cómo redireccionar a otra página en JavaScript?\r
\r
Solución: usando el objeto window.location\r
\r
Puedes cambiar la URL de la página actual reasingando la propiedad window.location.href.\r
\r
También puedes llamar a los métodos assign() o replace() del objeto window.location.\r
\r
Ejemplo:\r
\r
\`\`\`javascript\r
// redirecciona a otra página\r
// el usuario SÍ podrá volver a ella con el botón de atrás\r
window.location.href = "https://midu.dev"\r
// o también\r
window.location.assign("https://midu.dev")\r
\r
// el usuario NO podrá volver a ella con el botón de atrás\r
window.location.replace("https://midu.dev")\r
\`\`\`\r
\r
## 3. ¿Qué hace el 'use strict' de JavaScript?\r
\r
Solución: es un modo en el que JavaScript no permite ciertas operaciones que pueden ser peligrosas.\r
\r
En el modo estricto, JavaScript no permite operaciones que, de otra forma, no lanzarían un error:\r
\r
* Crear variables globales sin usar la palabra reservada var, let o const.\r
* Crear funciones con el mismo nombre que una propiedad del objeto Object.prototype.\r
* Eliminar una variable con la palabra reservada delete.\r
* Uso de las siguientes palabras como nombre de una variable: \`package\`, \`private\`, \`public\`, \`static\`, \`interface\`, \`implements\`, \`let\`, \`yield\`, \`protected\`, \`interface\`, \`package\`, \`private\`, \`protected\`, \`static\`, \`yield\`.\r
* Muchas protecciones contra la inyección de código al usar \`eval\`.\r
\r
Algunos ejemplos:\r
\r
\`\`\`javascript\r
'use strict'\r
\r
userName = 'Miguel'  // ❌ ReferenceError\r
\r
const person = { name: 'Miguel' }\r
delete person // ❌ SyntaxError\r
\r
function sum(a, a) {} // ❌ SyntaxError\r
\`\`\`\r
\r
## 2. ¿Cómo saber si un elemento es visible usando JavaScript?\r
\r
La pregunta original habla de JQuery, pero vamos a ver cómo se hace con JavaScript puro.\r
\r
Que un elemento no se vea puede ser por muchas cosas. Es complicado hacer una solución única que funcione en todos los casos.\r
\r
Pero mirando sus propiedades CSS o su posición debería cubrir muchas de las más comunes:\r
\r
\`\`\`javascript\r
// visible por sus propiedades\r
const isVisible = (\r
  el.style.display !== 'none'\r
  && el.visibility !== 'hidden'\r
)\r
\r
// visible por su posición\r
const position = el.getBoundingClientRect()\r
const isInView = (\r
  position.top >= 0\r
  && position.bottom <= window.innerHeight\r
)\r
\`\`\`\r
\r
Pero también es posible que no sea visible por su opacidad o por estar oculto por otro elemento. En ese caso, habría que hacer una comprobación más compleja.\r
\r
## 1. ¿Cómo eliminar un elemento específico de un Array?\r
\r
Hay varias formas de hacerlo. La más sencilla es usar el método \`Array.prototype.splice\`.\r
\r
\`\`\`javascript\r
const array = [1, 2, 3, 4, 5]\r
const indexToRemove = 2\r
const itemsToRemove = 1\r
array.splice(indexToRemove, itemsToRemove) // [1, 2, 4, 5]\r
\`\`\`\r
\r
Otra forma es usar el método Array.prototype.filter o .slice:\r
\r
\`\`\`javascript\r
const array = [1, 2, 3, 4, 5]\r
const indexToRemove = 2\r
array.filter((_, index) => index !== indexToRemove) // [1, 2, 4, 5]\r
\r
array\r
  .slice(0, indexToRemove)\r
  .concat(array.slice(indexToRemove + 1)) // [1, 2, 4, 5]\r
\`\`\``;export{e as default};
