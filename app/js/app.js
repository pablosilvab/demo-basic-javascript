import Sayayin from './sayain.js';
import Person from './people.js';

const person1 = new Person('Rick Grimes', 'Policía')
console.log(person1);
person1.getInfo();


// Sayayin
const sayain1 = new Sayayin('Vegeta', 'Principe de los Sayayin', 8000);
console.log(sayain1);
sayain1.getInfo();


// import {message, newPerson} from './people.js';
// import message2 from './people.js';

// console.log(message);
// console.log(message2);

// const person = newPerson('Saul Goodman', 'Abogado');

// console.log(person);