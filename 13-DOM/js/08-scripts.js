// Recorrer el DOM

const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
// console.log(navegacion.childNodes); // Los espacios en blancos son considerados elementos
// console.log(navegacion.children); // Enlista elementos que son reales - que sean codigo HTML

// console.log(navegacion.children[2]);
// console.log(navegacion.children[2].nodeName); //Etiqueta en este caso un ancore
// console.log(navegacion.children[2].nodeType); // Nodo tipo elemento

const card = document.querySelector('.card');
card.children[1].children[1].textContent = 'Nuevo Heading desde traversing the DOM'

card.children[0].src = 'img/hacer2.jpg'


console.log(card.children[1]);
console.log(card.children[1].children[1].textContent);
console.log(card.children[0]);

// Traversing del hijo al Padre

console.log(card.parentNode); // este toma con espacios en blanco
console.log(card.parentElement); // este va a verificar por elementos validos en el HTML, puedes repetir esta accion hasta llegar al padre de padres
console.log(card.parentElement.parentElement);

console.log(card.nextElementSibling) // Selecciona el siguiente hermano del elemento dentro de su entorno y se puede repetir e ir al sgte y sgte.

const ultimoCard = document.querySelector('.card:nth-child(4)')

console.log(ultimoCard.previousElementSibling); // Aparte del nth que selecciona el elemento que deseas el previous ... Sibling SELECCIONA EL ELEMENTO ANTERIOR O PREVIO

console.log(navegacion.firstElementChild); // 1er elemento
console.log(navegacion.lastElementChild); // 2do elemento