// .every es un poco extraño, ya que todos los elementos del arreglo deben cumplir la condicion para que nos retorne un true

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const resultado = carrito.every( producto => producto.precio < 1000); 
console.log(resultado); // ve por todos

const resultado2 = carrito.some( producto => producto.precio < 500); 
console.log(resultado); //ve por uno