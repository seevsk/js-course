// ForEach ideal para arrays

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
})

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

const nuevoArreglo = carrito.forEach( producto => 
    producto.nombre);

const nuevoArreglo2 = carrito.map( producto => 
    producto.precio);

    console.log(nuevoArreglo)
    console.log(nuevoArreglo2)
    