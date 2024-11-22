//Creo la funcion actualizar reloj.
    function actualizarReloj() {
      // Obtener la hora actual creando variables.
//tanto como para la hora, minutos y segundos.
//ademas uso la funcion new date para manipular la fecha y la hora guardandolo en una variable.
      var fecha = new Date();
      var horas = fecha.getHours();
      var minutos = fecha.getMinutes();
      var segundos = fecha.getSeconds();

      // Asegurarse de que los valores de minutos y segundos tengan dos dígitos
      minutos = minutos < 10 ? "0" + minutos : minutos;
      segundos = segundos < 10 ? "0" + segundos : segundos;

      // Construir la cadena de tiempo en formato HH:MM:SS
      var tiempo  = horas + ":" + minutos + ":" + segundos + " segundos";
      // Mostrar el tiempo en el elemento con id "reloj"
//Dicho id lo saco del parrafo para luego mostrarlo.
      document.getElementById("reloj").innerHTML = "Hora actual: " + tiempo;
}

    // Con la funcion set interval Actualizamos el reloj cada (1000 milisegundos)
    setInterval(actualizarReloj, 1000);

    // Inicializar el reloj al cargar la página
//Llamo a la funcion actualizarreloj.
    actualizarReloj();