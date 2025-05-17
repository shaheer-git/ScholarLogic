window.addEventListener('load', getAllUser)

const url = 'https://dummyjson.com'
async function getAllUser() {
    const response = await fetch(url + '/users');
    const result = await response.json();
    // localStorage.setItem('allUsers', JSON.stringify(result));
    if (result?.users && result.users.length > 0) {
        let arr = result.users;
        for (let index = 0; index < arr.length; index++) {
            let userDetails = arr[index];
            let li = document.createElement('li');
            let span = document.createElement('span');
            let div = document.createElement('div');
            let editBtn = document.createElement('button');
            let deleteBtn = document.createElement('button');
            editBtn.className = "edit";
            editBtn.textContent = "Edit";
            editBtn.onclick = function () {
                localStorage.setItem('selectedUserID', userDetails.id)
            }
            deleteBtn.className = "delete";
            deleteBtn.textContent = "Delete";
            deleteBtn.onclick = function () {
                deleteUser(userDetails.id)
            }
            div.append(editBtn, deleteBtn);
            li.append(span, div);
            span.textContent = userDetails.firstName;
            let listContainer = document.getElementById('list-container');
            listContainer.append(li);
        }
    }
}

async function editUser(id, body) {
    const response = await fetch(url + '/users/'+ id, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: body,
    });
    const result = await response.json();
    console.log(result)
    await getAllUser();
}

async function deleteUser(id) {
    const response = await fetch(url + '/users/'+ id, {
        method: 'DELETE',
    });
    const result = await response.json();
    console.log(result)
}
function triggerPopUp() {
    let popUp = document.querySelector('.pop-up');
    let bg = document.querySelector('.bg-shadow');
    popUp.style.display = "flex !important;";
    bg.style.display = "block !important;";
    console.log(popUp, bg)

}

async function submit () {
    let inpt = document.querySelector('input');
    let id = localStorage.getItem('selectedUserID')
    await editUser(Number(id), JSON.stringify({firstName: inpt.value}))
}


var xhttp = new XMLHttpRequest();
xhttp.open("GET", url + '/users', true);
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.send();