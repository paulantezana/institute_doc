Este archivo contienen una sola funcion

## func SendEmail(to string, subject string, tem string) error

En este archivo se encuentra la configuración para enviar correos electrónicos mediante una cuenta de Gmail. 

Cada ves que se quiera enviar un correo electrónico deberá llmarar esta funcion

### Paramatros
- **Destinatario:** al correo del Destinatario.
- **Asunto:** el asunto del envió de este correo.
- **Template:** contenido que se enviara, puede ser una estructura HTML en bytes

### Respuesta
- **error:** solo si sucede algun arror
### configuración
como simpre puede configurar desde al archivo `config.json` que se encuentra en la raríz de este proyecto
```json
...
"Email": {
    "name": "REVIEW",
    "from": "micorreo@gmail.com",
    "password": "micontraseñagmail",
    "server": "smtp.gmail.com:465",
    "host": "smtp.gmail.com"
}
...
```

**ejemplo de uso**
```go
...
// SEND EMAIL get html template
t, err := template.ParseFiles("templates/email.html")
if err != nil {
    return c.JSON(http.StatusOK, utilities.Response{Message: fmt.Sprintf("%s", err)})
}

// SEND EMAIL new buffer
buf := new(bytes.Buffer)
err = t.Execute(buf, user)
if err != nil {
    return c.JSON(http.StatusOK, utilities.Response{Message: fmt.Sprintf("%s", err)})
}

// SEND EMAIL
err = config.SendEmail(user.Email, fmt.Sprint(key)+" es el código de recuperación de tu cuenta en REVIEW", buf.String())
if err != nil {
    return c.JSON(http.StatusOK, utilities.Response{Message: fmt.Sprintf("%s", err)})
}
...
```