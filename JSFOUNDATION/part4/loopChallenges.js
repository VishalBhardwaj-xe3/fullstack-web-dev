//1.
// let array = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let index = 0; index < array.length; index++) {
    if (array[index] == "chai") {
        break;
    }
    selectedTeas.push(array[index]);
}
console.log(selectedTeas);

//2.
let array1 = ["London", "New York", "Paris", "Berlin"]
let skip = []
for (let index = 0; index < array1.length; index++) {
    if (array1[index] == "Paris") {
        continue;
    }
    skip.push(array1[index])
}
console.log(skip);

//3.
let numbers = [1, 2, 3, 4, 5]
let smallNumbers = []
for (const num1 of numbers) {
    if (num1 == 4) {
        // continue; break;
    }
    smallNumbers.push(num1)
}
console.log(smallNumbers);

//4.n
let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
let cityPopulation = {}
for (const city in citiesPopulation) {
    if (city == "Berlin") {
        break;
    }
    cityPopulation[city] = citiesPopulation[city];
}
console.log(cityPopulation);

//5.
let allTeas = ['earl grey', 'green tea', 'chai', 'oolong tea'];
let availableTea = []
allTeas.forEach((element) => {
    if (element === "chai") {
        return;
    }
    else {
        availableTea.push(element);
    }
});
console.log(availableTea);

//6.
let array = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const tea of array) {
    if (tea.length >= 10) {
        break;
    }
    shortTeas.push(tea)
}
console.log(shortTeas);
