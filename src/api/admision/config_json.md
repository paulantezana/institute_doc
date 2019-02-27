# CONFIGURACION
En este archivo se encuentra todas las configuraciones estáticas del sistema
```json
{
    "Database" : {
        "server"   : "localhost", // Host de la base de datos
        "port"     : "5432", // Puerto de la base de datos
        "user"     : "yoel", // Usuario de la base de datos
        "pass"     : "mipassword", // Contraseña de la base de datos
        "database" : "institute" // Nombre de la base de datos
    },
    "Server" : {
        "port": "1323", // Puerto del servidor
        "host": "http://localhost", // Host actual del sistema
        "socket": "ws://localhost", // HOst actual del websocket
        "key": "Mc]-7555PSAmvJ{q{P@" // Clave para la autenticacion de JWT
    },
    "Global": {
        "paginate": 20 // Numero de registros a mostrar en una paginacion
    },
    "Email": {
        "name": "REVIEW", // Nombre del sistema para el envio de correo electronic
        "from": "paul.antezana.2@gmail.com", // Correo para el uso en este sistema
        "password": "Mc65-7EOSEP}vJ{q{P@", // contraseña del correo
        "server": "smtp.gmail.com:465", // Servidor fmtp de Gmail
        "host": "smtp.gmail.com" // Host de Gmail
    }
}
```