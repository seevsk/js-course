const cardDiv = document.querySelector('.card');
// target, al parecer brinda informacion

cardDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')) {
        console.log('Diste click en titulo');
    }
    if(e.target.classList.contains('precio')) {
        console.log('Diste click en precio');
    }
    if(e.target.classList.contains('info')) {
        console.log('Diste click en info');
    }
    if(e.target.classList.contains('card')) {
        console.log('Diste click en card');
    }
});

// Esto es lo mismo que hicimos en la clase anterior pero de una manera distinta - denominada delegation