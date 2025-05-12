function sayHi() {
    alert("Hello World!")
}
// setTimeout(sayHi, 5000)

// setInterval(sayHi, 2000);

let checkEven = new Promise((resolve, reject) => {
    let number = 4;
    if (number % 2 === 0) {
        resolve("The number is even!");
    } else {
        reject("The number is odd!");s
    }
});

checkEven
.then((successMsg)=>console.log(successMsg))
.catch((errMsg)=>console.log(errMsg))