function greetConsole(name) {
  console.log("Hello", name);
}
function greetHeading(name) {
  const headingOne = document.querySelector("h1");
  headingOne.innerHTML = "Hello" + " " + name;
}
function greet(callback, name) {
  callback(name);
}
greet(greetConsole("Arjun"));
