window.addEventListener('load', fetchuser);

let allUsers = [];

async function fetchuser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');

  const json = await res.json();
  console.log('ola');

  allUsers = json.map((user) => {
    const { completed, id, title, userId } = user;

    return {
      completed,
      id,
      title,
      userId,
    };
  });
  render();
}

function render() {
  let results = document.querySelector('#results');

  allUsers.map((user) => {
    let { completed, id, title, userId } = user;

    results.innerHTML += `
    <ul>
      <li>${completed}</li>
      <li>${id}</li>
      <li>${title}</li>
      <li>${userId}</li>
    </ul>
  `;
  });
}
