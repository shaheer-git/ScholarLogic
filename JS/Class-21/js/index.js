// Loops
let a = 2;
let b = 1;
let i = 1;
var arr1 = [1, "Shaheer", undefined, null]
while (a > b) {
    console.log("hello");
    a--;
}

do {
    console.log(i);
    i++;
} while (i < 5);

// for (let j = 0; j < a; j++) {

// console.log("I am J:", j)
// }
for (let j = 0; j < arr1.length; j++) {
console.log("normal for loop:", arr1[j])
}

// objects & arrays in js

let arr = [1, "", undefined, null];
let obj = {
    name: "Shaheer",
    age: 666,
    address: ["dss","dsfsf"]
}
// obj.name
// obj["name"]

for (const key in obj) {
    console.log("value:", obj[key])
}

for (const item of arr1) {
    console.log("for of loop",item)
}

// Labels

for (let j = 0; j < arr1.length; j++) {
    if (j === 2) continue;
console.log("labels- continue:", arr1[j])
}

for (let j = 0; j < arr1.length; j++) {
    if (j === 2) break;
console.log("labels- break:", arr1[j])
}

outer: for (let index = 0; index < array.length; index++) {
    outer1: for (let index = 0; index < array.length; index++) {
       for (let index = 0; index < array.length; index++) {
        if (index === 2) break outer;
       }
    }
    
}