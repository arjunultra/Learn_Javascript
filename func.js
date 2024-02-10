/*
function isPositive(num) {
  return num > 0;
}
console.log(isPositive(56));
function sayHello() {
  console.log("Hello");
}
sayHello();
function findProduct(a, b) {
  let pdt = a * b;
  return pdt;
}
console.log(findProduct(5, 4));
console.log(typeof findProduct);
// default parameter
function greet(name = "There") {
  console.log("Hi" + " " + name);
}
greet();
greet("Arjun");
*/
// Recursion
let findFactorial = (n) => {
  if (n == 1) return 1;
  return n * findFactorial(n - 1);
};
console.log(findFactorial(3));
// function expression
// Immportant! Hoisting will not work with function as an expression as well as arrow function.Hoisting will take effect only with function declaration(normal function written with function keyword)
let isEven = (num) => {
  return num % 2 == 0;
};
console.log(isEven(5));
let array = [2, 3, 5, 6, 10];
let findSum = (arr) => {
  let sum = 0;
  for (let val of arr) {
    sum += val;
  }
  return sum;
};
console.log(findSum(array));
// find volume
let findVolume = (l, b, h) => {
  return l * b * h;
};
console.log(findVolume(2, 3, 5));
// area of circle
let circleArea = (r) => {
  return Number((Math.PI * r ** 2).toFixed(2));
};
console.log(circleArea(5));
// Variable Arguments - rest parameters // rest operator
let findPdt = (...args) => {
  let result = 1;
  for (let val of args) {
    result *= val;
    return result;
  }
};
// Generator Function
function* simpleGenerator() {
  let index = 1;
  while (true) {
    yield index++;
  }
}
const gen = simpleGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
// infinite data can be generated one by one manner
