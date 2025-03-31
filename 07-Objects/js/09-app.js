'use strict'; 

const product = {
    name: 'Monitor 20"',
    price: 300,
    available: true,
}

// Unlike the freeze, you can modify properties.
// You cannot delete or add properties
Object.seal(product); 

product.available = false;

console.log(product);

// Valid if sealed
console.log(Object.isSealed(product));
