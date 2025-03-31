// Date te da la fecha actual de hoy, y "new" lo convierte en un object que es necesrio para que funciones los metodos.

const diaHoy = new Date();

let valor;

valor = diaHoy;
// Mostrar el año actual
valor = diaHoy.getFullYear();
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime(); // Segundos desde el 1ero de enero


console.log(valor);