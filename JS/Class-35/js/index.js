function outerFunction(outerVar) {
    function innerFunction(innerVar) {
        console.log(outerVar, innerVar);
    }
    return innerFunction;
}


const myClosure = outerFunction('Hello');
myClosure('World'); // Output: Hello World

function outer() {
    let count = 0;
    return function inner() {
        console.log(count++);
    }
}
let clos = outer()
clos();
clos();
clos();

// call, apply & bind

let obj = {
    name: 'Shaheer',
    class: 'JS'
}
function callFunction(a, b) {
console.log(this)
}
callFunction.call(obj, 1, 2);

function callFunction1(a, b) {
console.log(this)
}
callFunction1.apply(obj, [1, 2]);

function callFunction2(a, b) {
console.log(this)
}
let func = callFunction2.bind(obj, 1, 2);

