//*** Function Closure

// function greet(name){
//     const greeting = "Hello, ";

//     function sayHello(){
//         console.log(greeting + name);
//     }

//     return sayHello;
// }

// const greetJohn = greet("John");
// const greetAlice = greet("Alice");

// greetJohn();
// greetAlice();

//___________________________________________________

//*** A better version

// function greet(language){
//     const greeting = language === "fr" ? "Bonjoure, " : "Hello, ";

//     return function sayHello(name){
//         console.log(greeting + name);
//     }
// }

// const frenchGreet = greet("fr");
// const DefaultGreet = greet("en");

// frenchGreet("Parisa");
// DefaultGreet("John");
// DefaultGreet("Omer");

//___________________________________________________

//*** Outer Function returning Object of two closure functions (Encapsulation with closure)

// function createCounter() {
//     let count = 0; // Private variable
//     return {
//         increment: function () {
//             count++;
//             console.log(`Count: ${count}`);
//         },
//         decrement: function () {
//             count--;
//             console.log(`Count: ${count}`);
//         },
//     };
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.decrement();

//___________________________________________________

//*** Real-World Use Case (Event Listener)

// function attachEventHandler(elementId, message) {
//     document.getElementById(elementId).addEventListener("click", function () {
//         console.log(message); // Closure remembers `message`
//     });
// }

// attachEventHandler("myButton", "Button clicked!");

// Here, the event listener callback function remembers the message variable even after attachEventHandler finishes execution.

//___________________________________________________

//*** Function Currying

// function curriedAdd(a) {
//     return function (b) {
//         return a + b;
//     };
// }

// const addTwo = curriedAdd(2); // Returns a function
// console.log(addTwo(3)); // Output: 5
// console.log(curriedAdd(5)(9)); // Output: 9

//___________________________________________________

//*** Calculating different powers

// function power(exponent){
//     return function (base) {
//         let result = 1;
//         for(let i = 1; i<=exponent; i++)
//             result *= base;
//         return result;
//     }
// }

// let powerofTwo = power(2);
// let powerofFive = power(5);

// console.log(powerofTwo(2) + "   " + powerofFive(2));
// console.log(power(5)(2)) // not well readable as 2^5 

//___________________________________________________

//*** A versatile and more readable version takes base first

function power(base){
    return function (exponent) {
        let result = 1;
        for(let i = 1; i<=exponent; i++)
            result *= base;
        return result;
    }
}

console.log(power(2)(5));
console.log(power(4)(3));

