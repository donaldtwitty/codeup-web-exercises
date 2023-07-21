"use strict"

let firstNumber = null;
let secondNumber = null;
let operatorValue = null;
let display = document.getElementById('display');

function number(num) {
  if (operatorValue === null) {
    firstNumber = (firstNumber === null) ? num : firstNumber + num;
    display.innerHTML = firstNumber;
  } else {
    secondNumber = (secondNumber === null) ? num : secondNumber + num;
    display.innerHTML = secondNumber;
  }
}

function operator(op) {
  operatorValue = op;
}

function calculate() {
  let result = null;
  switch(operatorValue) {
    case '+':
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case '-':
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case '*':
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case '/':
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
  }
  display.innerHTML = result;
}

function clearDisplay() {
  firstNumber = null;
  secondNumber = null;
  operatorValue = null;
  display.innerHTML = '';
}