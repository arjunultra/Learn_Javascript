// for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// while loop
let i = 20;
while (i >= 10) {
  console.log(i);
  i--;
}
// do - while loop
let j = 1;
do {
  console.log(j);
  j++;
  if (j % 3 === 0) {
    continue;
  }
  console.log(j);
} while (j < 10);
// break
while (true) {
  let num = Number(prompt("Enter a number"));
  if (!isNaN(num)) {
    break;
  } else {
    alert("You must enter a valid number. Please try again.");
  }
}
// for of (Arrays)
let fruits = ["apple", "mango", "strawberry", "orange", "banana"];
for (let fruit of fruits) {
  console.log(fruit.toUpperCase());
}
// for in (Objects)
let myCar = {
  make: "Maruthi",
  model: "Ertiga",
  color: "Red",
  year: 2018,
  isRegistered: true,
};
for (let keys in myCar) {
  console.log(`${keys}:${myCar[keys]}`);
}
