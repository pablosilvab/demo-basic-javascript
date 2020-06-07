const tvshows = ['Breaking Bad', 'Better Call Saul', 'Dark', 'Narcos'];

console.log(tvshows);

tvshows.forEach(tvshow => {
    console.log(tvshow);
})

tvshows.map(tvshow => {
    return console.log(`La serie es ${tvshow}`);
});


const persona = {
    name: 'Cristiano Ronaldo',
    activity: 'Futbolista',
    age: 35,
    club: 'Juventus'
}

console.log(Object.keys(persona));

let actresses = ['Natalie Portman', 'Scarlett Johansson', 'Julia Roberts'];
let actors = ['Bryan Cranston', 'Tom Hanks', 'Robert Downey Jr.'];

let cast = actors.concat(actresses);
console.log(cast);

// Spread 
let newCast = [...actors,...actresses];
console.log(newCast);

let [lastActor] = newCast.reverse();
console.log(`El último actor es  ${lastActor}. Pero el arreglo está invertido por usar reverse. `);
console.log(newCast);

console.log(actresses);
let [lastActress] = [...actors].reverse();
console.log(`La última actriz es ${lastActress}. El arreglo no está invertido, es la ventaja de usar spread.`);
console.log(actresses);

