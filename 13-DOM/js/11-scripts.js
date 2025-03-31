// DOM codigo de eventos - construiremos un boton con interaccion xd

const btnFlotante = document.querySelector('.btn-flotante'); // Selecciono la clase del ancore (1)

const footer = document.querySelector('.footer'); //(2)

btnFlotante.addEventListener('click', mostrarOcultarFooter) // (3) El elemento seleccionado mediante la clase espera un evento para poder activar su funcion, (Argumento 1 - evento, funcion)

function mostrarOcultarFooter() {
    if(footer.classList.contains('activo')) 
        //4 (2) Verifica si un elenento o no tiene una clase, al empezar no tiene la clase de activo por ello va al else para agregarlo mediante su condicion que creaste.
        {
        footer.classList.remove('activo'); //4 (3)
        btnFlotante.classList.remove('activo'); //4 (5)
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo'); //4 (1)
        btnFlotante.classList.add('activo'); //4 (4)
        this.textContent = 'X Cerrar';
    }
    
}

console.log(footer.classList);

