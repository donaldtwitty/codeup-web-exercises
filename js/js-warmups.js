"use strict";

/* TODO

  Write a function, addTen, that takes in an input. If the input is a number,
  return the input plus ten and false otherwise.

  Examples:

  addTen(0); // returns 10
  addTen(10); // returns 20
  addTen('bob'); // returns false

 */
//
// function addTen(input){
//     if (typeof input === 'number') {
//         return input + 10;
//         } else {
//         return false;
//     }
// }
// console.log(addTen(0),10);
// console.log(addTen(10), 20);
// console.log(addTen(-10), 0);
// console.log(addTen('bob'), false);
// console.log(addTen(100), 110);


// Copy and paste the following warm up in your `js-warmups.html` file and complete the TODO...

/* TODO

Write a function, makeUpperCase, that takes in an input and returns the input in uppercase if it is a string.
If the input is not a string, return false.

Examples:

makeUpperCase('cat') // returns 'CAT'
makeUpperCase('DoG') // returns 'DOG'
makeUpperCase('CODEUP') // returns 'CODEUP'
makeUpperCase(54) // returns false
makeUpperCase(true) // returns false
makeUpperCase(null) // returns false

*/

// function makeUpperCase (input) {
//     if (input === '') {
//         return input ;
//     } else {
//         return false;
//     }
// }

function makeUpperCase (input) {
    if (typeof input === 'string') {
        return input.toUpperCase();
    } else {
        return false
    }
}

console.log(makeUpperCase('cat'), 'CAT'); // returns 'CAT'
console.log(makeUpperCase('DoG'), 'DOG'); // returns 'DOG'
console.log(makeUpperCase('CODEUP'), 'CODEUP'); // returns 'CODEUP'
console.log(makeUpperCase(54), false); // returns false
console.log(makeUpperCase(true), false); // returns false
console.log(makeUpperCase(null), false); // returns false
console.log(makeUpperCase('5'), '5');
console.log(makeUpperCase(Infinity), false);
console.log(makeUpperCase('5dogs'), '5DOGS');