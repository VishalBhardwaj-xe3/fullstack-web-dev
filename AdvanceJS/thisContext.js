const person = {
  name: "Vishal",
  greet() {
    console.log(`hi, I am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "Vishal" });
boundGreet();

//bind, call and apply