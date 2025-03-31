// Eliminar elementos del LS

localStorage.removeItem('nombre');

// Actualizar un registro

const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Nuevo Mes');
console.log(mesesArray);
// Tendrias que volver a usar setItem, y agregarlo y convertirlo en objeto o array dependiendo que elemnto sea
localStorage.setItem('meses', JSON.stringify(mesesArray));

localStorage.clear(); // Elimina y limpia todo


