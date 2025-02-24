// //*** Function Closure

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

// //*** A better version

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

//*** Outer Function returning Object of two closure functions (Encapsulation)

function createCounter() {
    let count = 0; // Private variable
    return {
        increment: function () {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function () {
            count--;
            console.log(`Count: ${count}`);
        },
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();

