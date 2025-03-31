// Eventos en un formulario - este evento sucede en un formulario sea id o clase pero de un formulario, NO EL INPUT, para que sea un formulario value.

// Seleccionaremos el id de formulario

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
        
    console.log('Consultar una API')

    e.preventDefault(); 
        // Previene la accion que haria por default 
    
    
    
        console.log(e.target.action);
} 