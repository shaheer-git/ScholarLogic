async function getTodos() {
    try {
       let response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
       let res = await response.json()
       console.log(res)
    } catch (error) {
        console.log(error)
    }
}

// method	HTTP method (GET, POST, PUT, DELETE, etc.)
// headers	HTTP headers as an object or Headers instance
// body	Data to send with the request (usually for POST, PUT)

// XML Http Request

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.example.com/data', true); // true means async

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) { // 4 = DONE
    if (xhr.status === 200) {
      console.log('Response:', xhr.responseText);
    } else {
      console.error('Error:', xhr.status);
    }
  }
};

xhr.send(); // send the request
