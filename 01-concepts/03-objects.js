const person = {
    name: 'Son Goku',
    work: 'Guerrero Z',
    age: 800,
    rockMusic: true,
    // getInformation: function(){
    //     console.log(`${this.name} es ${this.work}.`);
    // }
    getInformation(){
        console.log(`${this.name} es ${this.work}.`);
    }
}

person.getInformation();
