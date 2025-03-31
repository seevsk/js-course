
const product = {
    name: 'Monitor 20"',
    price: 300,
    available: true,
}

// const name = product.name; (optimizes this statement)

// Destructuring of Objects
// Convert the properties of an object into variables
const {name, price, available} = product;

console.log(product.name); // =
console.log(name); // =
console.log(price);
console.log(available);