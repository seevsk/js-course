// Reto del FizzBuzz (100 numeros)
// Multiplo de 3 - Fizz
// Multiplo de 5 - Buzz
// Multiplos de 3 y 5 - Fizz Buzz

for(let i = 1; i <= 100; i++){
    if (i % 15 === 0) {
        console.log(`${i} - Fizz Buzz`);
    } else if (i % 5 === 0) {
        console.log(`${i} - Buzz`); 
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`)
    }
    
}

