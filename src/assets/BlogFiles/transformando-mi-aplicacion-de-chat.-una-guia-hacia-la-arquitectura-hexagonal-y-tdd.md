{
  "title":"Transformando mi aplicación de chat: Una guía hacia la Arquitectura Hexagonal y TDD", 
  "date":"05-05-2024",
  "description":"",
  "topic":"Arquitectura Hexagonal",
  "toc":true
}

Hace un par de meses di por finalizada la primera parte del desarrollo de una aplicación de chat. Suponía haber aprendido a **manejar eventos**, que era la finalidad del pet project. No obstante, habían cosas que no me gustaban, como el hecho de que no estuviera hecho con **Arquitectura Hexagonal y TDD**. Uno de los planes a futuro de la aplicación era cambiar el backend para que sea testable y mantenible. 

En este artículo os presento la recreación del API, realizado con Arquitectura Hexagonal y TDD.

# Empecemos por lo básico, ¿qué es la Arquitectura Hexagonal?

La arquitectura hexagonal, también **conocida como "puertos y adaptadores"**, es un enfoque de **diseño de software** que se centra en **separar las responsabilidades y desacoplar las diferentes capas de una aplicación**. Estas capas son las siguientes: **dominio, aplicación e infraescturctura**.

- **Capa de dominio**. Contiene toda la lógica de negocio y las reglas del sistema, en donde se incluyen las interfaces que la capa de aplicación utiliza para interactuar con el mundo exterior. Estas interfaces pueden ser de usuarios, bases de datos, servicios externos, etc.  Además, aquí se definen los objetos que son esenciales para el correcto funcionamiento, independientemente de cómo se implementen las interfaces.
- **Capa de aplicación**. Contiene todos los casos de usos que se puede realizar en el sistema. Por ejemplo, obtener un usuario o actualizar un usuario. También se incluyen los servicios de aplicación y cualquier otra lógica que no pertenezca directamente al dominio pero que sea necesaria para coordinar las operaciones del sistema.
- **Capa de infraestructura**. Contiene todas las implementaciones de las interfaces creadas en la capa de dominio, es decir, es quien se va a conectar con el mundo exterior. Por ejemplo, implementaciones de persistencia para interactuar con bases de datos, implementaciones de interfaz de usuario para interactuar con el usuario, etc.

**Regla imprescindible**: las capas internas no deben conocer nada de las capas externas. Son las capas externas quienes conocen de las internas. El dominio no puede conocer ninguna implementación de sus interfaces (infraestructura) ni el caso de uso(aplicación) saber que base de datos se va a utilizar (infraestructura).

En la siguiente imagen pueden ver una representación de cómo se distribuyen estas capas:

![Hexagonal Architecture Layers](/TechIcons/arquitectura-hexagonal.png)

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
4. **Escalabilidad**. La Arquitectura Hexagonal facilita la escalabilidad de la aplicación al separar las preocupaciones y permitir que cada componente pueda ser escalado de forma independiente. Esto es especialmente importante en aplicaciones que esperan un crecimiento significativo en el número de usuarios o en la complejidad de las características.
5. **Mantenibilidad a largo plazo**. La Arquitectura Hexagonal y el TDD promueven un código más limpio, modular y fácil de mantener. Esto reduce la deuda técnica y los costos de mantenimiento a largo plazo al hacer que sea más fácil entender, modificar y extender el código en el futuro.
6. **Reusabilidad del código**. Al desacoplar las capas de la aplicación, existe la posibilidad de reutilizar el código en diferentes partes de la aplicación. Esto significa que los componentes de la aplicación, como los casos de uso y los repositorios, pueden ser utilizados en diferentes partes de la aplicación o incluso en otras aplicaciones sin necesidad de modificaciones significativas.

# Ejemplo aplicando Arquitectura Hexagonal en la aplicación

**Caso de uso: Al abrir un chat, traer los mensajes e información de los usuarios del chat.**

En este caso, lo único que vamos a realizar es obtener todos los mensajes de un chat. Para ello, tenemos que acceder a base de datos, por lo que vamos a crear una interfaz con los métodos que, desde negocio, creemos que son importantes para este caso:

**FindBy**, al que le pasaremos el id del chat y nos devolverá los datos mínimos necesarios para funcionar:
``` typescript
export interface IChatsRepository {
    findBy(chatId: string): Promise<Chat>;
}
```

Si os fijais, estamos devolviendo un objeto **Chat**. Es el siguiente:
``` typescript
export class Chat {
    constructor(
        public _id: string,
        public users: User[],
        public messages: Message[],
        public isGroup: boolean,
        public groupName: string,
        public createdAt: Date
    ) {}
}
```
La clase **User**:
``` typescript
export class User {
    constructor(
        public _id?: string,
        public name?: string,
        public email?: string
    ) {}
}
```
La clase **Message**:
``` typescript
export class Message {
    constructor(
        public _id?: string,
        public message?: string,
        public sender?: User,
        public createdAt?: Date,
        public readed: boolean = false,
    ) {}
}
```

Después de definir la interfaz y las clases en la carpeta de Dominio, pasamos con el caso de uso.
1. Creamos una interfaz con él método que va a ser público. Se realiza esto para que sea más sencillo testar el controller que va a utilizar el caso de uso.
2. En la implementación de la interfaz, la única comprobación que vamos a realizar será que el chatId que llegue sea distinto de vacío.
3. Para traer los datos de la base de datos, tenemos que añadir una propiedad a la clase con la interfaz que creamos anteriormente del *IChatRepository* e iniciarla en el constructor ya que será, a través del constructor, donde indicaremos que implementación vamos a utilizar.
4. Llamar al repositorio pasandole el chatId y devolvemos los datos que devuelva.

``` typescript
import { IChatsRepository } from "../Domain/interfaces/chatsRepository";
import { Chat } from "../Domain/Entities/Chat";

export interface IGetChatUseCase {
    execute(chatId: string): Promise<Chat>;
}

export class GetChatUseCase implements IGetChatUseCase {
    constructor(private chatsRepository: IChatsRepository) {}

    async execute(chatId: string): Promise<Chat> {
        if (chatId === "") {
            throw new Error("ChatId is required");
        }
        return this.chatsRepository.findBy(chatId);
    }
}
```

Ahora que hemos completado la capa de Aplicación, pasemos a la capa de Infraestructura:

1. Controller
2. Implementación del repository

Para el controller haremos lo mismo que para el caso de uso, crearemos una interfaz con un sólo método al que se le pase dos variables, **Request** y **Response**, propias de la librería express.js. Después, en la implementación de la interfaz, tendremos que añadir, a través del constructor, la interfaz del caso de uso que creamos anteriormente y por último, obtener el id de la request para llamar al caso de uso y que, con la respuesta de este la devolvamos.

``` typescript
import { IGetChatUseCase } from "../../Application/getChatUseCase";
import { Request, Response } from "express";

export interface IGetChatController {
    execute(req: Request, res: Response): Promise<void>;
}

export class GetChatController {
    constructor(private getChatUseCase: IGetChatUseCase) {}

    async execute(req: Request, res: Response) {
        try{
            const chatId = req.params.chatId;
            const chat = await this.getChatUseCase.execute(chatId);
            res.status(200).json(chat);
        }
        catch(error){
            res.status(400).json({error: error.message});
        }
    }
}
```

En cuanto a la implementación del repositorio. vamos a crear una carpeta repositories dentro de la carpeta de infraestructura. Dentro de ella crearemos una implementación **MongoDbChatRepository** que implementará la interfaz del repositorio que hemos creado en la capa de dominio.

``` typescript
export class mongoDbChatRepository implements IChatsRepository{
    async findBy(chatId: string): Promise<Chat> {
        const chat = await MongoDbChat.findById(chatId)
                            .select({messages: { $slice: -100 }})
                            .select("-__v -createdAt -updatedAt")
                            .populate({path: "users", select: "_id name email"})
                            .populate({path: "messages", select: "_id readed message sender createdAt"})
        
        return createChat(chat);

        function createChat(chat: any){
            return new Chat(
                chat._id,
                chat.users.map(user => new User(
                    user._id,
                    user.name,
                    user.email
                )),
                chat.messages.map(message => new Message(
                    message._id,
                    message.message,
                    message.sender,
                    message.createdAt,
                    message.readed
                )),
                chat.isGroup,
                chat.groupName,
                new Date()
            );
        }
    }
}
```

Ahora sólo nos quedaría dos cosas por hacer:

**Crear la factoría para este controlador**. Una factoría es un método estático que nos permite crear un objeto de manera dinámica. Para este caso, que es crear un controller, nos es útil tener un método de factoría para poder especificar, por ejemplo, en base a ciertos parámetros, qué implementación de base de datos utilizar. En este momento sólo hay una, que es MongoDB pero es posible que en el futuro se implemente otra base de datos como SQL. Os dejo un link muy interesante que habla acerca de este patrón de diseño de software: [Factory Method - Refactoring Guru](https://refactoring.guru/es/design-patterns/factory-method)
``` typescript
function createGetChatsController() {
    const repository = new mongoDbChatRepository();
    const useCase = new GetChatsUseCase(repository);
    return new GetChatsController(useCase);
}
```
**Especificar la ruta de este controlador**. En este caso he añadido un middleware (*checkAuth*) para comprobar que el usuario realiza la petición con un token válido.
``` typescript
const router = express.Router();
const checkAuth = createCheckAuth();
const getChatController = createGetChatController();
router.get('/api/chats/:chatId', checkAuth.checkAuth.bind(checkAuth) , getChatController.execute.bind(getChatController));
export default router;
```

# Nuevas funcionalidades añadidas

Como toda aplicación que sigue evolucionando, se han añadido distintas funcionalidades nuevas: 

1. **Chat Grupal**. A medida que se iba avanzando en la creación de la aplicación, se iba haciendo más complicado añadir nuevas funcionalidades. Decidí, entonces, dejar esta funcionalidad, tan necesaria a día de hoy, a la espera de crear la aplicación con un mejor diseño (con Arquitectura Hexagonal y TDD). 
2. **Cambiar datos del usuario**. Fundamental esta funcionalidad. Lo mismo que el chat grupal, no se implementó por los problemas que surgieron a raíz del no uso de un mejor diseño.
3. **Mejoras de accesibilidad**. Se han añadido nuevos datos a algunos endpoints para mostrar más información al usuario. 

![Chat Grupal](/BlogImages/chat-grupal-improvement.png)  

![Cambiar datos del usuario](/BlogImages/update-user-data.png)