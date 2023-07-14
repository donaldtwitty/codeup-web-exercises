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


// ----- Warmup July 10, 2023 ----- //
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
// const runners = [
//     { name: "Alice", age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1] },
//     { name: "Bob", age: 28, lapTimes: [55.2, 50.7, 53.3, 52.9] },
//     { name: "Charlie", age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
//     { name: "David", age: 27, lapTimes: [51.4, 50.2, 49.8, 52.3] },
//     { name: "Eve", age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] },
// ];
// function getTopRunners(runnersArray) {
//     let topRunners = [];
//
//     for(let runner of runnersArray) {
//         if (calculateLapTimeAverage(runner.lapTimes) <= 50){
//             topRunners.push(runner);
//         }
//     }
//
//     return topRunners;
// }
//
// function calculateLapTimeAverage(lapTimesArray) {
//     let total = 0;
//     let count = 0;
//     for (let lapTime of lapTimesArray) {
//         total += lapTime;
//         count++;
//     }
//
//     return total / count;
// }
//
// console.log(getTopRunners(runners));
//
// // Expected Output:
// [
//     { name: 'Alice', age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1] },
//     { name: 'Charlie', age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
//     { name: 'Eve', age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] }
// ]
//
//
//
// // BONUS: Each runner in the resulting array should be represented as an
// // object containing only the name and age properties.
//
//
// // Expected Bonus Output:
//     [
//     { name: "Alice", age: 18 },
//         { name: "Charlie", age: 19 },
//         { name: "Eve", age: 17 }
//     ]

// ----- Warmup July 11, 2023 ----- //
// TODO Refactor your code from yesterday's warmup to return just the top runner

// const runners = [
//     {name: "Alice", age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1]},
//     {name: "Bob", age: 28, lapTimes: [55.2, 50.7, 53.3, 52.9]},
//     {name: "Charlie", age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5]},
//     {name: "David", age: 27, lapTimes: [51.4, 50.2, 49.8, 52.3]},
//     {name: "Eve", age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3]},
// ];
//
// function getTopRunner(runnersArray) {
//     let topRunner = null;
//     let fastestTime = Infinity;
//
//     for (let runner of runnersArray) {
//         let avgLapTime = calculateLapTimeAverage(runner.lapTimes);
//         if (avgLapTime < fastestTime) {
//             topRunner = runner;
//             fastestTime = avgLapTime;
//         }
//     }
//     return topRunner;
// }
//
// function calculateLapTimeAverage(lapTimesArray) {
//     let total = 0;
//     let count = 0;
//
//     for (let lapTime of lapTimesArray) {
//         total += lapTime;
//         count++;
//     }
//
//     return total / count;
// }
//
// console.log(getTopRunner(runners));

// Expected output:
// { name: 'Eve', age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] }


/// --- Warmup July 12, 2023 --- ///


// TODO Given the following ARRAY of objects, write a function that LOOPS through the array and console logs the following for each Hogwarts House:
// Name:
// Animal:
// Founder:
// Common Room:
// First and Last Name of at least one house head:


// HINT:
// When you copy the object into IntelliJ, make sure to expand and collapse
// the different properties to get a good idea of what is going on and keep
// from being overwhelmed


// BONUS:
// - Log a random house head each time
// - Throw some traits in there
// - Write a conditional statement to log something special for your favorite house


// const hogwartsHouses = [

//     {
//         "id": "0367baf3-1cb6-4baf-bede-48e17e1cd005",
//         "name": "Gryffindor",
//         "houseColours": "Scarlet and gold",
//         "founder": "Godric Gryffindor",
//         "animal": "Lion",
//         "element": "Fire",
//         "ghost": "Nearly-Headless Nick",
//         "commonRoom": "Gryffindor Tower",
//         "heads": [
//             {
//                 "id": "530da97d-5a83-4ea6-bc15-790edf5b5efc",
//                 "firstName": "Minerva",
//                 "lastName": "McGonagall"
//             },
//             {
//                 "id": "9915c5f8-9177-4f63-bba8-d04387a404f9",
//                 "firstName": "Godric",
//                 "lastName": "Gryffindor"
//             }
//         ],
//         "traits": [
//             {
//                 "id": "1773bce8-7a22-4d57-b8e1-7e1cbe26fa2b",
//                 "name": "Courage"
//             },
//             {
//                 "id": "21f22e43-efd9-4a43-87f5-eab5fb1666ea",
//                 "name": "Chivalary"
//             },
//             {
//                 "id": "60d8f5d0-de4b-41f7-b152-40543555bf3a",
//                 "name": "Nerve"
//             },
//             {
//                 "id": "68f73efc-fae9-4a54-b3e2-04bbe72f5d63",
//                 "name": "Daring"
//             },
//             {
//                 "id": "7e6d321d-fe7d-4c05-8ad7-ddabda83d8cd",
//                 "name": "Determination"
//             },
//             {
//                 "id": "adf83e9f-859b-41c4-947d-b359a05f8f3c",
//                 "name": "Bravery"
//             }
//         ]
//     },
//     {
//         "id": "805fd37a-65ae-4fe5-b336-d767b8b7c73a",
//         "name": "Ravenclaw",
//         "houseColours": "Blue and bronze",
//         "founder": "Rowena Ravenclaw",
//         "animal": "Eagle",
//         "element": "Air",
//         "ghost": "Grey Lady",
//         "commonRoom": "Ravenclaw Tower",
//         "heads": [
//             {
//                 "id": "102ac5fc-db71-4055-8250-bc238cffb3d9",
//                 "firstName": "Filius",
//                 "lastName": "Flitwick"
//             },
//             {
//                 "id": "57c04cf4-f3dd-46d6-a78f-84c30fb42533",
//                 "firstName": "Rowena",
//                 "lastName": "Ravenclaw"
//             }
//         ],
//         "traits": [
//             {
//                 "id": "08a54d21-6137-4eda-9c32-004706650b44",
//                 "name": "Learning"
//             },
//             {
//                 "id": "5056effc-b92b-4f86-96fd-978b26a849da",
//                 "name": "Acceptance"
//             },
//             {
//                 "id": "78db6224-33d1-490d-a553-9bbbedb3282a",
//                 "name": "Inteligence"
//             },
//             {
//                 "id": "ab88a4fb-1c4d-4e14-88bf-7f55dfabb75a",
//                 "name": "Wisdom"
//             },
//             {
//                 "id": "e43d0b2f-dcfe-4a5f-b3ab-d39679bbfbe3",
//                 "name": "Wit"
//             },
//             {
//                 "id": "ffc55017-c03f-490a-9c48-2f38af6e2f0a",
//                 "name": "Creativity"
//             }
//         ]
//     },
//     {
//         "id": "85af6295-fd01-4170-a10b-963dd51dce14",
//         "name": "Hufflepuff",
//         "houseColours": "Yellow and black",
//         "founder": "Helga Hufflepuff",
//         "animal": "Badger",
//         "element": "Earth",
//         "ghost": "Fat Friar",
//         "commonRoom": "Hufflepuff Basement",
//         "heads": [
//             {
//                 "id": "a593e800-95dc-47ab-9243-6ac98d2f6ab4",
//                 "firstName": "Helga",
//                 "lastName": "Hufflepuff"
//             },
//             {
//                 "id": "fab07935-774e-4eb4-8ed5-621bfe416d85",
//                 "firstName": "Pomona",
//                 "lastName": "Sprout"
//             }
//         ],
//         "traits": [
//             {
//                 "id": "22d8bc5b-67ee-49fb-89ee-8811fc22062b",
//                 "name": "Hardworking"
//             },
//             {
//                 "id": "76973c67-0dd1-4aca-b0b7-b053d9eaf206",
//                 "name": "Patience"
//             },
//             {
//                 "id": "a8494f18-caff-491e-96e3-1ff73bd6f4ab",
//                 "name": "Loyalty"
//             },
//             {
//                 "id": "af80b93e-3c61-4586-824a-8f7e6ac4ae0a",
//                 "name": "Just"
//             },
//             {
//                 "id": "c080647f-5b31-434f-8327-376abbfb0989",
//                 "name": "Fairness"
//             },
//             {
//                 "id": "f62f4753-fdb5-473b-a8ac-07c1b5844eec",
//                 "name": "Modesty"
//             }
//         ]
//     },
//     {
//         "id": "a9704c47-f92e-40a4-8771-ed1899c9b9c1",
//         "name": "Slytherin",
//         "houseColours": "Green and silver",
//         "founder": "Salazar Slytherin",
//         "animal": "Serpent",
//         "element": "Water",
//         "ghost": "Bloody Baron",
//         "commonRoom": "Slytherin Dungeon",
//         "heads": [
//             {
//                 "id": "36ba2ceb-6b6f-48a3-b512-9c1e66321eff",
//                 "firstName": "Horace",
//                 "lastName": "Slughorn"
//             },
//             {
//                 "id": "5cac8ad3-b5fc-4c48-a951-990cdd5671bc",
//                 "firstName": "Salazar",
//                 "lastName": "Slytherin"
//             },
//             {
//                 "id": "ef90f8c9-9f03-478e-baec-8a3c487e5271",
//                 "firstName": "Severus",
//                 "lastName": "Snape"
//             }
//         ],
//         "traits": [
//             {
//                 "id": "0992c505-80dd-4b49-ad0b-3b7383d6ec89",
//                 "name": "Resourcefulness"
//             },
//             {
//                 "id": "36dad9bf-010e-47ef-8908-ecb6d5acfac5",
//                 "name": "Selfpreservation"
//             },
//             {
//                 "id": "42b7c304-5e62-4fae-9e52-f8c6a106e406",
//                 "name": "Ambition"
//             },
//             {
//                 "id": "540aaafe-6185-4dc8-94ed-bd0236b433d3",
//                 "name": "Cunning"
//             },
//             {
//                 "id": "d7b7c1b7-3fce-4474-9fd1-9b731e0b2649",
//                 "name": "Pride"
//             },
//             {
//                 "id": "df43d46b-1ebf-409d-a63e-6c6bcb049aef",
//                 "name": "Determination"
//             }
//         ]
//     }
// ]


// function logHogwartsHouses(hogwartsHouses) {
//     hogwartsHouses.forEach((house) => {
//         console.log(`
//             Hogwarts House: ${house.name}
//             Animals: ${house.animal}
//             Founder: ${house.founder}
//             `)
//     });
// }
//
// logHogwartsHouses(hogwartsHouses);


// function logHogwartsHouses() {
//     for (let house of hogwartsHouses) {
//         console.log(`House Name: ${house.name}`);
//         console.log(`House Animal: ${house.animal}`);
//         console.log(`House Founder: ${house.founder}`);
//         console.log(`House Common Room: ${house.commonRoom}`);
//         console.log(`House Heads: ${house.heads[0].firstName} ${house.heads[0].lastName}, ${house.heads[1].firstName} ${house.heads[1].lastName}`);
//     }
// }
//
// logHogwartsHouses();


// ----- warmup july 14 2023 ----- //

// TODO Write a function called removeEvens that takes an array of numbers and removes any even number from the array

// Examples:

// Input: [1, 3, 2, 13, 74, 33]
// Expected Output: [1, 3, 13, 33]

// Input: [62, 3, 2, 8, 531, 7]
// Expected Output: [3, 531, 7]

function removeEvens() {
    let
        return
}