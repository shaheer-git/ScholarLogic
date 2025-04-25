let obj = {
    name: "Shaheer"
};

console.log(obj?.name);
console.log(obj?.address?.street);

console.log(obj?.['address']?.['street']);

console.log(obj?.getWater?.())


// Parsing the value from string to number.

parseFloat(1.23)
parseInt(1)

// Math methods

console.log(Math.round(1.2233));
console.log(Math.ceil(1.23));
console.log(Math.floor(1.3));
console.log(Math.trunc(1.4));
console.log(2.33333333333.toFixed(2));
console.log(Math.max(1, 3, 2));
console.log(Math.min(1, 3, 2));
console.log(Math.pow(2, 10));


