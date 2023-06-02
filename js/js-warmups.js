"use strict";

/* TODO

  Write a function, addTen, that takes in an input. If the input is a number,
  return the input plus ten and false otherwise.

  Examples:

  addTen(0); // returns 10
  addTen(10); // returns 20
  addTen('bob'); // returns false

 */

function addTen(input){
    if (!isNaN(input)) {
        return parseInt(input) + 10;
    }else{
        return false;
        }
    }
console.log(addTen(10));


