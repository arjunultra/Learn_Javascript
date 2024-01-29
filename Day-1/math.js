let roundNumber = Math.round(5.8);
let ceilNumber = Math.ceil(0.01);
let floorNumber = Math.floor(8.99);
let squareRoot = Math.sqrt(9);
let absoluteValue = Math.abs(-9);
let powerOfNumber = Math.pow(2, 5);
let findMinimum = Math.min(1, 3, 5, 7, 9); //returns the minimum value in the given data set.
let findMaximum = Math.max(2, 4, 6, 8, 10);
let randomNumber = Math.floor(Math.random() * 5);
console.log(roundNumber);
console.log(ceilNumber);
console.log(floorNumber);
console.log(squareRoot);
console.log(absoluteValue);
console.log(powerOfNumber);
console.log(findMinimum);
console.log(findMaximum);
console.log(randomNumber);
console.log(Math.PI);
console.log(Math.E);
/* Math.round() rounds a number to the nearest integer. If the fractional part of the number is 0.5 or greater, the argument is rounded to the next higher integer. If the fractional part is less than 0.5, the argument is rounded to the nearest lower integer. For example, Math.round(4.2) would result in 4, and Math.round(4.7) would result in 5.

Math.ceil(), on the other hand, always rounds a number up to the next largest integer, regardless of the fractional part. So, both Math.ceil(4.2) and Math.ceil(4.7) would result in 5. Even if the fractional part is very small, such as Math.ceil(4.01), it would still round up to 5. 

Math.floor() in JavaScript rounds a number down to the nearest integer, regardless of the fractional part. This function takes a single argument and returns the largest integer less than or equal to the given number. If the number is already an integer, it remains unchanged.

Math.sqrt() is a function in JavaScript used to calculate the square root of a number. It returns the square root of a number provided as an argument. If the number is negative, Math.sqrt() returns NaN (Not a Number), as the square root of a negative number is not a real number.

Math.abs() is a function in JavaScript that returns the absolute value of a number. The absolute value of a number is the number without its sign, so it's always non-negative. If the argument is not a number, it will be converted to a number if possible.

Math.pow() is a function in JavaScript that returns the base to the exponent power, that is, base^exponent. It takes two arguments: the base and the exponent.

Math.min() is a function in JavaScript that returns the smallest of zero or more numbers. You can pass any number of arguments to this function, and it returns the smallest value among them. If any argument is not a number or cannot be converted into one, it returns NaN.

Math.max() is a function in JavaScript that returns the largest of zero or more numbers. Similar to Math.min(), you can pass any number of arguments to this function, and it will return the largest value among them. If any of the arguments cannot be converted into a number, it returns NaN.

Math.random() is a function in JavaScript that generates a pseudo-random number between 0 (inclusive) and 1 (exclusive). It doesn't take any arguments. This function is commonly used in scenarios where random numbers are needed, such as in games or simulations.
*/
