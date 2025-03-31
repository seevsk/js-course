'use strict'; 

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

Object.seal(producto); // A diferencia de freeze, se pueden modificar propiedades (existentes), eliminar y agregar nou

producto.disponible = false;
// producto.imagen = 'imagen.jpg';
// delete producto.nombre;

console.log(producto);
console.log(Object.isSealed(producto));
