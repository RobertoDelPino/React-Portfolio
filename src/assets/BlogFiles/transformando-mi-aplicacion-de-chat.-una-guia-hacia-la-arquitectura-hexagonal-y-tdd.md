{
  "title":"Transformando mi aplicación de chat: Una guía hacia la Arquitectura Hexagonal y TDD", 
  "date":"05-05-2024",
  "description":"",
  "topic":"Arquitectura Hexagonal",
  "toc":true
}

Hace un par de meses di por finalizada la primera parte del desarrollo de una aplicación de chat. Suponía haber aprendido a **manejar eventos**, que era la finalidad del pet project. No obstante, habían cosas que no me gustaban, como el hecho de que no estuviera hecho con **Arquitectura Hexagonal y TDD**. Uno de los planes a futuro de la aplicación era cambiar el backend para que sea testeable y mantenible. 

En este artículo os presento la recreación del API, realizado con Arquitectura Hexagonal y TDD.

# Empecemos por lo básico. ¿Qué es la Arquitectura Hexagonal?

La arquitectura hexagonal, también **conocida como "puertos y adaptadores"**, es un enfoque de **diseño de software** que se centra en **separar las responsabilidades y desacoplar las diferentes capas de una aplicación**. Estas capas son las siguientes: **dominio, aplicación e infraescturctura**.

- **Capa de dominio**. Contiene toda la lógica de negocio, en donde se incluyen las interfaces que la capa de aplicación utiliza para interactuar con el mundo exterior. Estas interfaces pueden ser de usuarios, bases de datos, servicios externos, etc. 
- **Capa de aplicación**. Contiene todos los casos de usos que se puede realizar en el sistema. Por ejemplo, obtener un usuario o actualizar un usuario.
- **Capa de infraestructura**. Contiene todas las implementaciones de las interfaces creadas en la capa de dominio, es decir, es quien se va a conectar con el mundo exterior.

> **Regla imprescindible**: las capas internas no deben conocer nada de las capas externas. Son las capas externas quienes conocen de las internas. El dominio no puede conocer ninguna implementación de sus interfaces (infraestructura) ni el caso de uso(aplicación) saber que base de datos se va a utilizar (infraestructura).

En la siguiente imagen pueden ver una representación de cómo se distribuyen estas capas:

![Stages of TDD](/TechIcons/arquitectura-hexagonal.png)

# Ventajas

1. **Testabilidad**. La separación clara entre la lógica de negocio y los componentes externos facilita la escritura de pruebas unitarias y de integración.
3. **Desacoplamiento**. Permite un alto grado de desacoplamiento entre las diferentes capas de la aplicación, lo que facilita la modificación y el mantenimiento del código.
4. **Flexibilidad**. Permite una fácil adaptación a cambios en los requisitos del negocio o en los componentes externos, ya que la lógica de negocio no está directamente ligada a ninguna implementación específica.

# Desventajas

1. **Complejidad inicial**. Implementar una arquitectura hexagonal puede requerir un mayor esfuerzo y tiempo inicial, especialmente en comparación con enfoques más simples como la arquitectura monolítica.
2. **Costo de mantenimiento**. Aunque la arquitectura hexagonal facilita el mantenimiento a largo plazo, puede generar un mayor costo de mantenimiento si no se aplican principios de diseño sólidos desde el principio.

# Razones que me han llevado a hacer el cambio

1. **Falta de Tests**. Durante todo el desarrollo vi como aparecían errores que no era capaz de entender, dado que no sabía que estaba realizando. Realizar TDD me permite entender qué quiero hacer antes de empezar a escribirlo.
2. **Posibles cambios de base de datos**. En el planteamiento de la aplicación se ha acordado utilizar MongoDB para la BD. Es problable que, en el caso de que aumenten los usuarios, sea necesario utilizar otro tipo de base de datos.
3. **Problemas a la hora de añadir nuevas funcionalidades**. Los chats grupales era un requisito mínimo para poder dar por terminada la aplicación. En cambio, no utilizar TDD y Arquitectura Hexagonal había retrasado mucho los tiempos entre cada funcionalidad. Se debían cambiar muchas partes de la aplicación y no se llegaba a saber si todo funcionaba correctamente hasta que no se probaba a mano.


# Ejemplo aplicando Arquitectura Hexagonal en la aplicación

Caso de uso: Obtener un chat. **Añadir fotos de cada paso**.   
Pasos a explicar:  
1. Capa de dominio: todas las interfaces y entidades creadas que son importantes para negocio: ChatRepository y Chat(entidad)
2. Capa de aplicación: el caso de uso, qué es lo que va a hacer
3. Capa de infraestructura: la implementación de las interfaces (solo se va a mostrar el método utilizado en el caso de uso) y el controller
4. Método de factoría del controller, mostrando que es en ese lugar donde se especifíca la implementación de base de datos que se va a utilizar





<!-- 
2. ¿Qué es la arquitectura hexagonal?
3. Ventajas y desventajas de Arquitectura hexagonal
4. División de las capas dentro de la aplicación (añadir una foto de las carpetas)
4. Tiempo estimado de la creación de la nueva API
5. Nuevas funcionalidades añadidas
6. Futuras Mejoras -->
