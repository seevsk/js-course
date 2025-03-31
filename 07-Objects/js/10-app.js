
const product = {
    name: 'Monitor 20"',
    price: 300,
    available: true,
}

const measures = {
    weight:'1kg',
    size:'1m',
}

// Join the properties of an object // =
const result = Object.assign(product, measures);

// Spread Operator // =
const result2 = {...product, ...measures} 
// Mas utilizada

console.log(result);
console.log(result2);
