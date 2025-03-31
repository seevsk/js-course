// Eventos que ocurren con el mouse

const nav = document.querySelector('.navegacion');
// Registrarle un evento
// nav.addEventListener('click', () => {
//     console.log('Click en nav');
// });


nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion');
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegacion');
    nav.style.backgroundColor = 'white';
});


// mouseenter - con solamente pasar el cursor por encima del elemento seleccionado ya se ejecuta el evento

// mousedown - similar al click
// dblclick - double click
// mouseup - cuando sueltas el mouse

// hay mas eventos