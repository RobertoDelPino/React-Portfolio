Hace unos días publicaba un artículo en donde explicaba, de forma introductoria, [TDD](/blog/introducción-a-tdd-(desarrollo-dirigido-por-pruebas)). En este artículo me gustaría realizar una kata bastante sencilla con TDD en donde vaya explicando paso por paso lo que suelo tener en cuenta a la hora de desarrollar estas katas. **La kata que vamos a realizar se llama "Fizz Buzz Kata"**. 

## Repaso de los fundamentos de TDD

Es una metodología de trabajo, dentro de XP (extreme programming), que consiste en escribir un test de un caso de uso que falle, después crear el código que ponga en verde el test y por último, refactorizar el código para hacerlo más legible y mantenible. 

Los casos de usos son el resultado de dividir la necesidad del cliente en todas las posibles soluciones que pueda devolver un código. Ahora lo veremos con más detalle durante la realización de la Kata.

Os dejo por aquí una imagen con los pasos a seguir con TDD:    
![Stages of TDD](/BlogImages/tdd-stages.png)    
Ahora que hemos revisado lo fundamental, vamos a comenzar con la Kata.

## Instrucciones

Escribe una función que tome enteros positivos y muestre su representación en cadena.

Tu función debe cumplir las siguientes normas adicionales:

- Si el número no es múltiplo de tres ni de cinco, devolverá el mismo número.
- Si el número es múltiplo de tres, devolverá la palabra "Fizz".
- Si el número es múltiplo de cinco, devolverá la palabra "Buzz".
- Si el número es múltiplo de tres y de cinco, devolverá la palabra "FizzBuzz".

Por ejemplo, dados los números del 1 al 15 en orden, la función devolvería:

``` javascript
- 1  
- 2  
- Fizz  
- 4  
- Buzz  
- Fizz  
- 7  
- 8   
- Fizz  
- Buzz  
- 11  
- Fizz  
- 13  
- 14  
- FizzBuzz
```

## Reflexiones antes de comenzar la kata

¿Cómo se comprueba que un número es múltiplo de otro número? Bastante sencillo, si el resto de la división de los números da 0, significa que el número es múltiplo del otro número.

**Ejemplo**:  
Número 1 = 21  
Número 2 = 3   
El resto de 21 / 3 = 0, por lo tanto, 21 es un múltiplo de 3

## Primer ciclo

Primer caso de uso: **Si el número es múltiplo de tres, devolverá la palabra "Fizz"**

### Test en rojo
```typescript
it("should return Fizz when 3", () => {
    const result = fizzBuzz(3);
    expect(result).toBe("Fizz");
});
```

### Código que permite poner en verde el test
```typescript
function fizzBuzz(number: number): string | number {
    if(number % 3 == 0){
      return "Fizz";
    }
}
```

### Refactor
```typescript
function fizzBuzz(number: number): string | number {
    return (number % 3) == 0 ?? "Fizz"
}
```

>**Importante**. Destacar que una buena práctica de TDD es implementar el código lo más sencillo posible para que pase la prueba con la menor complejidad posible.

## Segundo ciclo

Siguiente caso de uso: **Si el número es múltiplo de cinco, devolverá la palabra "Buzz"**

### Test en rojo
``` typescript
it("should return Buzz when 5", () => {
    const result = fizzBuzz(5);
    expect(result).toBe("Buzz");
});
```

### Código que permite poner en verde el test
``` typescript
function fizzBuzz(number: number): string | number {
    if(number % 3 == 0){
        return "Fizz";
    }

    if(number % 5 == 0){
        return "Buzz";
    }
}
```


### Refactor 

No hay nada que refactorizar, está bastante bien.


## Tercer ciclo

El siguiente caso de uso: "**Si el número no es múltiplo de tres ni de cinco, devolverá el mismo número**".

### Test en Rojo
```typescript
it("should return 7 when 7", () => {
    const result = fizzBuzz(7);
    expect(result).toBe(7);
});
```

### Código que permite poner en verde el test
```typescript
function fizzBuzz(number: number): string | number {
    if(number % 3 == 0){
        return "Fizz";
    }

    if(number % 5 == 0){
        return "Buzz";
    }

    return number;
}
```

### Refactor

Por ahora no hace falta refactorizar nada. Pasemos al siguiente ciclo


## Cuarto ciclo

Último caso de uso: **Si el número es múltiplo de tres y de cinco, devolverá la palabra "FizzBuzz"**

### Test en rojo
``` typescript
it("should return fizzBuzz when 15", () => {
    const result = fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
});
```

### Código que permite poner en verde el test
``` typescript
function fizzBuzz(number: number): string | number {
    if(number % 3 == 0 && number % 5 == 0){
        return "FizzBuzz";
    }

    if(number % 3 == 0){
        return "Fizz";
    }

    if(number % 5 == 0){
        return "Buzz";
    }

    return number;
}
```

### Refactor

A mi parecer el código está finalizado. Si tienen alguna propuesta, no duden en contactarme por Linkedin y charlemos sobre ello.


## Aclaraciones antes de finalizar el artículo

1. Es muy importante pensar y distinguir todos los posibles casos de uso que existen. **Ahorramos muchísimo tiempo teniendo claro los casos de uso**
2. Una buena técnica para mejorar haciendo TDD es volver a leer el código del día anterior, durante no más de 10 minutos, para saber si sigue siendo un código claro y si no, cambiarlo.
3. **Que el código sea simple no significa que sea fácil de entender**


**En futuros artículos seguiré explicando TDD**. Algunas ideas que me han surgido por ahora son:
1. Refactoring
2. Realizar tests durante el desarrollo del código vs realizar tests al final del desarrollo

Si te surgen dudas o incluso te gustaría que hablase en un artículo sobre un tema que crees interesante, no dudes en ponerte en contacto conmigo a través de Linkedin o del correo. ¡Espero que este artículo te haya sido de ayuda!