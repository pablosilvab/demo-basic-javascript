import Person from './people.js';


export default class Sayayin extends Person {
    constructor(name, ocupation, fightingPower){
        super(name, ocupation);
        this.fightingPower = fightingPower;
    }

    getInfo(){
        console.log(`${this.name} es ${this.ocupation} y su poder de pelea es de ${this.fightingPower}`);
    }
}