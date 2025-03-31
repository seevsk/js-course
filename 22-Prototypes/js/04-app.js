
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

function Persona (nombre, saldo, telefono) {
    FclienteDinamico.call(this, nombre, saldo);
    this.telefono = telefono;
};


// Heredar los prototypes se hace antes de instanciarlo
Persona.prototype = Object.create(FclienteDinamico.prototype);
Persona.prototype.constructor = FclienteDinamico;



// Instanciarlo

const juan = new Persona('Juan', '5001', '949765273')
console.log(juan);
console.log(juan.nombreClienteSaldo());


Persona.prototype.mostrarTelefono = function() {
    return `El telefono de esta persona es ${this.telefono}`
}

console.log(juan.mostrarTelefono());

// Prototype: que son, como crearlos, como heredarlos y porque se usa fuction y no un arrow fuction