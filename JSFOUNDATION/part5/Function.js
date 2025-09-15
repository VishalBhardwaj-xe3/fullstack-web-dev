//1.
function makeTea(typeofTea) {
    return `making ${typeofTea}`;
}

console.log(makeTea("green tea"));

//2.
const calculatedTotal = (price, quantity) => {
    return price * quantity;
}
// const calculatedTotal = (price, quantity) => price * quantity;

console.log(calculatedTotal(12, 5));
