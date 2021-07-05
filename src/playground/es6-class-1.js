class Person{
    constructor(name='Anonymous',age='NA'){
        this.name=name;
        this.age=age;
    }
    getGreeting(){
        return `Hi ! I'm ${this.name}`
    }
    getDescription(){
        return `This is ${this.name}, and their age is ${this.age}.`
    }
}

class Traveler extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homelocation = homeLocation;
    }

    getGreeting(){
        return super.getGreeting()+` I'm a traveler.`;
    }
    hasHomeLocation(){!!this.homeLocation};
    getDescription(){
        if(this.hasHomeLocation){
            return super.getDescription()+`I'm from ${this.homeLocation}`;
        }
        return super.getDescription();
    }

}

const me = new Traveler('Barath G D Krishnan',26);

console.log(me);
console.log(new Traveler());