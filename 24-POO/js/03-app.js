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

// Herencia 

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo); // busca en el constructor padre los atributos
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() { // Reescribir un metodo
        return `Bienvenido al Cajero de Empresas`
    } 
}


// Instanciar

const Sebastian = new Cliente('Sebastian', 500);
const empresa = new Empresa ('Fred', 500, 1000, 'xd');
console.log(empresa)
console.log(empresa.mostrarInformacion());
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
