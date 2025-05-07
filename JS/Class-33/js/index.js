// You can attach an event using below ways

// 1.
let btn = document.querySelector('button');
btn.onclick = function () {
    alert("Hi!")
}

// 2.
// btn.addEventListener('click', sayHI)
function sayHI() {
    alert("Hello World.")
}

// 3. Inline using onclick attribute
{/* <button onclick="sayHI()">Click here to Say HI.</button> */}

const handleOnchange = () => {
    console.log(event.target.value)
}


let div = document.querySelector('.container')
const handleMouseOver = () => {
    div.classList.add('container-onmouseover')
}
const handleMouseout = () => {
    div.classList.remove('container-onmouseover')
}