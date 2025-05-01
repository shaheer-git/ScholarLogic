let obj = {
    name: "Sha",
    street: "BTM Layout",
    age: 100
};

const { name, street, age } = obj;

// Array
let arr = [100, "sha", true ];

const [ num, str, bool  ] = arr;

// Rest operator.


const [ num1, ...values] = arr;

// Spread operator.
const [...spread] = arr;

// ex:
const numbers = [1, 2, 3,5,7];
Math.max(...numbers);

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; 
console.log(combined); // [1, 2, 3, 4]

