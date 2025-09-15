let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car.start());
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("john Doe", 20);
// console.log(john.name);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} make a sound`;
};

Array.prototype.vishal = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
// console.log(myArray.vishal());

let myNewArray = [1, 2, 3, 4, 5, 6];
// console.log(myNewArray.vishal());

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} : this ia an inheritance example`;
  }
}

let myCar = new Car("TATA", "Tiago");

// console.log(myCar.start());
// console.log(myCar.drive());

let VehOne = new Vehicle("TATA", "Tiago");
// console.log(VehOne.make);

//Encapsulation

class BankAccount {
  #balance = 0;

  depodit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());

//Abstraction

class CoffeMachine {
  start() {
    //call DB
    //filter value
    return `Starting the machine....`;
  }

  brewCoffee() {
    //complex calculation
    return `Brewing Coffee`;
  }

  startButton() {
    let msgOne = this.brewCoffee();
    let msgTwo = this.start();
    return `${msgOne} + ${msgTwo}`;
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());

// console.log(myMachine.startButton());

//PolyMorphism

class Bird {
  fly() {
    return `flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguines can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

//Static

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCalc = new Calculator()
// console.log(miniCalc.add(2,3));

// console.log(Calculator.add(2,3)); important accessing static method directly

// SETTERS GETTERS

class Employee {
  #salary;

  constructor(name, salary) {
    if(salary< 0) {
      throw new Error("Invalid salary");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid salary");
    } else {
      this._salary = value;
    }
  }
}

let emp = new Employee("Alice", -50000);
console.log(emp._salary);
emp.salary = 60000;
