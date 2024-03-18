<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Función para filtrar y sanitizar datos
    function filtrar_datos($dato) {
        $dato = trim($dato); // Eliminar espacios en blanco al inicio y al final
        $dato = stripslashes($dato); // Eliminar barras invertidas
        $dato = htmlspecialchars($dato); // Convertir caracteres especiales en entidades HTML
        return $dato;
    }

    // Recoger los datos del formulario y aplicar el filtro
    $nombre = filtrar_datos($_POST['nombre']);
    $correo = filtrar_datos($_POST['correo']);
    $mensaje = filtrar_datos($_POST['mensaje']);

    // Dirección de correo a la que se enviará el formulario
    $para = "info@evolutionradio.com.ar";
    $asunto = "Mensaje enviado desde formulario de contacto";

    // Construir el mensaje
    $mensaje_correo = "Nombre: $nombre\n";
    $mensaje_correo .= "Correo electrónico: $correo\n\n";
    $mensaje_correo .= "Mensaje:\n$mensaje\n";

    // Cabeceras del correo
    $cabeceras = "From: $correo\r\n";
    $cabeceras .= "Reply-To: $correo\r\n";
    $cabeceras .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Envío del correo
    if (mail($para, $asunto, $mensaje_correo, $cabeceras)) {
        echo "El correo se envió correctamente.";
    } else {
        echo "Hubo un problema al enviar el correo.";
    }
} else {
    echo "Acceso no autorizado.";
}
?>
