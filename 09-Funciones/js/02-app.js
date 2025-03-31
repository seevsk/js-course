
// Declaracion de funcion (Function Declaration)

sumar(); // Llama a la funcion, se puede volver llamar varias veces
function sumar() {
    console.log(2+2)
} ;


// Expresion de funcion (Function Expression)
sumar2();
const sumar2 = function() {
    console.log(3+3)
}

// La de arriba se puede ejecutar antes de declarar la funcion mientras la siguiente no.