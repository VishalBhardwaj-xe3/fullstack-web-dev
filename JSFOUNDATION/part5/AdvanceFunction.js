//1.
function makeTea(typeofTea) {
    return `making ${typeofTea}`
 }

function processTeaOrder(teaFunction) {
    return teaFunction(`earl grey`)
}

let order = processTeaOrder(makeTea)
console.log(order);

//2.
function createTeaMaker() {
    return function (teaType) {
        return `making ${teaType}`;
    };
}

let teaMaker = createTeaMaker();
let result = teaMaker("tea")
console.log(result);
console.log(teaMaker("tea"));
