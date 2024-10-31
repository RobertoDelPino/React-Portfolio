# Cómo crear un alias para conexiones SSH en Linux

Si sueles conectarte a varios sistemas remotos mediante SSH, este truco te ahorrará tiempo. Puedes crear alias SSH para los sistemas que accedes con frecuencia. De esta manera, no tendrás que recordar todos los diferentes nombres de usuario, nombres de host, números de puerto SSH y direcciones IP. Además, evitarás la necesidad de escribir repetidamente la misma información cada vez que te conectes a un servidor Linux.

## Índice

1. Crear alias SSH en Linux
2. Método 1: Usando el archivo de configuración SSH
3. Método 2: Usando alias en Bash

---

## Crear alias SSH en Linux

Antes de aprender este truco, generalmente me conectaba a un sistema remoto por SSH de las siguientes maneras:

* Usando la dirección IP:  

```bash
$ ssh 192.168.225.22
```

* Usando el número de puerto, nombre de usuario y dirección IP:  

```bash
$ ssh -p 22 usuario@192.168.225.22
```

* Usando el número de puerto, nombre de usuario y nombre de host:

```bash
$ ssh -p 22 usuario@servidor.ejemplo.com
```

En estos ejemplos:

- \`22\` es el número de puerto.
- \`usuario\` es el nombre de usuario del sistema remoto.
- \`192.168.225.22\` es la dirección IP del sistema remoto.
- \`servidor.ejemplo.com\` es el nombre de host del sistema remoto.

Para aquellos que se conectan frecuentemente a múltiples sistemas, recordar todas las direcciones IP, nombres de host y nombres de usuario puede ser complicado. Sin embargo, puedes resolver esto fácilmente creando un alias (o acceso directo) para las conexiones SSH.

Hay dos métodos para crear un alias SSH.

---

## Método 1: Usando el archivo de configuración SSH

Este es el método más recomendado para crear alias.

Puedes utilizar el archivo de configuración por defecto de SSH para crear alias. Para hacerlo, edita el archivo \`~/.ssh/config\` (si no existe, puedes crearlo):

```bash
$ vi ~/.ssh/config
```

Añade los detalles de tus hosts remotos de la siguiente manera:

```bash
Host webserver
    HostName 192.168.225.22
    User usuario

Host dns
    HostName servidor.ejemplo.com
    User root

Host dhcp
    HostName 192.168.225.25
    User otroUsuario
    Port 2233
```

Reemplaza los valores de \`Host\`, \`HostName\`, \`User\` y \`Port\` con los tuyos. Después de agregar los detalles de todos tus hosts remotos, guarda y cierra el archivo.

Ahora puedes conectarte a los sistemas con los siguientes comandos:

```bash
$ ssh webserver
$ ssh dns
$ ssh dhcp
```

Es tan simple como eso. Aquí tienes un ejemplo visual de cómo acceder a un sistema remoto usando un alias SSH:

```bash
$ ssh webserver
```

Este método solo es aplicable para el usuario actual. Si quieres que los alias estén disponibles para todos los usuarios del sistema, agrega las líneas anteriores en el archivo \`/etc/ssh/ssh_config\`.

También puedes agregar otros detalles en el archivo de configuración SSH, como la ubicación de archivos de clave SSH si has configurado la autenticación basada en claves:

```bash
Host ubuntu
    HostName 192.168.225.50
    User usuario
    IdentityFile ~/.ssh/id_rsa_servidor
```

Una vez configurado, podrás conectarte al servidor remoto con un simple comando:

```bash
$ ssh ubuntu
```

De esta manera, puedes añadir tantos hosts remotos como necesites y acceder a ellos rápidamente usando su nombre de alias.

---

## Método 2: Usando alias en Bash

Este es un método rápido para crear alias SSH de forma sencilla usando Bash.

Abre el archivo `~/.bashrc` o `~/.bash_profile` en tu editor de texto preferido:

```bash
$ nano ~/.bashrc
```

O:

```bash
$ sudo nano ~/.bash_profile
```

Añade alias para cada conexión SSH, uno por uno, de la siguiente manera:

```bash
alias webserver='ssh usuario@192.168.225.22'
alias dns='ssh root@servidor.ejemplo.com'
alias dhcp='ssh otroUsuario@192.168.225.25 -p 2233'
alias ubuntu='ssh usuario@192.168.225.50 -i ~/.ssh/id_rsa_servidor'
```

Asegúrate de reemplazar el nombre de host, nombre de usuario, número de puerto y dirección IP con los tuyos. Guarda el archivo y sal del editor.

Luego, aplica los cambios usando uno de estos comandos:

```bash
$ source ~/.bashrc
```

O:

```bash
$ source ~/.bash_profile
```

Con este método, ni siquiera necesitas usar el comando \`ssh alias-nombre\`. En su lugar, solo debes usar el nombre del alias, como:

```bash
$ webserver
$ dns
$ dhcp
$ ubuntu
```

---

Ambos métodos son simples, útiles y mucho más convenientes para quienes suelen conectarse por SSH a varios sistemas. Usa el método que mejor te convenga para acceder rápidamente a tus sistemas Linux remotos mediante SSH.
