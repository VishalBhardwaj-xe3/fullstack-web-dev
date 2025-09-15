function* numbergenerator() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = numbergenerator();
let genTwo = numbergenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(genTwo.next().value);
console.log(genTwo.next().value);
console.log(genTwo.next().value);
