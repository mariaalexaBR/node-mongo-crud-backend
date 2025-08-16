'use strict';
// mi-app-node/index.js
// This is the main entry point of the application.

// Importing the math module
const math = require('./math');

// Using the math module to perform some operations
const a = 10;
const b = 5;

console.log(`Addition of ${a} and ${b}:`, math.add(a, b));
console.log(`Subtraction of ${a} and ${b}:`, math.subtract(a, b));
console.log(`Multiplication of ${a} and ${b}:`, math.multiply(a, b));
console.log(`Division of ${a} by ${b}:`, math.divide(a, b));
console.log(`Square of ${a}:`, math.square(a));
console.log(`Square root of ${a}:`, math.squareRoot(a));




