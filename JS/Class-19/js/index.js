// Unary operator
let a = 10;
a++;
++a;
console.log(a)
// ++,--

// Binary operator
let a1 = 10;
let b1 = 10;
a1 = b1;

let result =  a1 + b1;
// =,+,-,*,/,%,**


// Chaining assignment
let h1=h2=h3=h4=h5=h6 = 10;
// console.log(h1,h2,h3)

// Prefix and Postfix
let count = 1;
let result1 = count++;  //postfix (old value return = 1;) (internally count = 2)
let result2 = ++count;  //prefix
console.log(count, count)