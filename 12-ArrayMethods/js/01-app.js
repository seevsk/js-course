// Array Metods - hacen el trabajo pesado por ti

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo 

meses.forEach(mes=> {
    if(mes === 'Enero') {
        console.log('Enero si existe');
    }
})

const resultado = meses.includes('Enero'); // Indica si un valor existe en un arreglo
console.log(resultado);

// .SOME es lo mismo pero para un arreglo de objetos, es igual a un arrow fuction en sintaxis

const resultado2 = carrito.some( producto => producto.nombre === 'Celular'
)

console.log(resultado2);

// En un arreglo tradicional comprobar lo mismo con .some

const existe2 = meses.some (mes=> mes === 'Febrero'); 
console.log(existe2);