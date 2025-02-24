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

//*** A better version

function greet(language){
    const greeting = language === "fr" ? "Bonjoure, " : "Hello, ";

    return function sayHello(name){
        console.log(greeting + name);
    }
}

const frenchGreet = greet("fr");
const DefaultGreet = greet("en");

frenchGreet("Parisa");
DefaultGreet("John");
DefaultGreet("Omer");