const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

// Agregar nuevas propiedades al objeto (Despues)
producto.imagen = 'imagen.jpg';

// Eliminar propiedades del objeto (despues)
delete producto.disponible;



console.log(producto);