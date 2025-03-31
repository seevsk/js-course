
const boolean1 = true;
const boolean2 = false;
const boolean3 = 'true';

console.log(boolean1);
console.log(typeof(boolean1));
console.log(boolean1 == boolean3);
console.log(boolean1 === boolean3);

// "new" makes it an "object"
const boolean4 = new Boolean(true);
console.log(typeof(boolean4));
