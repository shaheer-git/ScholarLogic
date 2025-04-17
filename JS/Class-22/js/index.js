// function

function getFor(obj) {
    return arr.forEach(function (element, /*index, arr*/) {
        console.log("single element: ", element);
        // console.log("index", index);
        // console.log("actual array", arr);
    }, obj)
}
// Using Foreach.
let arr = [100, 101, 102, 104, 101];
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

let result2 = arr.filter(function (value, index, arr ) {
    return value === 101
})

let result3 = arr.find(function (value, index, arr ) {
    return value === 101
})

let result4 = arr.reduce(function (value, index, arr ) {
    return value === 101
})

console.log(result4)