// Otra forma de revisar si una condicion se cumple se conoce como operador ternario

const autenticado = false;
const puedePagar = true;

// console.log( autenticado || puedePagar ? 'Si puede pagar' : 'No no esta autenticado');

console.log( autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si esta autenticado y no puede pagar' : 'No no esta autenticado');

// If anidado (poco comun)

// const efectivo = 800;
// const credito = 300;
// const disponible = efectivo + credito;
// const totalPagar = 600;

// if(efectivo >= totalPagar ||
//     credito >= totalPagar ||
//     disponible >= totalPagar) 
//     { if (efectivo > totalPagar){
//     console.log('Si pagaste con efectivo');
// } else {
//     console.log('Otra forma de Pago');
// }
    
// } else {
//     console.log('Fondos Insuficientes');
// }
