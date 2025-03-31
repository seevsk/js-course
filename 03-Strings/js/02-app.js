
const product = 'is"better"';
console.log(product);

// Quantity of a string
console.log(product.length);

// Search for the first occurrence of “is” within “product”.
// If found, it returns the position of the index.
// If nothing is found, it returns -1.
console.log(product.indexOf('is'));

// Validates if the string “better” is inside “product”.
// Returns “true” if found, or “false” if not.
console.log(product.includes('better'));
