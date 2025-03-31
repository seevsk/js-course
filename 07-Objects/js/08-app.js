'use strict';

const product = {
    name: 'Monitor 20"',
    price: 300,
    available: true,
}

// Freezes the object and its properties 
Object.freeze(product); 

// // You cannot add properties
// product.image = 'image.jpg';
// // You cannot modify properties
// product.available = false;
// // You cannot delete properties
// delete product.name;

// Validates if an object is frozen
console.log(Object.isFrozen(product));
