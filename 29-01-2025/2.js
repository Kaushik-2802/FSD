async function getUser() {
    const url = await fetch('https://jsonplaceholder.typicode.com/users');
    const res = await url.json();
    const table = document.getElementById("user");
    let tableContent = `
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>
          <th>address</th>
        </tr>
    `;
    res.forEach(user => {
        tableContent += `
          <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address.street}</td>
          </tr>
        `;
    });
    tableContent += `</table>`;
    table.innerHTML = tableContent;
}

getUser();
