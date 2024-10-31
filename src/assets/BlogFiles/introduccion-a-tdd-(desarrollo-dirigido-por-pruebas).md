# ¿Qué es TDD?

TDD son las siglas de Test Driven Development y si lo traducimos, sería "Desarrollo Dirigido por Pruebas". Consiste en escribir primero el test, después el código que ponga en verde el test y por último, refactorizar el código para hacerlo más sencillo y comprensible. Además, es una práctica de XP (extreme programming), que es una metodológia de desarrollo que abarca desde la comunicación dentro del equipo hasta técnicas de programación.

Los valores de XP:
1. Simplicidad
2. Comunicacións
3. Feedback
4. Respeto
5. Valor

En este post no se va a obtener toda la información ni los ejemplos para poder ejecutar de manera eficiente TDD. Para ello, recomiendo un [libro de Carlos Blé](https://savvily.es/libros/diseno-agil-con-tdd/) en donde explica a fondo TDD.

Comenzaremos explicando los diferentes pasos a seguir durante la creación de código con TDD. Tras ello, veremos las ventajas y desventajas que veo y cómo podemos practicar TDD.

### Pasos a seguir en un caso real:

![Stages of TDD](/BlogImages/tdd-stages.png)

#### El cliente nos pide que desarollemos un código que sea capaz de indicar si un número es primo o no:

1. El cliente escribe la historia de usuario (indica las necesidades). 
2. El equipo de desarrollo junto al cliente escriben todos los posibles casos que pueden ocurrir.  
    Ejemplo:
    - El número es primo
    - El número no es primo
3. El equipo de desarrollo escoge el caso más simple y escribe una prueba unitaria
4. Se comprueba que este test falla
5. Se escribe el código que hace pasar el test
6. Se ejecutan todos los tests
7. Se refactoriza y se intenta dejar más simple el código
8. Vuelven a pasar todos los tests para comprobar que no se ha roto nada.
9. El equipo pasa al siguiente caso y vuelve a repetir desde el punto 4 hasta que terminemos el código.


# Aplicando TDD en el caso propuesto anteriormente en Typescript con Jest

**Historia de usuario**: El cliente nos pide que desarollemos un código que sea capaz de indicar si un número es primo o no.

**Casos de uso**:   
  - El número es primo.
  - El número no es primo (si sabemos que un numero es primo, ya sabremos si no es primo. Vamos a añadir un test igualmente para comprobarlo).


#### Red test: El número es primo.
``` typescript
it("indicates true when number is prime", () => {
    const result = isPrimeNumber(3);

    expect(result).toBe(true);
});
```

#### Production code y green tests: 

``` typescript
function isPrimeNumber(number: number): boolean {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        return true;
    } else {
        return false;
    }
}
```

#### Refactor
``` typescript
function isPrimeNumber(number: number): boolean {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
        }
    }

    return isPrime ? true : false;
}
```

#### Más refactors: 
``` typescript
function isPrimeNumber(number: number): boolean {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }

    return true;
}
```

### Último caso de uso: No es un número primo

#### Green test ( no hace falta añadir más código a la implementación que hay porque ya se sabe si no es primo al comprobar que es primo )
``` typescript
it("indicates false when number is not prime", () => {
    const result = isPrimeNumber(12);

    expect(result).toBe(false);
});
```

Ahora que hemos visto un pequeño ejemplo en donde se emplea TDD, veamos las ventajas y desventajas que tiene:

### Ventajas de utilizar TDD:
1. **Código más robusto**.
2. **Código más seguro**. Siempre que hagas un cambio a un método de un service que sea utilizado en otros lugares del proyecto, si tiene tests, puedes comprobar que esas funcionalidades que utilizan el service siguen funcionando o están fallando.
3. **Código más mantenible**. Una buena práctica si tienes tests en tu proyecto y tienes que revisar/cambiar código antiguo con una funcionalidad compleja, es revisar cómo funciona el código a través de los tests. El *describe* de cada test debería de explicar, de forma sencilla, un comportamiento de la funcionalidad.
4. **Mayor rapidez en el desarollo**. Durante la creación de proyectos, las empresas suelen añadir los tests al final del desarrollo. Esto puede llevar a no completar el proyecto en el plazo indicado por culpa de descubrir errores importantes durante la creación de los tests.

### Desventajas de utilizar TDD:
1. **Hay que utilizarlo mucho y tener mucho conocimiento para llegar a ser productivo.**
2. **Bases de datos (repositorios)**. Cuando se desea hacer pruebas de código que traigan información de un repositorio, se utilizan MockObjects (objetos simulados) y aprender a utilizarlo requiere tiempo.

> Trabajar utilizando TDD ayuda a que entendamos mejor el código. Es importante que el conocimiento del equipo sobre el negocio sea lo más alto posible para poder realizar un software de calidad.  

# Practicar a través de Katas

Las katas de código son ejercicios de programación diseñados para mejorar las habilidades de desarrollo y practicar técnicas específicas. El término se inspira en las katas de las artes marciales, que consisten en secuencias de movimientos practicadas en solitario o en parejas para comprender y mejorar las habilidades. Tanto en las katas de código como en las de artes marciales, la repetición es fundamental para el aprendizaje y la internalización de los movimientos, beneficiando tanto a principiantes como a expertos en la mejora continua de sus habilidades.

### Algunas katas que recomiendo son:
1. Fizz Buzz.
2. String Calculator.
3. Mars Rovers.
4. Yatzy Kata (Aprender a refactorizar).

En última instancia, adoptar el enfoque del Desarrollo Dirigido por Pruebas no solo se traduce en un código más sólido y seguro, sino que también promueve una comprensión más profunda del negocio por parte del equipo de desarrollo. Al abrazar la simplicidad, la comunicación efectiva y la práctica constante, no solo mejoramos nuestras habilidades, sino que también avanzamos hacia un desarrollo de software más ágil y de alta calidad.

En el siguiente artículo desarrollo la Kata de FizzBuzz, es interesante ver cómo se desarrolla con TDD un código con más casos de uso: [Introducción de TDD 2. Tu primera Kata](/blog/introducción-a-tdd-2.-tu-primera-kata)

¡Si tienes cualquier duda, no dudes en contactar conmigo a través de Linkedin!

