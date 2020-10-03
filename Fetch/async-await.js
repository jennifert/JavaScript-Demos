let myUrl = "search.json";
async function fetchSearchResults() {
    const response = await fetch(myUrl);
    const searchResults = await response.json();
    return searchResults;
}

fetchSearchResults().then(searchResults => {
    console.log(searchResults); //results in console
});