{
  "title":"Optimización de queries en SQL para mejorar el rendimiento de la base de datos", 
  "date":"14-10-2023",
  "description":"",
  "topic":"sql",
  "toc":true
}


Durante vuestra carrera profesional es posible que os hayais encontrado con tablas en SQL con miles de datos y decenas de columnas. Si no es así, es posible que algún dia os ocurra. Ahora, imaginense que tienen que hacer una query de esa tabla con miles de datos. ¿Cuánto tiempo creeis que tardará? Os hago un pequeño spoiler. Mucho, tardará mucho.

Sabiendo que por cada 100ms que tarde una consulta en dar respuesta son usuarios que vamos a perder, es comprensible pensar en cómo podemos optimizar la query para que sea mucho más eficiente. Es por ello que hoy vengo a darles unos tips sobre optimización de queries.

Para los siguientes tips he creado una tabla con un millón de registros. Puedes crearlo tu también siguiendo el siguiente tutorial: [Millones de datos aleatorios en SQL Server](https://datoptim.com/millones-de-datos-aleatorios-en-sql-server/)

![Descripción de la imagen](/assets/resultado-sql-fake-table.png)

El código que se va a utilizar para hacer la consulta y comprobar el tiempo que ha tardado es el siguiente:
``` javascript
      async function fetchAllData() {
        try {
            console.time('ConsultaSQL');
            await sql.connect(config);
        
            const query = `SE CAMBIA LA CONSULTA EN CADA CASO`;
            await sql.query(query);

        } catch (err) {
          console.error('Error al recuperar datos:', err);
        } finally {
          sql.close();
          console.timeEnd('ConsultaSQL');
        }
      }

      fetchAllData();
  ```

## 1. Obtener las columnas mínimas y necesarias

A veces no nos damos cuenta y hacemos un "SELECT *" de todos los datos de la tabla cuando en realidad solo necesitamos algunas columnas. 

**Recuperar todos los datos con todas las columnas**
  - **Query**: "SELECT * FROM fakeTable"
  - **Tiempo total: 12,6 segundos**

**Recuperar todos los datos con solo tres columnas**
  - **Query**: "SELECT Name, MiddleName, Gender FROM fakeTable"
  - **Tiempo total: 3,1 segundos**

Como pueden ver, en el momento en donde pedimos más de lo necesario a la base de datos, el tiempo total de la query va a ser mucho más elevado.

## 2. Reducir el número de peticiones a la base de datos

Supongamos que tenemos una matriz con los números de distintas oficinas (siguiendo con la misma tabla "fakeTable") y deseamos recuperar todos los trabajadores que trabajan en esas oficinas.

La forma más común de hacerlo sería iterar por cada número de oficina para realizar una consulta a la base de datos. Sin embargo, esto plantea un problema: la cantidad de consultas que se están realizando a la base de datos. Los recursos de los servidores son limitados y tienen un límite. Esta no es la mejor forma de hacerlo.

La mejor forma es construir una query que recoja todos los trabajadores que contengan alguno de los numeros de las distintas oficinas guardadas en el array.

Hagamos la comparativa:

Numero de las oficinas de las que vamos a recuperar sus trabajadores:  
\- ["100", "136", "299", "287", "258", "268", "137", "122", "165", "170", "178"]

**Iterar el array realizando múltiples llamadas a la base de datos**
  - **Query**: "SELECT Name, MiddleName, Gender FROM fakeTable where Office = 'x' "
  - **Tiempo total: 1 segundo**

**Hacer un join del array para realizar sólo una query**
  - **Query**: "SELECT Name, MiddleName, Gender FROM fakeTable where Office IN ('123', '100', ...)"
  - **Tiempo total: 0,7 segundos**


Como puede observar, en este ejemplo, la diferencia no es significativa debido a la cantidad limitada de oficinas incluidas. Sin embargo, es importante recordar que cada consulta que se realiza a la base de datos consume recursos del servidor y, en el caso de bases de datos alojadas en Azure, cada consulta implica costos adicionales.

## 3. No traer todos los registros de la tabla a la vez

En muchas páginas web de venta de productos, como amazon o pccomponentes, ocurre que, a medida que vas haciendo scroll hacia abajo se van cargando nuevos productos. ¿Por qué crees que hacen esto? Para asegurarse de que las peticiones son rápidas y porque no es necesario traerse toda la base de datos, eso supondría un gasto abismal de recursos por cada petición.

Ahora, vamos a comparar el tiempo que tarda la base de datos en obtener todos los registros(recuerdo que son 1 millón) y sólo traer los 100 primeros

**Traer todos los registros de la tabla**
  - **Query**: "SELECT * FROM fakeTable"
  - **Tiempo total: 15,4 segundos**

**Traer todos los registros de la tabla**
  - **Query**: "SELECT TOP 100 * FROM fakeTable"
  - **Tiempo total: 0,13 segundos**

Como podeis observar, la consulta se ha vuelto mucho más rápida, pasando de 15 segundos a menos de 1 segundo solamente por obtener un número limitado de datos, lo que representa una mejora del 93%. Ahora os pregunto, ¿es realmente necesario que obtengais todos los registros de la base de datos?

## Conclusión
Es fundamental recordar que cuanto más datos solicitamos a la base de datos, más recursos, tiempo y dinero se requieren. Espero que estos consejos le ayuden a optimizar sus consultas y evitar la pérdida de usuarios. ¡La optimización es clave para un rendimiento eficiente de la base de datos!










