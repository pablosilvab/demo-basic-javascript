const people = [
  { name: "Walter White", age: 52, ocupation: "Profesor de Química" },
  { name: "Heisenberg", age: 52, ocupation: "Narcotraficante" },
  { name: "Saul Goodman", age: 44, ocupation: "Abogado" },
  { name: "Cristiano Ronaldo", age: 35, ocupation: "Futbolista" },
  { name: "Son Goku", age: 43, ocupation: "Nuestro salvador" },
  {
    name: "Tony Stark",
    age: 49,
    ocupation: "Genio, millonario, playboy, filántropo.",
  },
];

console.log(people);

const oldPeople = people.filter((person) => {
  return person.age > 45;
});

console.log("Las personas mayores de 45 años son: ");
console.log(oldPeople);

const tonyInformation = people.find((people) => {
  return people.name === "Tony Stark";
});
console.log(`Tony se declara ${tonyInformation.ocupation}`);

let total = people.reduce((totalAge, person) => {
  return totalAge + person.age;
}, 0);

console.log("El promedio de edad es " + total / people.length);
