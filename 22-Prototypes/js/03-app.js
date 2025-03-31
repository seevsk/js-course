
function FclienteDinamico(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
};

// Instanciarlo POO

const Sebastian = new FclienteDinamico('Pedro', 5500);
console.log(Sebastian);

// Prototype, funciones exclusivas en FclienteDinamico

FclienteDinamico.prototype.CrearProtoNmTipoCliente = function() {
    let tipo;

    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if (this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Pobre';
    }
    return tipo;
}

FclienteDinamico.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.CrearProtoNmTipoCliente()}`;
}

FclienteDinamico.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}

Sebastian.retiraSaldo(1000);

console.log(Sebastian.CrearProtoNmTipoCliente());
console.log(Sebastian.nombreClienteSaldo());




