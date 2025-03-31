// Propiedades privadas en una clase, hay atributos privados y publicos, y lo que se conoce como protectec 

// Publico - Accedes dentro de la clase o en el objeto
// Privado - 
// Protectec - 


class Cliente {

    #nombre;

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }
    // Propiedades Estaticas
    
    static bienvenida() {
        return `Bienvenido al Cajero`
    } 
}

const juan = new Cliente('Juan', 200);
console.log(juan.mostrarInformacion())
// console.log(juan.#nombre)