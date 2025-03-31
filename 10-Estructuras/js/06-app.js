// Operador && and - Switch
// Revisa que se cumplan 2 condiciones dentro de tu if

const usuario = false;
const puedePagar = false;
// "!" negacion en este caso
if(usuario && puedePagar) {
    console.log('Si puedes comprar');
} else if (!puedePagar && !usuario)  {
    console.log('No no puedes comprar');
} else if (!usuario) {
    console.log('Inicia Sesion o Crea una Cuenta');
} else if (!puedePagar) {
    console.log('Fondos Insuficientes');
}