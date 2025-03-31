const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

//Agregar propiedad de un objeto a una nueva variable sin la necesidade sobreescribirla (Manera Antigua)

// const nombre = producto.nombre;

//Nueva Manera ECMA6 - Destructuring

const {nombre, precio, disponible} = producto;

console.log(producto.nombre);
console.log(nombre);
console.log(precio);
console.log(disponible)