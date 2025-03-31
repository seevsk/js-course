
// In a constructor, this points to the instance created with "new".

// It is not recommended to use “this” in functions of type arrow. Functions with "normal structures" yes.


// In an object, this points to the "object itself".
const product = {
    name: 'Monitor 20"',
    price: 300,
    available: true,
    showInfo: function() {
        console.log(`The product: ${this.name} has a price of ${this.price}`);
    }
}

const product2 = {
    name: 'Laptop',
    price: 20,
    available: true,
    showInfo: function() {
        console.log(`The product: ${this.name} has a price of ${this.price}`)
    }
}

product.showInfo();
product2.showInfo();