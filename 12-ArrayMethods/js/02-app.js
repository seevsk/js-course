// Saber en que indice de nuestro arreglo se encuentra un elemento

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((meses, index) => {
    if(meses === 'Mayo') {
        console.log(`Encontrado en el indice ${index}`)
    }   
});

// Encontrar el indice de abril

const indice = meses. findIndex( mes => 
    mes === 'Abril');
console.log(`Encontrado en el indice ${indice}`);

// Encontrar un indice de arreglo de objetos, solo ve el primero que encuentre
const indice2 = carrito.findIndex(producto=> producto.precio === 100); {
console.log(indice2);
}