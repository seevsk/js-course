const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

//Agregar propiedad de un objeto a una nueva variable sin la necesidad de sobreescribirla (Manera Antigua)

// const nombre = producto.nombre;

//Nueva Manera ECMA6 - Destructuring

const {nombre} = producto;
console.log(nombre);

//Destructuring con Arreglos

const numeros = [10,20,30,40,50];

const [primero, , tercero, ...array] = numeros; // Aca tu puedes denominar la variable ya que es por posicion, no puedes crear variables en los corchetes

// ,, indica que no vas seleccionar esos elementos, solo te salteas al que deseas selecccionar,

// ...array, engloba los elemntos sobrantes un array es un comando recuerda

console.log(tercero);
console.log(primero);
console.log(array);