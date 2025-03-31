// Protoypes no son facil en primera de entender y tampoco de crear - todos los objects tienen proto


// Objetc literal, mas utilizada, menos dinamica
const cliente = {
    nombre: 'Sebastian',
    saldo: 20
}

console.log(cliente);
console.log(typeof cliente);

// Object constructor 

function FclienteDinamico(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const clienteDinamico = new FclienteDinamico('Juan', 500)

console.log(clienteDinamico);




