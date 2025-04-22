const add = (a, b) => a + b;

function name(a, b) {
    return a + b;
}

console.log(add(10, 20), name(12, 23));

// Objects.

const obj = {};

const obj1 = new Object();

console.log(obj1);

// Accessing an Object
// using "." and "['']"

obj.name = "Shaheer";
obj1['name'] = "Shaheer";

delete obj1['name'];

// for iterating an object
for (const key in obj) {
    if (key === "name") {
        delete obj[key];
    }
}

obj.hasOwnProperty("name");

// objects reference and copying.

// let obj2 = {name: "MH"};

// let obj3 = obj2;

// obj3.name = "Poojitha";

//  stack                       Heap
//                  |
// obj2             |     "Poojitha"
//                  |     
// obj3             |


let obj2 = { name: "MH" };

let obj3 = structuredClone(obj2);

obj3.name = "Poojitha";