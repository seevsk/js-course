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




// for(let i = 0; i < carrito.length; i++) {
//     // console.log(carrito[i].nombre);
//     console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
// }

//Ambos son casi lo mismo 

carrito.forEach(function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})