export default class Person {
    // lo primero que se ejecuta una vez que se crea la instancia
    constructor(name, ocupation){
        this.name = name;
        this.ocupation = ocupation;
    }

    getInfo(){
        console.log( `${this.name} es ${this.ocupation}`);
    }
}


// let person1 = new Person('Walter White', 'Profesor de Química');
// let person2 = new Person('Vegeta', 'Principe de los Sayayin');


// console.log(person1.getInfo());
// console.log(person2.getInfo());


// export const message = 'Hola módulo!';

// const message2 = 'Hola módulo sin llaves';
// export default message2; // Solo puede existir un export default por archivo

// export const newPerson = (name, ocupation) =>{
//     return `${name} es ${ocupation}`
// }