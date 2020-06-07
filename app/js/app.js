
const contenedorApp = document.querySelector('#app');
// let html = '<ul>'+
//                 '<li> Nombre: '+name+ '</li>' + 
//                 '<li> Trabajo: '+position+ '</li>' + 
//             '</ul>';

let html = `
    <ul>
        <li>Nombre: ${myname}</li>
        <li>Trabajo: ${position}</li>
    </ul>
    `


contenedorApp.innerHTML = html;

