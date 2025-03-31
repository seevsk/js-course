// Event bubbling - eventos que propaga por muchos otros lugares, indica que es algo complejo

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');


cardDiv.addEventListener('click', e => {
    e.stopPropagation(); // algo similar a la funcion o metodo que hizo prevenir el ancore en la anterior clase, bueno este funciona algo asi con el event bubbling para que no se propage o afecte a otros lados. 
    console.log('click en card');
});

infoDiv.addEventListener('click', e => {
        e.stopPropagation();
    console.log('click en info');
});

titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en titulo');
});


