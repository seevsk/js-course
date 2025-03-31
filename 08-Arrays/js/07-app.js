// Imperativa va modificar el objeto actual 
// Declarativa no 

const carrito = [];

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

const producto4 = {
    nombre: 'Xioamo',
    precio: 50,
}
carrito.push(producto4);

carrito.unshift(producto3);

console.table(carrito);

carrito.splice(1,2); // Elimina con parametros establecidos desde la posicion que indiques hasta donde quieres que vaya.
console.table(carrito);








// Eliminar ultimo elemento de un arreglo

// carrito.pop ();

// console.table(carrito);

// Eliminar primer elemento de un arreglo

// carrito.shift();

// console.table(carrito);


