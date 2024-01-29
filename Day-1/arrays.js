let cities = ["Chennai", "Madurai", "Trichy"];
let marks = [62, 56, 45, 89, 95];
console.log(cities.length);
console.log(cities.splice(0, 0, "Coimbatore"));
console.log(cities);
//Arrays can be nested within arrays called as multidimentional arrays.
let multiArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(multiArr[2][2]);
// Array Methods
// push adds elements to the end
cities.push("Salem");
console.log(cities);
// Pop removes the last element in an array
cities.pop();
console.log(cities);
// unshift() add element at the start and reorder an array
cities.unshift("Tuticorin");
console.log(cities);
// shift() removes element from start and reorders an array
console.log(cities.shift());
console.log(cities);
marks.splice(2, 0, 98);
// console.log(marks);
console.log(marks);
marks.splice(2, 2);
console.log(marks);
// spread operator ...
let spreadArr = [...multiArr[0], ...multiArr[2]];
console.log(spreadArr);
