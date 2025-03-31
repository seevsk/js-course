// Aca solo hemos creado una funcion, pero en la vida real en tus proyectos, tus funciones tendran entre 50 y 200 funciones

iniciarApp();
function iniciarApp(){
    console.log('Iniciando App ...');
    segundaFuncion(); // Se recomienda poner aca ya que es bueno ponerlo luego de que la primera funcion alla finalizado asi seguir la congruencia
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Sebastian');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario espere ...');
    console.log(`Autenticado exitosamente ${usuario}`);
}

// Estas son funciones con parametros en la sgte veremos acciones que retornan valores.