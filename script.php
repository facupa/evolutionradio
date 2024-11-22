<?php
$chat_id = '718014128';
$token = '6923692850:AAFZ6gIyhUz1ROj2jK431jdxTp1ftWpwUrQ';
$name = $_GET['nombre'];
$mail = $_GET['correo'];
$message = $_GET['message'];

file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=$name");
file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=$mail");
file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=$message");
echo "mensaje enviado <br><br>";
echo "<button onClick='window.history.go(-1)'>Volver a la página anterior</button>";
?>