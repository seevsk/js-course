const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

// La variable con "const" una vez que es definida no se puede cambiar (reasignar) el valor, sin embargo los objetos si se pueden reasignar (esto lo menciona ya que esta generando el objeto con "const" = {}, que es una variable constante, ten en cuenta esto para que no te confundas).

producto.disponible = false // ojo solo las propiedades dentro del objeto se pueden reescribir o eliminar.

delete producto.precio;

console.log(producto);
console.log(producto.disponible);