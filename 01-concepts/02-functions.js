// Functions
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

// Arrow functions
let travel = function(destination){
    return `Viajando a ${destination}`;
}

let traveling = travel('Rio de Janeiro');
console.log(traveling);

let travel2 = (destination, days) => `Viajando a ${destination} por ${days} días`;

let traveling2 = travel2('Buzios',5);
console.log(traveling2);

// Objetos
const persona = {
    name: 'Walter',
    age: 52
}

console.log(persona);
console.log(`${persona.name} tiene ${persona.age} años.`);
console.log(`${persona['name']} tiene ${persona['age']} años.`);

function Travel(from, to){
    this.from = from;
    this.to = to;
}

Travel.prototype.trackingTravel = function()  {
    return `El viaje es desde ${this.from} a ${this.to}`;
}

const travel1 = new Travel('Santiago', 'Lima');
console.log(travel1);
console.log(travel1.trackingTravel());

const tvshow = {
    name: 'Better Call Saul',
    characters: ['Saul Goodman', 'Mike Ehrmantraunt', 'Kim Wexler'],
    information: {
        seasons: 5,
        episodes: 50
    }

}

console.log(tvshow);

let nameTvshow = tvshow.name;
let episodesTvshow = tvshow.information.episodes;

console.log(`Episodios de ${nameTvshow}: ${episodesTvshow}`);

// Destructuring
let {characters, information} = tvshow;
console.log(characters);
console.log(information );

let {seasons} = tvshow.information;
console.log(seasons);

// Object Literal Enhacement
const band = 'Pearl Jam';
const genre = 'Alternative Rock'
const songs = ['Just Breathe', 'Alive','Black'];

const pearlJam = {
    band: band,
    genre: genre,
    songs: songs
}
 
const newPearlJam = {band, genre, songs};

console.log(newPearlJam);
