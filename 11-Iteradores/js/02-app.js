// Break - Corta la ejecucion de un for loop
// Continue - Permite interceptar un elemento, identificarlo y continuar la ejecucion

//Pregunta de trabajo, crea un foor loop que al detectar el numero 5 detenga su ejecucion

// for( let i = 0; i <= 5; i++) {
//     if (i === 3) {
//         console.log('TRES');
//         continue;
//     }
//     console.log(`Numero: ${i}`);
// }

const carrito = [
    {nombre: 'Monitor 27 pulgadas',
        precio: 500,},
    {nombre: 'Television',
        precio: 200,},
    {nombre: 'Tablet',
        precio: 20, 
        descuento: true,},
    {nombre: 'Audifonos',
        precio: 55,},
    {nombre: 'Teclado',
        precio: 22,},
];

for(let i = 0; i < carrito.length; i++){
    if (carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}