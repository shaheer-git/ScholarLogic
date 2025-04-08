
// debugging using devtools Covered source and netwok tab.

// const container = document.querySelector('.container');
// container.addEventListener('click', function (event) {
//     eventpreventDefault();
//     alert('You clicked on the container!');
// });
// const paragraph = document.querySelector('p');

fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(res=>console.log(res));
function calculate() {
    console.log("Button clicked!")

    a = 10;
    b = "5"; // This is a string on purpose

    // Debug here: check types
    console.log("Type of a:", typeof a);
    console.log("Type of b:", typeof b);

    // Mistake: b should be a number
    let result = a + b;
    a= "sdkfhs"
    console.log("Result (with bug):", result); // Output will be "105"

    // Fixing the bug
    let correctResult = a + parseInt(b);
    console.log("Correct result:", correctResult);

    // Catching a possible error
    try {
        let x = undefinedVar + 2; // undefinedVar is not declared
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
    add();
}

function add() {
    let a = 10
    let b = 5
    let result = a + b
    console.log("Result (with no bug):", result)

}