const year = <HTMLElement>document.getElementById('year'); //get div you want to put year in
year.innerHTML = new Date().getFullYear().toString(); //make html of div be the current year