// Fetch example by jtryan: https://github.com/jtryan
//https://github.com/jennifert/JavaScript-Demos/commit/cd54948480699cb02913a568d003be67c86d1248#diff-96db5127afd0be38e220beae66d844dc
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
