/*function greetConsole(name) {
  console.log("Hello", name);
}
function greetHeading(name) {
  const headingOne = document.querySelector("h1");
  headingOne.innerHTML = "Hello" + " " + name;
}
function greet(callback, name) {
  callback(name);
}
greet(greetConsole, "Arjun");*/
/*
function greetConsole(name) {
  console.log("hello", name);
}
function greetHeading(name) {
  const heading = document.querySelector("h1");
  heading.innerHTML = "Hello " + name;
}
function greet(callback, name) {
  callback(name);
}
greet(greetConsole("Arjun"));
greet(greetHeading("Arjun"));
*/
// Foreach Method
// let array = ["Arjun", "Dharini", "Samyuktha"];
// let printVal = (val) => {
//   console.log(val.toUpperCase());
// };
// array.forEach(printVal);
let myArr = ["Orange", "Apple", "Grapes", "Pears", "Banana"];
myArr.forEach((val) => {
  // const opt = document.createElement("option");
  // opt.innerHTML = val;
  // opt.value = val;
  let mySelect = (document.getElementById(
    "fruits"
  ).innerHTML += `<option>${val}</option>`);
});
