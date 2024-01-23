// Arithmatic operators
/*
    + Addition
    - Subtraction
    * Multiplication
    / Division
    % Reminder
    ** Power
    ++ Add one
    -- Subtract one
    */
//    Addition
let a = 10;
let b = 20;
let sum = a + b;
let diff = b - a;
let pdt = a * b;
let divide = b / a;
let reminder = b % a;
let power = a ** b;
console.log(sum);
console.log(diff);
console.log(pdt);
console.log(divide);
console.log(reminder);
console.log(power);
// Pre-increment & Decrement operators
a = 5;
// a = 5 + 1
++a;
// console.log("a value is : " + a);
--a;
// console.log("a value is : " + a);
// Post-Increment & Decrement operators
b = a++;
console.log("a value is : " + a);
console.log("b value is : " + b);
// Assignment operators
a = 10;
b = 10;
// a = a + 3
// shorthand assignment
a += 3;
// works the sameway on all operators
a -= 2;
b /= 5;
a **= 3;
b %= 2;
// speacials in JS
/*
infinity
NaN (Not a Number)
Undefined
Null
    */
// comparison operators
let myAge = 20;
console.log(myAge);
console.log(myAge > 20);
console.log(myAge >= 20);
