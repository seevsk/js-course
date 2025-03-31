const carrito = [];

//Definir un producto
const producto = {
    nombre: 'Monitor 32 pg',
    precio: 400,
}

const producto2 = {
    nombre: 'Samsung A7',
    precio: 200,
}

const producto3 = {
    nombre: 'Teclado Teros',
    precio: 100,
}

// Declarativa, utilzando Spreed Operator

let resultado;

resultado = [... carrito, producto];

resultado = [... resultado, producto2]
resultado = [producto3, ...resultado] // Agrega un producto al principio,  posicion 0
console.table(resultado);
