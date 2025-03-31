// const meses = ['Enero', 'Febrero', 'Marzo'];

// // meses [3] = 'Abril'

// // Agregar al final del arreglo sin conocer la posicion del array; lo hace mas dinamico

// meses.push('Abril');
// meses.push('Mayo');

// console.table(meses);

const carrito = [];

// Definir un producto (object)

const producto = {
    nombre: 'Monitor 32 pg',
    precio: 400,
}

const producto2 = {
    nombre: 'Samsung A7',
    precio: 200,
}

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: 'Teclado Teros',
    precio: 100,
}

carrito.unshift(producto3); // Lo agrega en la posicion 0 (primera posicion) sobreponiendose a las demas

console.table(carrito);