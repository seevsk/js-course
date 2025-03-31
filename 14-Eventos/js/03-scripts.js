// Eventos con el teclado , ejm cuando escribes en un formulario puedo tener funciones o codigos que se ejecuten 

const busqueda = document.querySelector('.busqueda');
busqueda.addEventListener('input', (e) => {
    if (e.target.value === '') {
        console.log('Fallo la validacion'); 
        //con este seudo podrias asegurarte la validacion del texto
    }
    console.log(e.target.value); // de algna manera muestra lo que escribes
});


// keydown - funciona cuando estas escrbiendo
// keydown - cuando presionas y sueltas la tecla, no noto la diferencia con el de arriba
// blur - muy comun en la validacion de formularios en este caso entras al input y cuando sales ejecuta la funcion
// copy - cuando intentas copiar un texto
// paste - cuando intentas pegar un text
// cut - cuando cortas
// input - cuando realizar cualquiera de los eventos que mencionamos anteriormente, salvo el blur, el copy, y los keys.