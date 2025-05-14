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

window.onerror = function (message, source, lineno, colno, error) {
    console.error('Global error caught:', message, source, lineno, colno, error);
    return true; // Prevent the default error handling
};
