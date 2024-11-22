function validacion(){
var valor = document.getElementById("nombre").value;
var valor2 = document.getElementById("correo").value;
var valor4 = document.getElementById("mensaje").value;
if(valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
alert("El campo nombre está vacío");
return false;
}
else if(valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2)) {
alert("El campo correo se encuentra vacío");
return false;
}
else if(valor4 == null || valor4.length == 0 || /^\s+$/.test(valor4)) {
alert("El campo mensaje se encuentra vacío");
return false;
}
alert("Datos enviados");
}