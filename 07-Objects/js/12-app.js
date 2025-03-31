//Object Literal
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

//Object Constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 24k', 320);
console.log(producto2);

const producto3 = new Producto('Fonito 24k', 20);
console.log(producto3);