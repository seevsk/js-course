// QuerySelector

const card = document.querySelector('.card');
console.log(card);

// Podemos tener selectores especificos como en CSS, de contenedor a contenedor 

const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card de hospedaje 
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)'); //clave
console.log(segundoCard);

// Seleccionar id 
const formulario = document.querySelector('#formulario');
console.log(formulario);

// Seleccionar elementos HTML
const navegacion = document.querySelector('nav'); 
console.log(navegacion);
