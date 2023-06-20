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

function returnUserObject(username, password, email) {
    return {
        username: username,
        password: password,
        email: email,
    }
}

console.log(returnUserObject('jreich', 'password123',  'jreich@email.com'));