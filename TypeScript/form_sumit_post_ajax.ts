//function AJAX request
function AjaxRequest(search: string | null | undefined, uri: string) { //in server api, search can be empty
    
    //typical ajax call, used this guide to change from jquery: http://youmightnotneedjquery.com/#request
    const request = new XMLHttpRequest();
    request.open('POST', uri, true);  //post request
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) { //on success
            var resp = this.response;
            console.log(resp);
        } else { //on fail
            console.log('Error on the server. Check you have the correct url.');
        }
    };
    request.onerror = function () { //other errors
        console.log('Not able to connect to server');
    };
    request.send(search);
}

const search_form = <HTMLElement>document.getElementById('search-form'); //get search form by its id
search_form.addEventListener('submit', function (event) { //when form submitted
    event.preventDefault();
    let search: string;
    search = (document.getElementById("search") as HTMLInputElement).value; //get search text field value
    AjaxRequest(search, '/api/search/' + search); //send request to API function
})