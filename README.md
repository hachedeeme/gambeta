# Gambeta

Gambeta es un sistema web que te da la posibilidad de organizar tus partidos de fútbol de una forma mas fácil y sin recurrir a más de una aplicación. Centraliza tus contactos en un solo lugar para poder invitarlos mas fácilmente, tener el seguimiento de quien se suma y quien no, y hasta te permite armar los equipos antes del encuentro.

## Circuito
La aplicación tiene como objetivo dar una serie de funcionalidades que ayudarán al usuario a organizar partidos de fútbol casuales, que se juegan una vez cada tanto, o periódicos, que se juegan cada un tiempo determinado.
El usuario tendrá la posibilidad de autenticarse en el sistema con facebook o google, o sino puede crearse una cuenta propia del sistema. Al autenticarse con alguna de las redes sociales antes mencionadas permitirá acceder a tus contactos de esa red social para invitarlos más fácilmente tanto a los partidos que se van a crear como a que se creen un usuario de la aplicación para poder agregarlos como amigos, un usuario tendrá una lista de amigos que son otros usuarios del sistema. 

Como se menciona anteriormente, el usuario tiene la posibilidad de crear un partido especificando cantidad de jugadores, fecha, horario y lugar, además podrá elegir si el partido se repite de algún modo (ej: todos los jueves, jueves por medio, una vez al mes). En la misma carga del partido se pueden seleccionar los integrantes quienes lo conformarán, el que está creando el partido puede seleccionar tanto a los amigos de su lista de amigos como a los contactos de la red social que eligió para autenticarse al sistema, el nùmero de invitaciones puede ser superior a la cantidad de cupos disponibles. Al momento de aceptar la creación del partido se les envía las notificaciones a todos los invitados que se incluyeron en él, avisando que este usuario los está invitando, y al mismo tiempo te redirige a la pantalla de administración de partido, en esta se puede ver un panel donde se aprecian los jugadores que ya confirmaron su asistencia y los espacios libres que quedan en el partido. Además del mencionado panel, esta pantalla contiene un sector de comentarios donde los jugadores invitados pueden comentar cosas, un sector donde está el listado de todos los invitados que muestra el estado de cada invitación, si está aceptada, rechazada o pendiente, y un botón para enviar nuevas invitaciones en caso de que alguno de los invitados decline y se tenga que preguntar a otras personas. En esta misma pantalla, en el panel antes mencionado donde se encuentran los jugadores confirmados, el administrador podrá acomodar a cada jugador en el equipo que le parezca conveniente, los usuarios invitados pueden acomodarse solo a ellos mismos, cambiarse a un equipo que tenga cupo o a alguna otra posición que se desee en el equipo que ya está.

Un usuario tiene un perfil, donde se muestran los datos de su cuenta (nombre, apellido, email, username, password), también podrá configurar donde quiere que le lleguen las invitaciones a partidos, sea via mail, o via mensaje de facebook o las dos (se puede llegar a incluir más modos de notificación). El sistema le avisará a todos los usuarios que confirmaron su puesto en un partido, por medio de cualquiera de las anterior nombradas formas de comunicación, una notificación un día antes de dicho encuentro y 10 diez horas antes también, recordandole que tiene un partido ese día y también avisandole si el partido está completo o si falta gente para llenarlo.

## Empezando con la tecnología
El sistema está desarrollado con **JavaScript** en su totalidad utilizando un stack de tecnologías llamado [MEAN Stack](http://mean.io/#!/) que es un full stack de herramientas para desarrollo web basado en **JavaScript** formado por las siguientes tecnologías: **MongoDB, Express, AngularJS y Node.js**.

### Instalacion del entorno en Linux
- Instalar [MongoDB](https://www.mongodb.com/) (v2.6.10), seguir esta [guía](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) para su instalación y uso. 
- Instalar [Nodejs](https://nodejs.org/) (v4.5.0) bajandolo el [sitio](https://nodejs.org/en/download/) oficial (ya incluye npm 2.15.9) o por ppa con los siguientes comandos :
```
$ sudo apt-get update
$ sudo apt-get install nodejs
$ sudo apt-get install npm
$ sudo apt-get install nodejs-legacy
```
- Instalar [Bower](https://bower.io/):
```
$ sudo npm install -g bower
```
- Instalar [Grunt](http://gruntjs.com/):
```
$ sudo npm install -g grunt-cli
```
- Para poder ejecutar el proyecto con **grunt** se debe tener previamente instalados [Ruby](https://www.ruby-lang.org/en/) y [Sass](http://sass-lang.com/). De no ser así se pueden instalar con los siguientes comandos:
```
$ sudo apt-get install ruby-full
$ sudo gem install sass
```

### Poner en marcha el proyecto en linux
Levantar mongo:
```
sudo mongod
```
