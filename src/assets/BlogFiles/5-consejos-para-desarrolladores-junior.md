{
  "title":"5 consejos para desarrolladores Junior", 
  "date":"2022-03-23",
  "description":"Te comparto 5 consejos para desarrolladores que están comenzando en el mundo de la programación",
  "topic":"javascript",
  "toc":true
}

# 1️⃣ NO PUEDES SABERLO TODO

Eres junior. Acabas de empezar. ¿Te sientes que no lo sabes todo? ¿Te sientes mal por eso? Pues abandona ese sentimiento. NO te compares con nadie. Acabas de empezar y tienes muchas cosas por delante que aprender y asimilar. No te sientas mal. Estás aprendiendo. Estás creciendo.

# 2️⃣ TEN PACIENCIA

NO tengas prisa con tu crecimiento. ¿Acabas de empezar y ya te estás preocupando cuándo llegarás a Senior? ¿Acabas de empezar y sólo estás pensando cuántos meses pasarán por tu próxima subida?

Cambia el enfoque. Tienes que ser una esponja y absorber. ¿Pero qué pasa cuando estrujas una esponja? Pues que pierde lo que había absorbido. CRECE al ritmo que necesites. A veces vamos más rápido pero no lo fuerces.

# 3️⃣ PREGUNTAR NO ES MALO

¿No entiendes algo? PREGUNTA.<br>
¿No sabes algo? PREGUNTA.<br>
¿Quieres conocer a alguien? PREGUNTA.

Preguntar NO es malo. Especialmente si sabes hacer las preguntas adecuadas. Intenta hacer preguntas específicas en base a lo que entiendes. No es lo mismo decir: *"No funciona. ¿Por qué?"* a *"Veo que me da un error sobre la falta de una dependencia pero he revisado y la veo bien instalada. ¿Te ha pasado alguna vez?".*

Está bien que intentes buscar por tu parte, en Google, las soluciones. Pero llegado el punto, no tengas miedo a hacer preguntas. **Yo tengo 15 años de experiencia y no me da miedo a preguntar a cualquier persona.**

# 4️⃣ PERSONAS por encima del CONOCIMIENTO

Saber programar es importante. Saber tratar con personas, comunicarte, empatizar, ayudar... es MUCHO más importante. Por ejemplo, cuando entramos a una empresa lo más complicado es saber cómo lo tienen todo montado, los procesos que siguen y la lógica del negocio. ¿Sabes quién guarda ese conocimiento?

**Por mucha documentación que tengan, al final, las personas son quién te va a saber transmitir mejor esto**. NO descuides esto. No hay nada peor que ser muy listo pero idiota.

# 5️⃣ TÚ OPINIÓN IMPORTA

A todos nos pasa. Tenemos miedo de dar nuestra opinión porque creemos que no tenemos nivel suficiente y vamos a decir una tontería. Pues igual sí dices una tontería. ¡O no! ¿Pero sabes qué? Que también vas a aprender con eso.

Si sabes mostrar tu opinión correctamente, siempre será apreciado. *"Quizás me falta todo el contexto y la experiencia. ¿Sería posible hacer X en lugar de Y? ¿Cómo lo veis?"*.

**Recibir feedback de opiniones nos ayuda a crecer.**


En Stack Overflow, la comunidad de desarrolladores más grande del mundo, se publican preguntas y respuestas sobre programación. En este post, vamos a ver las 5 preguntas más populares de JavaScript en Stack Overflow.

## 5. ¿Cómo comprobar que una cadena de texto incluye otra?

Solución: usar el método String.prototype.includes.

Devuelve un booleano cuando la cadena de texto que se le pasa como argumento es parte de la cadena que lo llama.

Ejemplo:

```javascript
const string = "midudev"
const substring = "midu"

// la mejor
string.includes(substring) // true

// forma antigua
string.indexOf(substring) !== -1 // true
```

## 4. ¿Cómo redireccionar a otra página en JavaScript?

Solución: usando el objeto window.location

Puedes cambiar la URL de la página actual reasingando la propiedad window.location.href.

También puedes llamar a los métodos assign() o replace() del objeto window.location.

Ejemplo:

```javascript
// redirecciona a otra página
// el usuario SÍ podrá volver a ella con el botón de atrás
window.location.href = "https://midu.dev"
// o también
window.location.assign("https://midu.dev")

// el usuario NO podrá volver a ella con el botón de atrás
window.location.replace("https://midu.dev")
```

## 3. ¿Qué hace el 'use strict' de JavaScript?

Solución: es un modo en el que JavaScript no permite ciertas operaciones que pueden ser peligrosas.

En el modo estricto, JavaScript no permite operaciones que, de otra forma, no lanzarían un error:

* Crear variables globales sin usar la palabra reservada var, let o const.
* Crear funciones con el mismo nombre que una propiedad del objeto Object.prototype.
* Eliminar una variable con la palabra reservada delete.
* Uso de las siguientes palabras como nombre de una variable: `package`, `private`, `public`, `static`, `interface`, `implements`, `let`, `yield`, `protected`, `interface`, `package`, `private`, `protected`, `static`, `yield`.
* Muchas protecciones contra la inyección de código al usar `eval`.

Algunos ejemplos:

```javascript
'use strict'

userName = 'Miguel'  // ❌ ReferenceError

const person = { name: 'Miguel' }
delete person // ❌ SyntaxError

function sum(a, a) {} // ❌ SyntaxError
```

## 2. ¿Cómo saber si un elemento es visible usando JavaScript?

La pregunta original habla de JQuery, pero vamos a ver cómo se hace con JavaScript puro.

Que un elemento no se vea puede ser por muchas cosas. Es complicado hacer una solución única que funcione en todos los casos.

Pero mirando sus propiedades CSS o su posición debería cubrir muchas de las más comunes:

```javascript
// visible por sus propiedades
const isVisible = (
  el.style.display !== 'none'
  && el.visibility !== 'hidden'
)

// visible por su posición
const position = el.getBoundingClientRect()
const isInView = (
  position.top >= 0
  && position.bottom <= window.innerHeight
)
```

Pero también es posible que no sea visible por su opacidad o por estar oculto por otro elemento. En ese caso, habría que hacer una comprobación más compleja.

## 1. ¿Cómo eliminar un elemento específico de un Array?

Hay varias formas de hacerlo. La más sencilla es usar el método `Array.prototype.splice`.

```javascript
const array = [1, 2, 3, 4, 5]
const indexToRemove = 2
const itemsToRemove = 1
array.splice(indexToRemove, itemsToRemove) // [1, 2, 4, 5]
```

Otra forma es usar el método Array.prototype.filter o .slice:

```javascript
const array = [1, 2, 3, 4, 5]
const indexToRemove = 2
array.filter((_, index) => index !== indexToRemove) // [1, 2, 4, 5]

array
  .slice(0, indexToRemove)
  .concat(array.slice(indexToRemove + 1)) // [1, 2, 4, 5]
```