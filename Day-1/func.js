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
// Recursion
