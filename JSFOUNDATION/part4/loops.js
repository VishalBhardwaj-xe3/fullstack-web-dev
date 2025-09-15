//1.
let sum = 0;
 let i = 0;
while (i <= 5) {
    sum += i;
    i++;
}
console.log(sum);

//2.
let count = 5;
let array = []
let j = 0;
while (count > 0) {
    array[j] = count;
    j++
    count--
}
console.log(array);

//3.
let teaCollection = []
let tea
do {
    tea = prompt(`Enter your favourite tea(type "stop" to finish)`)
    if (tea != "stop") {
        teaCollection.push(tea);
    }
} while (tea != "stop");
console.log(teaCollection);

//4.
let array1 = [2, 4, 6];
let multipliedNumbers = [];

for (let index = 0; index <array1.length; index++) {
    multipliedNumbers.push(array1[index] * 2);
}
console.log(multipliedNumbers);

//5.
let cities = ["paris", "New york", "Tokyo", "London"];
let cityList = []
for (let index = 0; index < cities.length; index++) {
    cityList.push(cities[index]);
}
console.log(cityList);
