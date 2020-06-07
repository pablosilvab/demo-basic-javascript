const downloadUsers = quantity => new Promise((resolve, reject) => {
    const api = `https://randomuser.me/api/?results=${quantity}&nat=us`;

    // Ajax
    const xhr = new XMLHttpRequest();
    xhr.open('GET', api, true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }
    xhr.onerror = (error) => reject(error);
    xhr.send();

});

downloadUsers(13)
    .then(
        members => printHTML(members),
        error => console.error(
            new Error(`Hubo un error ${error}`)
        )
    )

function printHTML(users){
    let html = '';
    users.forEach(user => {
        console.log(user);
        html += `
        <li>
            Nombre: ${user.name.first} ${user.name.last }
            Email: ${user.email}
            Teléfono: ${user.phone}
            <img src="${user.picture.medium}"/>
        </li>`
    });

    const content = document.querySelector('#app');

    content.innerHTML = html;
}