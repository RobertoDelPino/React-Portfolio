{
  "title":"¿Qué es TDD y para qué sirve?", 
  "date":"15-01-2024",
  "description":"",
  "topic":"XP",
}


# ¿Qué es TDD?

TDD son las siglas de Test Driven Development y si lo traducimos, sería "Desarrollo Dirigido por Pruebas". 

Consiste en escribir primero el test, después el código que ponga en verde el test y por último, refactorizar el código para hacerlo más sencillo y comprensible.

Es una práctica de XP (extreme programming). XP es una metodológia de desarrollo que abarca desde la comunicación dentro del equipo hasta técnicas de programación:

Los valores de XP:
1. Simplicidad
2. Comunicacións
3. Feedback
4. Respeto
5. Valor

En este post no se va a obtener toda la información ni los ejemplos para poder ejecutar de manera eficiente TDD. Para ello, recomiendo un libro de Carlos Blé en donde explica a fondo TDD.

### Pasos a seguir en un caso real:

El cliente nos pide que desarollemos un código que sea capaz de indicar si un número es primo o no.

![Stages of TDD](../BlogImages/tdd-stages.png)

1. El cliente escribe la historia de usuario (indica las necesidades)

2. El equipo de desarrollo junto al cliente escriben todos los posibles casos que pueden ocurrir
    - El número es primo
    - El número no es primo

3. El equipo de desarrollo escoge el caso más simple y escribe una prueba unitaria

4. Se comprueba que este test falla

5. Se escribe el código que hace pasar el test

6. Se ejecutan todos los tests

7. Se refactoriza y se intenta dejar más simple el código

8. Volver a pasar todos los tests para comprobar que no se ha roto nada.

9. Pasamos al siguiente caso y volvemos a repetir desde el punto 4 hasta que terminemos el código.



Trabajar utilizando TDD ayuda a que entendamos mejor el código. Es importante que el conocimiento del equipo sobre el negocio para poder realizar un software de calidad

### Practicar a través de Katas

Son ejercicios sencillos que tienen como intención aprender, aplicar y mejorar técnicas de programación.

Algunas katas que recomiendo son:
1. Fizz Buzz
2. String Calculator
3. Mars Rovers
4. Yatzy Kata (Aprender a refactorizar)

Ventajas de utilizar TDD:
1. Código más robusto
2. Código más seguro
3. Código más mantenible
4. Mayor rapidez en el desarollo

Desventajas de utilizar TDD:
1. Hay que utilizarlo mucho y tener mucho conocimiento para llegar a ser productivo.
3. Bases de datos (repositorios). Cuando se desea hacer pruebas de código que traigan información de un repositorio, se utilizan MockObjects (objetos simulados) y aprender a utilizarlo requiere tiempo.  
