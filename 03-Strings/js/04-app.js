
const product = '   Monitor 20"   x   ';

console.log(product);

// Consider spaces also as a quantity
console.log(product.length);


// Removes the space at the beginning
console.log( product.trimStart() );

// Removes the space at the end
console.log( product.trimEnd() );

// Removes the space at the beginning and at the end
console.log( product.trimStart().trimEnd() );



