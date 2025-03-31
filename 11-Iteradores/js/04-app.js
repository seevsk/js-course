// While - iterador muy comun, se va ejecutar mientras una condicion sea verdadera, consta de 3 partes


let i = 0 // Inicializar el While
while (i <= 20) { // Condicion
if (i % 2 === 0){
    console.log(`Numero ${i} es PAR `);
} else { 
    console.log(`Numero ${i} es IMPAR `);
}

    i++; // Incremento
}

let xd = 0 
while (xd <= 100) {
    if (xd % 15 === 0) {
        console.log(`${xd} - Fizz Buzz`);
    } else if (xd % 5 === 0) {
        console.log(`${xd} - Buzz`); 
    } else if (xd % 3 === 0) {
        console.log(`${xd} Fizz`)
    }
    xd++;
}
