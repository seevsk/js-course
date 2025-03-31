// En los iteradores el codigo se va ejecutar hasta que una condicion se cumpla o se deje de cumplir 

// For Loop - Se ejecutan hasta que el codigo deja de cumplir una condicion 

// for( let i = 0; i <= 10; i++) {
//     console.log(`Numero: ${i}`);
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) { // Modulo de 2, el numero dividido entre 2 es par porque no tiene residuo
//         console.log(`El numero ${i} es PAR `);
//     } else {
//         console.log(`El numero es ${i} es IMPAR `)
//     }
// }

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

console.log(carrito.length);

    for(let i = 0; i < carrito.length; i++) {
        console.log(carrito[i].nombre);
    }