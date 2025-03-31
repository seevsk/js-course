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

const nuevoArreglo = carrito.map(producto => `${producto.nombre} - Precio: ${producto.precio}`);

console.table(nuevoArreglo)



carrito.forEach( producto => console.log( `${producto.nombre} - Precio: ${producto.precio}`));

// forEach y map son iguales en sintaxis, la diferencia es que map crea un nuevo arreglo mientras el otro no.


