        // Creamos un arreglo para almacenar los meses.
        var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 
            'Junio', 'Julio', 'Agosto', 'Septiembre', 
            'Octubre', 'Noviembre', 'Diciembre'];

// Obtenemos la fecha actual.
var date = new Date();
var day = date.getDate();
var month = date.getMonth(); // No sumamos 1 aquí porque ya es un índice válido.
var year = date.getFullYear(); // Usamos getFullYear() para el año completo.

// Mostramos la fecha en el elemento con id "mifecha".
document.getElementById('mifecha').textContent = 'Hoy es ' + day + ' de ' + months[month] + ' del ' + year;