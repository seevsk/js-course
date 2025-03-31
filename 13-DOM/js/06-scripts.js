const encabezado = document.querySelector('.contenido-hero h1').textContent; //chaining - seleccionar diferentes elementos
console.log(encabezado);

// console.log(encabezado.innerText); //Acceder al texto, si aplicas hidden en el css no lo va encontrar 

// console.log(encabezado.textContent); //Acceder al texto, si aplicas hidden en el css igual lo va encontrar 

// console.log(encabezado.innerHTML); // Se trae el HTML

const nuevoHeading = 'Nuevo Encabezado'
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'