// Funciones, generan acciones en el codigo ademas de mantenerlo ordenado y son reutilizables.

// Declaracion de funcion (Function Declaration)
// Las llaves delimitan la funcion
function sumar() {
    console.log(2+2)
} ;

sumar(); // Llama a la funcion, se puede volver llamar varias veces
sumar();
sumar();

// Expresion de funcion (Function Expression)
const sumar2 = function() {
    console.log(3+3)
}

sumar2();

// Existe una tercera forma de crear funciones pero en realidad es un metodo, asi que mas adelante veremos la diferencia entre funciones y metodos ...