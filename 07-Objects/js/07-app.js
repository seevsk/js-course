
const product = {
    name: 'Monitor 20"',
    price: 300,
    available: true,
}

// The "properties of an object can be overwritten and
// deleted", regardless of whether its variable is “const”.
product.available = false 
delete product.price;

console.log(product);
console.log(product.available);