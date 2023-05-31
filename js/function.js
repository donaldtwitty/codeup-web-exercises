"use strict"
// function sayHello(){
//     console.log("wassup")
// }
// sayHello();
//
// function buhbye(){
//     console.log("byebye")
// }
// buhbye();
//
// // function with parameter
// function sayHelloUser(usersUsername){
//     console.log("wassup" + usersUsername)
// }



// //Global scope example
// const username = "bobby";
// function sayBye(){
//     console.log("You will always see me " + username);
// }
// sayBye();
// console.log(username)


//Local scope example
// function sayBye(){
//     const username = "bobby"
//     console.log("You will always see me " + username);
// }
// sayBye();


// function addFourDivideByTwo(num){
//     const sum = num + 4;
//     const dividedByTwo = divideByTwo(sum);
//     return dividedByTwo
// }
//
// function divideByTwo(num){
//     return num / 2;
// }
//
// console.log(addFourDivideByTwo(5));


// function sayHello() {
//     return "Hi"
// }

// console.log(sayHello());

// //function declaration
// function sayHello(){
//     console.log("hello")
// }
// sayHello();

//function expression
// const sayHello = function (){
//     console.log()
//     ***not finished***
// }
// // arrow function
// const sayHello = () => {console.log("Hello")};
// sayHello();

//Immediately-Invoked Function Expression (IIFE)
//     Immediately when the page loads
//     (function (){
//         const name = "Isaac";
//         sayBye(name);
//     }) ()