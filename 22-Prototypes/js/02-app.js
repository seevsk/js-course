// Object constructor 

function FclienteDinamico(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const clienteDinamico = new FclienteDinamico('Juan', 500)

function formatearCliente(clienteN) {
// Destructuring 
const {nombre, saldo} = clienteN;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
};

console.log(formatearCliente(clienteDinamico));

function FcEmpresa (nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CnsEmpresa = new FcEmpresa ('Coca Cola', 5000, 'Bebidas');

function formatearEmpresa(empresaN) {
    // Destructuring 
    const {nombre, saldo, categoria} = empresaN;
        return `La empresa ${nombre} tiene un saldo de ${saldo} y su categoria es de ${categoria}`;
    };

console.log(formatearEmpresa(CnsEmpresa));

