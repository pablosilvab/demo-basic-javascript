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

let newCast = [...actors,...actresses];
console.log(newCast);