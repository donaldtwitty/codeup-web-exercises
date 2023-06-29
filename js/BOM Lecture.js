"use strict";

/*
    ================================= BROWSER OBJECT MODEL (BOM)

    BOM = hierarchy of objects that make up the browser

    Highest level object: window object

    Main objects nested within the window object:

        document  - a tree of elements of the current page
        navigator - info about the browser itself
        location  - info about the current url
        history   - history of visited url with methods to traverse history
        screen    - info about the current browser dimensions

        additional information: https://www.w3schools.com/js/js_ex_browser.asp

    Important methods within the window object:
        Dialogue functions: alert(), confirm(), prompt()
        setInterval() - starts an interval that can execute a repeated process
        setTimeout() - starts a timer after which a process may execute

    Location object:

        Redirect to another page or reload the current page

*/



/*
    ================================= setInterval()

    Set interval method:

    Real world application:
        slide show animation
        music sequencer
        AJAX requests

    ** see example **
*/

// function sayHello() {
//     console.log("Justin Reich");
// }
//
// let intervalId = setInterval(sayHello, 3000);

// function sayHello() {
//     console.log("Donald Twitty", new Date().toLocaleString());
// }
//
// let intervalId = setInterval(sayHello, 2000);
//
// alert(setInterval());


// create interval to say howdy 10 times

// let interval = 200;
// let i = 1;
//
// let intervalId = setInterval(function(){
//     if (i === 10) {
//         clearInterval(intervalId);
//     }
//     console.log("Howdy!!!");
//     ++i;
// }, interval);
//
// console.log(intervalId);


/*
    ================================= setTimeout()

        Real world application:

        session time out (online banking)
        pop up window  -  https://ambitionally.com/popupally/sample-time/
*/
 // setTimeout(() => {
 //     console.log('Hello');
 // }, 2_000);

// create pop up ad after 3 seconds

// let x;
// let wait = 2_000; /*in milliseconds, so 2 seconds*/
//
// let timeoutId = setTimeout(function() {
//     alert("You WON $1,000,000.00!!!!");
//     x = 23;
//     console.log("The value of x is: " + x);
// }, wait);
//
//
// // asynchronous errors
//    console.log(x);




// ================================= Location object

// Redirect

// window.location = "https://www.google.com";


// Reload page

// location.reload();
// location.reload(true);


