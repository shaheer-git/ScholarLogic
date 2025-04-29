let str = "SHAHEER";
let str1 = 'SDE';
let str2 = `SDE ${str1}`;

str.at(3) // index
str.charAt(2);
str.concat(" JS Dev") //"dsafs" + "dfsds"
str.startsWith("SHA")
str.endsWith("EER")
str.trim();
str.repeat(2);
str.includes("SHAHEER")
str.substring(2, 3)
console.log(str.slice(-2));

// Arrays
// let arr = [1,2,3,4,5];
let arr = [1, "Shaheer", true, {name: "shaheer"}];
let arr1 = new Array();

// Accessing an array
arr[0]
arr.at(0)
// arr.splice(1, 0, "shaheer")

// Insert an element
arr.push(33); // at the end
arr.unshift(33); // at the start

// Remove
arr.pop();
arr.shift(33); // at the start
arr.splice(1, 1)
delete arr[1];

// Replacing
// arr.splice(1, 1, "SS")

// subarray
arr.slice(0, 4);

arr.includes("Shaheer");

arr.indexOf("Shaheer");

arr.lastIndexOf("Shaheer");

arr.find((item, index, arr)=> item === "Shaheer")

console.log(arr.findIndex((item, index, arr)=> item === "Shaheer"))

arr.findLastIndex((item, index, arr)=> item === "Shaheer")


arr.filter((item, index, arr)=> item === "Shaheer")