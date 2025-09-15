
function Person(name, age) {
    this.name = name
    this.age = age
}

function Car(make, Model) {
    this.make = make
    this.Model = Model
}

let myCar = new Car("TATA", "Camry")
// console.log(myCar);

let myNewCar = new Car("Toyota", "Safari")
// console.log(myNewCar);

function Tea(type) {
    this.type = type
    
    this.describe = function () {
        return `this is a cup of ${this.type}`
    }
}

let lemonTea = new Tea("lemon tea")
// console.log(lemonTea.describe());

function Animal(species) {
    this.species = species;

}

Animal.prototype.sound = function () {
    return `${this.species} makes a sound`
}
let cat = new Animal("cat");
// console.log(cat.sound());

let dog = new Animal("dog");
// console.log(cat.sound());

function Drink(name) {
    if (!new.target) {
        throw new Error("Drink must be called with new Keyword");

    }
    this.name = name;
}

let tea = new Drink("tea")
let coffee = new Drink("coffee")
console.log(Drink(lemonTea));
