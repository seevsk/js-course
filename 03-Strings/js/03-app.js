
const product = 'Monitor 22" ';
const price = '30 USD';

// we concatenate the product
// variable with the price variable
console.log(product.concat(price));

// we concatenate the variable product
// with the string “On discount”.
console.log(product.concat('On discount'));

// Concatenation Method N°1
console.log('The product ' + product
    + 'at a cost of ' + price);

// Concatenation Method N°2 
console.log('The product', product, 
    'at a cost of ', price);

// Concatenation Method N°3
// Template String - best option
console.log(`The product ${product} at a cost of ${price}`); 
