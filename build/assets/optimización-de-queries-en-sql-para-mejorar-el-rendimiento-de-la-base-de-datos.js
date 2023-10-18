const e=`{\r
  "title":"Optimización de queries en SQL para mejorar el rendimiento de la base de datos", \r
  "date":"14-10-2023",\r
  "description":"",\r
  "topic":"sql",\r
  "toc":true\r
}\r
\r
\r
Durante vuestra carrera profesional es posible que os hayais encontrado con tablas en SQL con miles de datos y decenas de columnas. Si no es así, es posible que algún dia os ocurra. Ahora, imaginense que tienen que hacer una query de esa tabla con miles de datos. ¿Cuánto tiempo creeis que tardará? Os hago un pequeño spoiler. Mucho, tardará mucho.\r
\r
Sabiendo que por cada 100ms que tarde una consulta en dar respuesta son usuarios que vamos a perder, es comprensible pensar en cómo podemos optimizar la query para que sea mucho más eficiente. Es por ello que hoy vengo a darles unos tips sobre optimización de queries.\r
\r
Para los siguientes tips he creado una tabla con un millón de registros. Puedes crearlo tu también siguiendo el siguiente tutorial: [Millones de datos aleatorios en SQL Server](https://datoptim.com/millones-de-datos-aleatorios-en-sql-server/)\r
\r
![Descripción de la imagen](/assets/resultado-sql-fake-table.png)\r
\r
## 1. Obtener las columnas mínimas y necesarias\r
\r
A veces no nos damos cuenta y hacemos un "SELECT *" de todos los datos de la tabla cuando en realidad solo necesitamos algunas columnas. \r
\r
**Recuperar todos los datos con todas las columnas**\r
  - Query: "SELECT * FROM fakeTable"\r
  - **Tiempo total: 12,6 segundos**\r
  - Código: \r
  \`\`\` javascript\r
      async function fetchAllData() {\r
        try {\r
            console.time('ConsultaSQL');\r
            await sql.connect(config);\r
        \r
            const query = \`SELECT * FROM fakeTable\`;\r
            await sql.query(query);\r
\r
        } catch (err) {\r
          console.error('Error al recuperar datos:', err);\r
        } finally {\r
          sql.close();\r
          console.timeEnd('ConsultaSQL');\r
        }\r
      }\r
\r
      fetchAllData();\r
  \`\`\`\r
\r
**Recuperar todos los datos con solo tres columnas**\r
  - Query: "SELECT Name, MiddleName, Gender FROM fakeTable"\r
  - **Tiempo total: 3,1 segundos**\r
  - Código: \r
  \`\`\` javascript\r
      async function fetchAllData() {\r
        try {\r
            console.time('ConsultaSQL');\r
            await sql.connect(config);\r
        \r
            const query = \`SELECT Name, MiddleName, Gender FROM fakeTable\`;\r
            await sql.query(query);\r
\r
        } catch (err) {\r
          console.error('Error al recuperar datos:', err);\r
        } finally {\r
          sql.close();\r
          console.timeEnd('ConsultaSQL');\r
        }\r
      }\r
\r
      fetchAllData();\r
  \`\`\`\r
\r
Como pueden ver, en el momento en donde pedimos más de lo necesario a la base de datos, el tiempo total de la query va a ser mucho más elevado.\r
\r
## 2. Reducir el número de peticiones a la base de datos\r
\r
Supongamos que tenemos una matriz con los números de distintas oficinas (siguiendo con la misma tabla "fakeTable") y deseamos recuperar todos los trabajadores que trabajan en esas oficinas.\r
\r
La forma más común de hacerlo sería iterar por cada número de oficina para realizar una consulta a la base de datos. Sin embargo, esto plantea un problema: la cantidad de consultas que se están realizando a la base de datos. Los recursos de los servidores son limitados y tienen un límite. Esta no es la mejor forma de hacerlo.\r
\r
La mejor forma es construir una query que recoja todos los trabajadores que contengan alguno de los numeros de las distintas oficinas guardadas en el array.\r
\r
Hagamos la comparativa:\r
\r
Numero de las oficinas de las que vamos a recuperar sus trabajadores:  \r
\\- ["100", "136", "299", "287", "258", "268", "137", "122", "165", "170", "178"]\r
\r
**Iterar el array realizando múltiples llamadas a la base de datos**\r
  - Query: "SELECT Name, MiddleName, Gender FROM fakeTable where Office = 'x' "\r
  - **Tiempo total: 1 segundo**\r
  - Código: \r
  \`\`\` javascript\r
      async function fetchAllData() {\r
        try {\r
            console.time('ConsultaSQL');\r
            await sql.connect(config);\r
        \r
            for (const officeNumber of officeNumbers) {\r
                const query = \`SELECT Name, MiddleName, Gender FROM FakeTable WHERE Office = \${officeNumber}\`;\r
                await sql.query(query);\r
            }\r
        } catch (err) {\r
          console.error('Error al recuperar datos:', err);\r
        } finally {\r
          sql.close();\r
          console.timeEnd('ConsultaSQL');\r
        }\r
      }\r
\r
      fetchAllData();\r
  \`\`\`\r
\r
**Hacer un join del array para realizar sólo una query**\r
  - Query: "SELECT Name, MiddleName, Gender FROM fakeTable where Office IN ('123', '100', ...)"\r
  - **Tiempo total: 0,7 segundos**\r
  - Código: \r
  \`\`\` javascript\r
      async function fetchAllData() {\r
        try {\r
            console.time('ConsultaSQL');\r
            await sql.connect(config);\r
        \r
            const officeNumbersString = officeNumbers.join(',');\r
            const query = \`SELECT Name, MiddleName, Gender FROM FakeTable WHERE Office IN (\${officeNumbersString})\`;\r
            await sql.query(query);\r
\r
        } catch (err) {\r
          console.error('Error al recuperar datos:', err);\r
        } finally {\r
          sql.close();\r
          console.timeEnd('ConsultaSQL');\r
        }\r
      }\r
  \`\`\`\r
\r
\r
Como puede observar, en este ejemplo, la diferencia no es significativa debido a la cantidad limitada de oficinas incluidas. Sin embargo, es importante recordar que cada consulta que se realiza a la base de datos consume recursos del servidor y, en el caso de bases de datos alojadas en Azure, cada consulta implica costos adicionales.\r
\r
Conclusión: \\\r
Es fundamental recordar que cuanto más datos solicitamos a la base de datos, más recursos, tiempo y dinero se requieren. Espero que estos consejos le ayuden a optimizar sus consultas y evitar la pérdida de usuarios. ¡La optimización es clave para un rendimiento eficiente de la base de datos!\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
`;export{e as default};
