let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');

let ele = document.createElement('p');
ele.id = "para-1"
document.body.appendChild(ele)

// let para = document.getElementById('para')
// console.log(para.parentElement)
let parent = document.getElementById('parent-element')
console.log(parent.children)
console.log(parent.children[0].nextElementSibling)
console.log(parent.children[1].previousElementSibling)


// Nodes vs Elements

// Nodes will consider everything whatever comes under html element example text, html tags etc.
// Element will only consider tags

console.log(parent.childNodes)
console.log(parent.children[0].nextSibling)
console.log(parent.children[1].previousSibling)


const firstChild = parent.querySelector(':first-child');
console.log(firstChild)


function showTheContent() {
    event.preventDefault()
    console.log("Username :", username.value) 
    console.log("Email :", email.value) 
    console.log("Password :", password.value)
}