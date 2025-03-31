
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

console.log(product);
console.log(product.information);
console.log(product.information.measures.weight);
console.log(product.information.measures.size);
console.log(product.information.manufacturing);
console.log(product.information.manufacturing.country);

