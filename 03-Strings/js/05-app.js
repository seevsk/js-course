
const product = 'Monitor 24"';
console.log(product);

// .replace() to replace.
console.log(product.replace('24"','25"') );
console.log(product.replace('Monitor','Laptop') );


// .slice() to cut by index position.
console.log(product.slice(0, 7));
console.log(product.slice(8));
console.log(product.slice(0,2)); //jajaxd


// Alternative to .slice().
// Does not support negative indexes.
console.log(product.substring(0, 7));
console.log(product.substring(0, 2));


// It's a good working question the difference
// between .slice() and substring(). ↑

const user = 'Sebastian';
console.log(user.substring(0,5) );

// They use it to "cut" off the "first letter" 
// "usually" for "profiles" like the circle in FB, this
// obviously you'll learn this when you apply it to HTML.
console.log(user.charAt()); 


