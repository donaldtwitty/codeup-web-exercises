prompt("Select an odd number between 1 and 50");

let numberToStopAt = 50;

for (let i = 1; i < 50; i++) {
    if(i % 2 == 0) {
        console.log("the number is even.");
    } else {
        console.log("the number is odd.");
    }
    console.log(i + " is odd");

    console.log('Here is an odd number: ' + i);

    if (i === numberToStopAt) {
        console.log('We have reached the stopping point: break!');
        // use the break keyword to exit from the while loop
        break;
        // nothing after the break will get processed
        console.log('You will never see this line.');
    }
}

// let number;
//
// while (true) {
//     number = prompt("Please enter an odd number between 1 and 50:");
//
//     if (number % 2 === 0 || number < 1 || number > 50) {
//         continue;
//     }
//
//     break;
// }
//
// console.log("The number is: " + number);
//
// let userInput;
//
// while (true) {
//     userInput = prompt("Please enter an odd number between 1 and 50:");
//
//     if (userInput % 2 !== 0 && userInput >= 1 && userInput <= 50) {
//         break;
//     }
// }
//
// console.log("Number to skip is: " + userInput);
//
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     if (i == userInput) {
//         console.log("Yikes! Skipping number: " + i);
//         continue;
//     }
//     console.log("Here is an odd number: " + i);
// }