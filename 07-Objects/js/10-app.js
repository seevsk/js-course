const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

const medidas = {
    peso:'1kg',
    medida:'1m',
}

console.log(producto);
console.log(medidas);

//Unir objetos en un nuevo objeto

const resultado = Object.assign(producto, medidas);

//Spread Operator o Rest Operator 

const resultado2 = {...producto, ...medidas} // Mas utilizada

console.log(resultado);
console.log(resultado2);
