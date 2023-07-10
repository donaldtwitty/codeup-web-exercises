// ============================= WARM UP June 20, 2023
// Write a function, returnUserObject, that takes in three String arguments: a username, password, and email. The function should return a user object with username, password and email properties.
//
// returnUserObject('jreich', 'password123', 'jreich@email.com') // returns...
//
//     {
//         username: 'jreich',
//         password: 'password123',
//         email: 'jreich@email.com'
//     }
//
// Assume all inputs are non-empty strings. The order of the properties on the object output do not matter but the order of the INPUTS do matter.

// function returnUserObject(username, password, email) {
//     return {
//         username: username,
//         password: password,
//         email: email,
//     }
// }
//
// console.log(returnUserObject('jreich', 'password123',  'jreich@email.com'));


// ================================= WARM UP June 21, 2023
// Create a function, returnProduct, that takes in an array of numbers and returns the product of all the numbers.
//     Assume all element in the input array are valid numbers. Assume all array inputs have at least 1 number.
// returnProduct([1, 2, 3]) // returns 1 * 2 * 3 = 6
// returnProduct([3, 3, 3]) // returns 3 * 3 * 3 = 27
// returnProduct([4, 1, 2]) // returns 4 * 1 * 2 = 8
// returnProduct([4, 0, 2]) // returns 4 * 0 * 2 = 0
// returnProduct([5, 3, 2]) // returns 5 * 3 * 2 = 30

// function returnProduct(nums) {
//     let product = 1;
//     for (let num of nums) {
//         product *= num;
//     }
//     return product;
// }
//
// console.log(returnProduct([1, 2, 3]), 6); // returns 1 * 2 * 3 = 6
// console.log(returnProduct([3, 3, 3]), 27); // returns 3 * 3 * 3 = 27
// console.log(returnProduct([4, 1, 2]), 8); // returns 4 * 1 * 2 = 8
// console.log(returnProduct([4, 0, 2]), 0); // returns 4 * 0 * 2 = 0
// console.log(returnProduct([5, 3, 2]), 30); // returns 5 * 3 * 2 = 30


// ================================= WARM UP
//
// Create a function, returnTotalSales, that takes in an array of sales data objects and returns the sum of all
// totalItemsSold properties. Assume all elements in the input array are valid sales data objects with a totalItemsSold
// property.
//
//     EXAMPLE...

// function returnTotalSales(salesDate){


// const salesData = [
//     { //index 0
//         month: 'January',
//         totalItemsSold: 0
//     },
//     { //index 1
//         month: 'February',
//         totalItemsSold: 5
//     },
//     { //index 2
//         month: 'March',
//         totalItemsSold: 2
//     },
//     { //index 3
//         month: 'April',
//         totalItemsSold: 10
//     },
//     { //index 4
//         month: 'May',
//         totalItemsSold: 30
//     }
// ];
//
// const total = salesData[0].totalItemsSold +
//     salesData[1].totalItemsSold +
//     salesData[2].totalItemsSold +
//     salesData[3].totalItemsSold +
//     salesData[4].totalItemsSold;
//
// console.log(total);
//
// // returnTotalSales(salesData) // returns 47
//
// console.log(salesData[3].totalItemsSold);


// ================================= WARM UP
//
// Create a function, returnAvgSales, that takes in an array of sales data objects and returns the average of all
// total items sold. Assume all elements in the input array are valid sales data objects with a totalItemsSold
// property. If the array is empty, return 0. If the array has one element, return the value of the totalItemsSold.
//
// function returnTotalSales(salesData) {
//
// }
//
// //     EXAMPLE...
// function returnAvgSales(salesData) {
//     return returnTotalSales(salesData)/salesData.length;
//
// }
//
// const salesData = [
//     {
//         month: 'January',
//         totalItemsSold: 0
//     },
//     {
//         month: 'February',
//         totalItemsSold: 5
//     },
//     {
//         month: 'March',
//         totalItemsSold: 2
//     },
//     {
//         month: 'April',
//         totalItemsSold: 10
//     },
//     {
//         month: 'May',
//         totalItemsSold: 30
//     }
// ];
//
// returnAvgSales(salesData) // returns 9.4
//
// console.log(returnAvgSales(salesData), 9.4);


// ================================= WARM UP
//
// Create a function, returnAdmins, that takes in an array of user objects
// and returns an array of only the admin user objects. Assume the array
// has at least one user object and all elements have an isAdmin property.
//
//     Example:

// function returnAdmins(users) {
//     const admins = [];
//     for (let i = 0; i < users.length; i += 1){
//         if (users[i].isAdmin) {
//             admins.push(users[i].username);
//         }
//     }
//     return admins;
//
// }
//
// const users = [
//
//     {
//         username: 'fred123',
//         password: 'letmein',
//         email: 'fred123@email.com',
//         isAdmin: true
//     },
//     {
//         username: 'cindy123',
//         password: 'hello123',
//         email: 'cindy123@email.com',
//         isAdmin: false
//     },
//     {
//         username: 'kathy123',
//         password: 'letmein',
//         email: 'kathy123@email.com',
//         isAdmin: true
//     },
//     {
//         username: 'kyle123',
//         password: 'letmein',
//         email: 'kyle123@email.com',
//         isAdmin: false
//     }
// ]
//
// console.log(returnAdmins(users),users);

/*

returnAdmins(users) returns...

[

    {
        username: 'fred123',
        password: 'letmein',
        email: 'fred123@email.com',
        isAdmin: true
    },
    {
        username: 'kathy123',
        password: 'letmein',
        email: 'kathy123@email.com',
        isAdmin: true
    }
]

*/

// ================================= WARM UP
//
// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable.
//     If the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.
// The function should return true if the neighborhood object is desirable and false otherwise.

// example data...

// function neighborhoodObject(neighborhood) {
//     // console.log(neighborhood.medianHomePrice);
//     // console.log(neighborhood.crimeRate);
//     // console.log(neighborhood.schools);
//
//     const isRightPrice = neighborhood.medianHomePrice < 300_000;
//     const isRightCrimeRate = neighborhood.crimeRate === 'low';
//     const isRightSchoolRating = neighborhood.schools >=24;
//
//     const isDesirable = isRightPrice && isRightCrimeRate && isRightSchoolRating;
//
//     return isDesirable;
//
// }
//
//     const neighborhood1 = {
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280_000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: 22
// };
//
// const neighborhood2 = {
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270_000,
//     pool: true,
//     tennis: false,
//     crimeRate: "high",
//     schools: 24
// }
//
// const neighborhood3 = {
//     neighborhood: "Oak Mountain",
//     medianHomePrice: 290_000,
//     pool: false,
//     tennis: false,
//     crimeRate: "low",
//     schools: 24
// }
//
// const neighborhood4 = {
//     neighborhood: "Ginormous Acres",
//     medianHomePrice: 350_000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: 27
// }
//
//
// console.log(neighborhoodObject(neighborhood1), false);
// console.log(neighborhoodObject(neighborhood2), false);
// console.log(neighborhoodObject(neighborhood3), true);
// console.log(neighborhoodObject(neighborhood4), false);


// ================================= WARM UP


// Write a function, returnLargestStudentCount, that takes in an array of classes returns the number of students in the largest class.
// Assume at least one class object will be present in the input array with students property set to a valid positive integer.

// function returnLargestStudentCount () {
//
// }
//
//     let classes = [
//     {class: "6th grade history", students: 18},
//     {class: "7th grade history", students: 20},
//     {class: "8th grade history", students: 22},
//     {class: "4th grade history", students: 30},
//     {class: "10th grade history", students: 25}
// ];
//
// let highestStudentCount = 0;
// for (let i = 0; i < classes.length; i += 1) {
//     if (highestStudentCount < classes[i].students){
//         highestStudentCount = classes[i].students;
//     }
//     // console.log(classes[i].students);
// }
//
// returnLargestStudentCount(classes) // returns 30
//
// console.log(highestStudentCount);

// ----- Warm Up July 5th -----
// 1. Create a function that prints 1 to 100.

// let i
// for (i = 1; i <= 100; i += 1) {
//     console.log(1);
// }


// 2. Create a function, fizzBuzz, that prints out all numbers from 1 to 100 but instead of printing
// numbers that are evenly divisible by 3, print 'fizz' and any numbers evenly divisible
// by 5, print 'buzz'. For any numbers that are evenly divisible by 3 AND 5, print 'fizzbuzz'.

// function fizzBuzz() {
//     for (let i = 1; i <= 100; i += 1) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz');
//         } else if (i % 5 === 0) {
//             console.log('buzz');
//         } else if (i % 3 === 0) {
//             console.log('fizz');
//         } else {
//             console.log(i);
//         }
//     }
// }



// fizzBuzz() // prints...
/*
1
2
'fizz'
4
'buzz'
'fizz'
7
8
'fizz'
'buzz'
11
'fizz'
13
14
'fizzbuzz'
etc...

*/




// You are given an array of runner objects, where each object represents a
// runner with properties name, age, and lapTimes (in seconds). Write a
// function called getTopRunners that takes the runners array as input and
// returns an array of top runners. A runner is considered top if their
// average lap time is 50 seconds or faster. If there are no top runners in
// the input array, the function should return an empty array


// HINT: You might want to create a function called calculateLapTimeAverage
// that takes in an array of numbers and returns the average

/*WRONG
function getTopRunners(runnersArray){
    let getTopRunners;
    if (getTopRunners <= lapTimes) {
        return runners;
    }

    let lapTimes;
    if (lapTimes <= 50) {
        return lapTimes;
    }
}
*/

// Input:
const runners = [
    { name: "Alice", age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1] },
    { name: "Bob", age: 28, lapTimes: [55.2, 50.7, 53.3, 52.9] },
    { name: "Charlie", age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
    { name: "David", age: 27, lapTimes: [51.4, 50.2, 49.8, 52.3] },
    { name: "Eve", age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] },
];
function getTopRunners(runnersArray) {
    let topRunners = [];

    for(let runner of runnersArray) {
        if (calculateLapTimeAverage(runner.lapTimes) <= 50){
            topRunners.push(runner);
        }
    }

    return topRunners;
}

function calculateLapTimeAverage(lapTimesArray) {
    let total = 0;
    let count = 0;
    for (let lapTime of lapTimesArray) {
        total += lapTime;
        count++;
    }

    return total / count;
}

console.log(getTopRunners(runners));

// Expected Output:
[
    { name: 'Alice', age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1] },
    { name: 'Charlie', age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
    { name: 'Eve', age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] }
]



// BONUS: Each runner in the resulting array should be represented as an
// object containing only the name and age properties.


// Expected Bonus Output:
    [
    { name: "Alice", age: 18 },
        { name: "Charlie", age: 19 },
        { name: "Eve", age: 17 }
    ]