// mi-app-node/math.js
// This module provides basic mathematical operations
// such as addition, subtraction, multiplication, division,
// squaring, and square root calculation.
// It can be used in other parts of the application or tested independently.

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

function square(a) {
  return a * a;
}

function squareRoot(a) {
  if (a < 0) {
    throw new Error("Cannot compute square root of a negative number");
  }
  return Math.sqrt(a);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  square,
  squareRoot
};

