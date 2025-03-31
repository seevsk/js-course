const carrito = [
    {nombre: 'Monitor 27 pulgadas',
        precio: 500,},
    {nombre: 'Television',
        precio: 200,},
    {nombre: 'Tablet',
        precio: 20,},
    {nombre: 'Audifonos',
        precio: 55,},
    {nombre: 'Teclado',
        precio: 22,},
];

const nuevoArreglo = carrito.forEach(function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

// forEach y map son iguales en sintaxis, la diferencia es que map crea un nuevo arreglo mientras el otro no.

const nuevoArreglo2 = carrito.map(function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.table(nuevoArreglo);
console.table(nuevoArreglo2);