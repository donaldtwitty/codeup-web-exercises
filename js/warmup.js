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

function returnProduct(nums) {
    let product = 1;
    for (let num of nums) {
        product *= num;
    }
    return product;
}

console.log(returnProduct([1, 2, 3]), 6); // returns 1 * 2 * 3 = 6
console.log(returnProduct([3, 3, 3]), 27); // returns 3 * 3 * 3 = 27
console.log(returnProduct([4, 1, 2]), 8); // returns 4 * 1 * 2 = 8
console.log(returnProduct([4, 0, 2]), 0); // returns 4 * 0 * 2 = 0
console.log(returnProduct([5, 3, 2]), 30); // returns 5 * 3 * 2 = 30