"use strict";

// TODO Help! When I run this code in the browser, I don't see an alert. What's wrong???
//
// function alertHowdy() {
//   alert('Howdy!');
// }
// alertHowdy()


// TODO Help! I'm getting undefined in this alert. What's wrong???
//
// let num1 = 5;
// let num2 = 2
// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }
// alert(addTwoNumbers(num1, num2));

// TODO Help! Why is this always logging the wrong message?
//
// function returnPunctuationMsg(punctuation) {
//   let msg;
//   switch(punctuation) {
//     case '!':
//       msg = 'This is an exclamation point';
//       break;
//     case '.':
//       msg = 'This is a period';
//       break;
//     case '?':
//       msg = 'This is a question mark';
//       break;
//     case ',':
//       msg = 'This is a comma';
//       break;
//     default:
//       msg = 'I don\'t know what this is...';
//   }
//   return msg;
// }
//
// console.log(returnPunctuationMsg('?'));


// TODO Help! Why is this always showing me that the input is seven?
//
// function isSeven(num) {
//   if (num === 7) {
//     console.log('This is seven.');
//   } else {
//     console.log('This is NOT seven.');
//   }
// }
//
// isSeven(5);


// TODO Help! Why doesn't this log 4???
//
// function returnTwo() {
//   return 2;
// }
//
// console.log (returnTwo() + returnTwo());


// TODO Help! Why does it not matter what I enter, it always logs the same message!

function logAdminIn(isAdmin) {
    if (isAdmin) {
        console.log('Logging admin in...');
    } else {
        console.log('Redirecting user to regular page...');
    }
}
logAdminIn(true)
//


let isAdmin = confirm("User one, please confirm that you are an admin.");
logAdminIn(isAdmin);

let isAdmin2 = confirm("User two, please confirm that you are an admin.");
logAdminIn(isAdmin2);

let isAdmin3 = confirm("User three, please confirm that you are an admin.");
logAdminIn(isAdmin3);
