
let result;
//PI 3,14 - Global variable already defined

let valuePi = Math.PI;
console.log(valuePi);

// It is rounded past the “.5” 
let rounded = Math.round(24.5);
console.log(rounded);

// Round to the nearest whole number with
// the "smallest decimal" place difference
let roundingDecimalUp = Math.ceil(2.1);
console.log(roundingDecimalUp);

// Round down regardless of the "decimal
// difference" to the nearest whole number.

let roundingDecimalDown = Math.floor(2.9);
console.log(roundingDecimalDown);


let squareRoot = Math.sqrt(64);
console.log(squareRoot)

// Returns the value of the integer either “+” or “-”.
let absoluteValue = Math.abs(-200);
console.log(absoluteValue);

// (Number, Power)
let powerNumber = Math.pow(2, 3);
console.log(powerNumber);

let minorNumber = Math.min(2,4,23,244);
console.log(minorNumber);

let largestNumber  = Math.max(2,4,23,244);
console.log(largestNumber);

let randomNumber = Math.random();
console.log(randomNumber);

// Generates a random number between 0 and 29
result = Math.floor(Math.random()* 30 + 1);
console.log(result);