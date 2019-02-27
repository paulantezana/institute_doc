---
title: "Estructura de archivos del servidor"
date: "2017-08-10"
---

### Carpetas:
* 📁 **config** : Paquete que contiene todas las configuraciones del sistema como la base de datos, versiones, etc.
    - 📄 **config.go** : Paquete que contiene todas las configuraciones del sistema como la base de datos, versiones, etc.
    - 📄 **database.go** : 
    - 📄 **email.go** : 
* 📁 **controller**
* 📁 **endpoint**
* 📁 **migration**
* 📁 **models**
* 📁 **static**
* 📁 **temp**
* 📁 **templates**
* 📁 **utilities**
* 📁 **vendor**

### Archivos:
* 📄 **.editorconfig**: Contiene la definición de la configuración para mantener la codificación estándar entre diferentes editores e IDEs, considera que en algunos editores tendrás que instalar un plugin adicional para que funcione, consulta el sitio [editorconfig.org](http://editorconfig.org/) para saber si tu editor o ide lo soporta nativamente o requiere algún plugin.
* 📄 **.gitignore**: Indica que archivos y directorios ignorará Git al momento de sincronizar el proyecto, la configuración que se propone ha sido generada en el sitio [gitignore.io](https://www.gitignore.io/) y es esta: [osx,node,macos,linux,windows,visualstudiocode](https://www.gitignore.io/api/osx,node,macos,linux,windows,visualstudiocode) siéntete libre de modificarla a tus necesidades.