var message = "Say my name.";
console.log(message);
message = "I'm one of the survivors of the apocalypse of June 27, 2020";
console.log(message);
message = 'Dios mio no recordaba Javascript, que tonto.';
console.log(message);
message = 2020
console.log(message);

var message = "Say my name.";
console.log('1. Walter say: ', message);
if (message){
    var message = 'I am not in danger Skyler, I am the danger.';
    console.log('2. Walter say: ', message);
}
console.log('3. Walter say: ', message);


let walterMessage  = "I am the who knocks.";
console.log('1. Heisenberg say: ', walterMessage);
if (walterMessage){
    let walterMessage = 'I am not in danger Skyler, I am the danger.';
    console.log('2. Heisenberg say: ', walterMessage);
}
console.log('3. Heisenberg say: ', walterMessage);


const name = 'Pablo';
const position = 'Developer';

console.log('Forma antigua  : Nombre: '+ name + ', Trabajo: '+ position);
console.log(`Nueva forma    : Nombre: ${name}, Trabajo: ${position}`);

const contenedorApp = document.querySelector('#app');
// let html = '<ul>'+
//                 '<li> Nombre: '+name+ '</li>' + 
//                 '<li> Trabajo: '+position+ '</li>' + 
//             '</ul>';

let html = `
    <ul>
        <li>Nombre: ${name}</li>
        <li>Trabajo: ${position}</li>
    </ul>
    `


contenedorApp.innerHTML = html;


function greeting(name){
    console.log(`Hola ${name}`);
}

greeting('Walter');


const client = function(name){
    console.log('Datos del cliente: ' + name);
}

client('Walter White');


function doing(name='Walter', activity='cocinando meta.'){
    console.log(`${name} está ${activity}`);
}

doing('Pablo','recordando Js porque no recuerda.');
doing('Jesse Pinkmann');

const todo = function(name='Walter', activity='cocinar meta.'){
    console.log(`${name} debe ${activity}`);
}

todo('Jesse');
todo('Heisenberg', 'matar a Gus.');