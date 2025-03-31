
// Object Literal
const product = {
    name: 'Monitor 20"',
    price: 300,
    available: true
}

// Object Constructor - is defined by a function
function productConstructor(name, price, available) {
    this.name = name;
    this.price = price;
    this.available = available;
}

// Reusable to create multiple objects
const product2 = new 
        productConstructor('Monitor 24"', 320, true);
console.log(product2);

const product3 = new 
        productConstructor('Laptop"', 20, false);
console.log(product3);