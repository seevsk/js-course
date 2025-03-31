localStorage.setItem('nombre', 'Juan');
sessionStorage.setItem('Mamahuevo','Sebas');

// No soporta objetos, o arreglos pero puedes meterlo en el LS si lo conviertes en string

const producto = {
    precio: 300,
    nombre: 'Pantalla 4KLG'
}

const productString = JSON.stringify(producto);
localStorage.setItem('producto', productString);

const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);


// Asi se agregan datos al LS
