// Creacion de HTML desde JS

const enlace = document.createElement('a')
// Agregando el texto
enlace.textContent = 'Nuevo Enlace'
// Añadiendo href
enlace.href = '/nuevo-enlace';

enlace.target = '_blank';

enlace.setAttribute('data-enlace', 'nuevo-enlace')
enlace.classList.add('alguna-clase')

console.log(enlace);

// CONFORME VAS CREANDO HTML puedes asiganarle funciones

enlace.onclick = miFuncion;

// Seleccionar la navegacion donde poner tu creacion de HTML
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
// navegacion.appendChild(enlace);
navegacion.insertBefore(enlace, navegacion.children[2]);

function miFuncion() {
    alert('Mamahuevo');
}

// Crear un CARD    

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');


const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');



const parrafo3 = document.createElement('p');
parrafo3.textContent = '$1,200 por persona'
parrafo3.classList.add('precio');

// Crear div con la clase de info 

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear Imagen

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'texto-alternativo'

// Crear el padre card donde va ir dentro la img, la info y los parrafos (p)

const card = document.createElement('div');
card.classList.add('card');

// Asignar la imagen e info
card.appendChild(imagen);
card.appendChild(info);


// Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');

contenedor.insertBefore(card, contenedor.children[0]);
