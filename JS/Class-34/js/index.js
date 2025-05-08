function myFunction() {
    // document.getElementById("demo").innerHTML = "You pressed a key = "+ event.key + " inside the input field";
    document.getElementById("demo").innerHTML = `You pressed a key = ${event.key} inside the input field`;
}

function handleOnLoad() {
    alert("All the Files were loaded in the browser")
}

function pHandler() {
    alert("P is triggered")
}
function divHandler() {
    alert("div is triggered")
}
function formHandler() {
    event.stopImmediatePropagation();
    alert("form is triggered")
}