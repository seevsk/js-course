
const product = {
    name: 'Monitor 20"',
    price: 300,
    available: true,
}

// Add new properties to the object
product.image = 'image.jpg';
console.log(product);

// Delete object properties
delete product.available;
console.log(product);