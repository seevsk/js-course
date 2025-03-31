
const product = {
    name: 'Monitor 20"',
    price: 300,
    available: true,
    information: {
        measures: {
        weight: '1kg',
        size: '1m',
        }, 
        
        manufacturing: {
        country: 'China',
        }
    },
}

// Selective Destructuring
const {name, information, 
    information: 
    {manufacturing, manufacturing:{country}}} = product;

console.log(name);
console.log(information);
console.log(manufacturing);
console.log(country);
