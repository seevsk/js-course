//Buenas practicas en el if

const autenticado = true;

if(autenticado){
    console.log('El user esta autenticado');
}

// No hay necesidad de pone "if(autenticado == true)" ya se sobreentiende que autenticado es igual a true, no se si aplica para otros valores xd

const puntaje = 450;

function revisarPuntaje() {
if(puntaje > 400){
    console.log('God');
    return;
}

if(puntaje > 300) {
    console.log('A nada');
    return;
}
}

revisarPuntaje ();

// Usa bien tu logica de programacion siempre probando todo en la consola 
