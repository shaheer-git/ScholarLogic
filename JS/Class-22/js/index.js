// function

function getFor(obj) {
    return arr.forEach(function (element, /*index, arr*/) {
        console.log("single element: ", element);
        // console.log("index", index);
        // console.log("actual array", arr);
    }, obj)
}
// Using Foreach.
let arr = [100, 101, 102, 104];
let gloalObj = {

}
// let result = arr.forEach(function (element, /*index, arr*/) {
//     console.log("single element: ", element);
//     // console.log("index", index);
//     // console.log("actual array", arr);
// })

// let result1 = arr.map(function (element, index, arr) {
//     // console.log(index, arr)
//     return element * 2;
// })

// console.log(result1)

let result1 = arr.map(function (value, index, arr ) {
    // console.log(index, arr)
    return value * 2;
})

console.log(result1)