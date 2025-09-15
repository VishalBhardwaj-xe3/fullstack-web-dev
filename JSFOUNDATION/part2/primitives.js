// Number

let balance = 120
let anotherBalance = new Number(120)

// console.log(balance);
// console.log(anotherBalance.valueOf());


console.log(typeof balance);
console.log(typeof anotherBalance)
    
// boolean

let isActive = true
let isReallyActive = new Boolean(true);

// null and undefined

let firstname = null;
let lastname = undefined
// console.log(firstname);
// console.log(lastname);

// String

let myString = "hello"
let myStringOne = 'Hola'
let username = "Vishal"

let oldGreet = myString + " " + 'Hieash'
console.log(oldGreet);


let greetMeassage = `Hello ${username} !`;
let demoOne = `Value is ${2 * 2}`;
console.log(greetMeassage);
console.log(demoOne);

let sm1 = Symbol("voultuu")
let sm2 = Symbol("hitesh")

console.log(sm1 == sm2);
