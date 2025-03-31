
//. this es una forma de referirse a al objeto en si mismo, sin ello buscara por fuera. NO se puede utilizar de nombre para crear variables.

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

const producto2 = {
    nombre: 'fonito',
    precio: 20,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();