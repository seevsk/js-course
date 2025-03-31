// Operador Or - Switch
// Va ver que se cumpla una o la otra condicion pero que al menos se cumpla una de ellas, a diferencia de && que pide que se cumplan todas


const efectivo = 300;
const credito = 300;
const disponible = efectivo + credito;
const totalPagar = 600;

if(efectivo >= totalPagar 
    || credito >= totalPagar 
    || disponible >= totalPagar) {
    console.log('Si podemos pagar')
} else {
    console.log('Fondos Insuficientes');
}

