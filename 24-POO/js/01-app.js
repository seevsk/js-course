// Programacion Orientada a Objetos con clases, ya la vimos con funciones 

// CLass Declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
    // Propiedades Estaticas
    
    static bienvenida() {
        return `Bienvenido al Cajero`
    } 
}

// Instanciar

const Sebastian = new Cliente('Sebastian', 500);
console.log(Sebastian.mostrarInformacion());
console.log(Sebastian);
console.log(Cliente.bienvenida())

// -------------------

// Class Expresion
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

const Sebastian2 = new Cliente2('Sebastian2', 510);
console.log(Sebastian2.mostrarInformacion());
console.log(Sebastian2);