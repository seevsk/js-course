// Switch case

const metodoPago = 'tarjeta';

switch(metodoPago) {
    case 'efectivo':
    console.log(`Pagaste con ${metodoPago}`);
    break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
    break;
    case 'tarjeta': 
        function pagar(){
            console.log(`pagando ...`);
        }
    break;
    default: console.log('Aun no has seleccionado un metodo de pago o metodo de pago no soportado');
    break;
}

pagar();