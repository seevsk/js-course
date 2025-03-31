
const number1 = 20;
const number2 = '20';
const number3 = 30;

// Validate if 2 numbers are equal
console.log(number1 == number3);
console.log(number1 == number2);

// Strict Comparator
console.log(number1 === number2);
console.log(number1 === Number.parseInt(number2));

// Difference
const password = 'admin';
const password2 = 'Admin';

console.log("pass");
console.log(password != password2);
console.log(number1 != number2);
console.log(number1 !== Number.parseInt(number2));

// Strict Difference
console.log(number1 !== number2);
