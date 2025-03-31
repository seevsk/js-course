//Operador Mayor que y menor que 
const dinero = 300;
const totalAPagar = 500;
const tarjeta = true;
const cheque = true;

if( dinero >= totalAPagar){
    console.log(`Si puedes pagar`);
}  else if (tarjeta){
    console.log(`Si puedo pagar porque tengo la tarjeta`);
} else if (cheque) {
    console.log(`Si puedo pagar porque tengo un cheque`);
} else {
    console.log(`Fondos Insuficientes`);
}
