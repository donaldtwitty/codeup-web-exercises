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

function returnAdmins(users) {
    const admins = [];
    for (let i = 0; i < users.length; i += 1){
        if (users[i].isAdmin) {
            admins.push(users[i].username);
        }
    }
    return admins;

}

const users = [

    {
        username: 'fred123',
        password: 'letmein',
        email: 'fred123@email.com',
        isAdmin: true
    },
    {
        username: 'cindy123',
        password: 'hello123',
        email: 'cindy123@email.com',
        isAdmin: false
    },
    {
        username: 'kathy123',
        password: 'letmein',
        email: 'kathy123@email.com',
        isAdmin: true
    },
    {
        username: 'kyle123',
        password: 'letmein',
        email: 'kyle123@email.com',
        isAdmin: false
    }
]

console.log(returnAdmins(users),users);

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