'use strict'; //Modo estricto

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

Object.freeze(producto); //Congela el objeto y sus propiedades, ya no se pueden modificar, tampoco agregar o eliminar.

// producto.imagen = 'imagen.jpg';
// producto.disponible = false;
// delete producto.nombre;

console.log(Object.isFrozen(producto));

