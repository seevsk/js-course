// DIFERENCIA ENTRE FUNCIONES Y METODOS - aunque son practicamente lo mismo tienen que ver en el contexto en el cual son utilizadas

const numero1 = 20;
const numero2 = '20';

console.log(parseInt(numero2)) // Esta es una funcion
console.log(numero1.toString()); // Esto es un metodo

function sumar() {
    console.log(2+2);
}

sumar();