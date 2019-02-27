---
title: "Instalar Servidor"
date: "2019-27-02"
---

Para poder instalar es necesario tener los permisos del autor del código fuente del sistema que puede descargar desde [github]( https://github.com/paulantezana/review).

El sistema está desarrollado en el lenguaje de programación GO que es un lenguaje de programación concurrente y compilado inspirado en la sintaxis de C. Ha sido desarrollado por Google. 

De esta manera puede compilar en binarios para cualquier sistema operativo ya sea Windows, Linux, Mac.

## 1 compilar
* Para linux desde windows
```bash
GOOS=linux GOARCH=amd64 go build -o instituteL main.go
```

* Para mac desde windows
```bash
GOOS=darwin GOARCH=amd64 go build -o instituteM main.go
```
en este caso conpilaremos para linux ya que tengo configurado un servidor Ubuntu 

posteriormente subiremos los archivos al servidor

## 2 Subir al servidor
Tenemos varios métodos para subir archivos al servidor como [filezilla](https://filezilla-project.org/) en este caso usaremos comando scp que está disponible tanto en Linux como en Mac. Si estás usando Windows puede descargarse [GitBash](https://git-scm.com/downloads) para usar este comando.

Subir archivo
comando: scp miApp usuario@ip directorio
```bash
$ scp instituteL  yoel@13.68.218.250:/home/yoel/instituteapp/institute_server
yoel@13.68.218.250's password:
instituteL                              100%   14MB  47.8KB/s   04:59
```

Subir el resto de carpetas y los archivos necesario para el funcionamiento del sistema
```bash
$ scp -rp static/ yoel@13.68.218.250:/home/yoel/instituteapp/institute_server
$ scp -rp temp/ yoel@13.68.218.250:/home/yoel/instituteapp/institute_server
$ scp -rp templates/ yoel@13.68.218.250:/home/yoel/instituteapp/institute_server
$ scp config.json  yoel@13.68.218.250:/home/yoel/instituteapp/institute_server
```

## 3 Cambiar los permisos
es recomendable cambiar los permisos a 775 de los siguientes archivos
```bash
$ chmod 775 instituteL
$ chmod 775 templates/
$ chmod 775 static/
$ chmod 775 temp/
```

## 4 Base de datos
### Instalacion
El sistema usa una base de datos Postgres por defecto, puede cambiar el motor de la base de datos desde el codigo fuente

Debido a que es nuestra primera vez utilizando apt en esta sesión, debemos refrescar nuestro índice de paquetes locales. Podemos instalar el paquete Postgres
```bash
$ sudo apt-get update
$ sudo apt-get install postgresql
```

Ejecuta el siguiente comando para verificar si la instalación fue exitosa
```bash
$ psql postgres
```

<!-- ### Configurar
Configurar
```bash
 $ sudo vim /etc/postgresql/10/main/pg_hba.conf
``` -->

### Crear un Nuevo Rol
Por defecto, Postgress utiliza un concepto llamado "roles" que maneja identificación y autorización. Estos son, de algún modo, similares a los estilos de cuentas en Unix, pero Postgres no distingue entre usuarios y grupos y en su lugar prefiere ser más flexible con el término "rol"

Al concluir la instalación Postgres está listo para utilizar la identificación ident, lo que significa que asocia los roles de Postgres con una cuenta de sistema Unix/Linux. Si el rol existe en Postres, un nombre de usuario Unix/Linux con el mismo nombre podrá identificarse como ese rol.

para realizar esta operación primero debe ingresar a la base de datos con el usuario postgres
```sql
CREATE ROLE yoel LOGIN PASSWORD 'cascadesheet'
```

### Crear la base de datos
De forma predeterminada, otra suposición que hace el sistema de autenticación de Postgres es que habrá una base de datos con el mismo nombre que el rol que se utiliza para iniciar la sesión, a la que el rol tiene acceso.

en este caso usaremo el usuario yoel que creamos anteriormente.
```sql
CREATE DATABASE institute OWNER yoel
```

## Test
ejecute el binario que subio al servidor
```bash
$ ./instituteL

   ____    __
  / __/___/ /  ___
 / _// __/ _ \/ _ \
/___/\__/_//_/\___/ v3.3.dev
High performance, minimalist Go web framework
https://echo.labstack.com
____________________________________O/_______
                                    O\

⇨ http server started on [::]:1323
```
como se puede apreciar la aplicacion corre de manera correcta

## 5 Crear servicio
crear un nuevo archivo de servicio
```bash
sudo vim /etc/systemd/system/institute.service
```
configuracion
```vim
[Unit]
Description="API service de GO para el sistema institucional"

[Service]
ExecStart=/home/yoel/instituteapp/institute_server/instituteL
WorkingDirectory=/home/yoel/instituteapp/institute_server
User=yoel
Restart=always

[Install]
WantedBy=multi-user.target
```

activar el servicio
```bash
sudo systemctl enable institute.service
```

iniciar el servicio
```bash
sudo systemctl start institute.service
```

## 6 Proxy
## 7 Letsencrypt