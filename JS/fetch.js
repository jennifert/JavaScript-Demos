
// Fetch example
const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
    .then((resp) => resp.json()) //act on promise
    .then(data => {
        console.log(data.completed)
        console.log(data.id)
        console.log(data.title)
        console.log(data.userId)
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
    });   
