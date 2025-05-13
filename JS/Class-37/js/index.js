try {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
} catch (error) {
    console.log(error)
}