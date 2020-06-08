class Person {
    // lo primero que se ejecuta una vez que se crea la instancia
    constructor(name, ocupation){
        this.name = name;
        this.ocupation = ocupation;
    }

    getInfo(){
        return `${this.name} es ${this.ocupation}`;
    }
}

class Sayayin extends Person {
    constructor(name, ocupation, fightingPower){
        super(name, ocupation);
        this.fightingPower = fightingPower;
    }

    getInfo(){
        return `${this.name} es ${this.ocupation} y su poder de pelea es de ${this.fightingPower}`;
    }
}

let person1 = new Person('Walter White', 'Profesor de Química');
let person2 = new Person('Vegeta', 'Principe de los Sayayin');


console.log(person1.getInfo());
console.log(person2.getInfo());

// Sayayin
let sayain1 = new Sayayin('Vegeta', 'Principe de los Sayayin', 8000);
let sayain2 = new Sayayin('Kakaroto', 'Luchador de artes marciales', 10000);


console.log(sayain1.getInfo());
console.log(sayain2.getInfo());


export const message = 'Hola módulo!';

const message2 = 'Hola módulo sin llaves';
export default message2; // Solo puede existir un export default por archivo