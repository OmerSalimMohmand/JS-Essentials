// *** Function Closure

function greet(name){
    const greeting = "Hello, ";

    function sayHello(){ 
        console.log(greeting + name);
    }

    return sayHello;
}

const greetJohn = greet("John");
const greetAlice = greet("Alice");

greetJohn();
greetAlice();

// ___________________________________________________

// *** A better version

function greet(language){
    const greeting = language === "fr" ? "Bonjoure, " : "Hello, ";

    return function sayHello(name){ //function name sayHello is optional here
        console.log(greeting + name);
    }
}

const frenchGreet = greet("fr");
const DefaultGreet = greet("en");

frenchGreet("Parisa");
DefaultGreet("John");
DefaultGreet("Omer");

// ___________________________________________________

// *** Outer Function returning Object of two closure functions (Encapsulation with closure)

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

___________________________________________________

// *** Real-World Use Case (Event Listener)

function attachEventHandler(elementId, message) {
    document.getElementById(elementId).addEventListener("click", function () {
        console.log(message); // Closure remembers `message`
    });
}

attachEventHandler("myButton", "Button clicked!");

Here, the event listener callback function remembers the message variable even after attachEventHandler finishes execution.

___________________________________________________

// *** Function Currying

function curriedAdd(a) {
    return function (b) {
        return a + b;
    };
}

const addTwo = curriedAdd(2); // Returns a function
console.log(addTwo(3)); // Output: 5
console.log(curriedAdd(5)(9)); // Output: 9

// --- A chain implementation of CurriedAdd

console.log(curriedAdd(4)(5));
console.log(curriedAdd(6)(curriedAdd(4)(5)));
console.log(curriedAdd(7)(curriedAdd(6)(curriedAdd(4)(5))));

___________________________________________________

// *** Calculating different powers

function power(exponent){
    return function (base) {
        let result = 1;
        for(let i = 1; i<=exponent; i++)
            result *= base;
        return result;
    }
}

let powerofTwo = power(2);
let powerofFive = power(5);

console.log(powerofTwo(2) + "   " + powerofFive(2));
console.log(power(5)(2)) // not well readable as 2^5 

___________________________________________________

// *** A versatile and more readable version takes base first

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

// ___________________________________________________

// *** Curried multiplier function

const multiply = a => b => a * b;

const double = multiply(2); // doubling is in fact a multiplier function with one arg preset as 2.
const triple = multiply(3);

console.log(double(5));
console.log(triple(5));

// ___________________________________________________

// *** Currying Using Function.bind

function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2)
console.log(double(4));

// ___________________________________________________

// *** Making the b parameter optional by assigning it a default value

function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(4));
console.log(multiply(4, 3));

//___________________________________________________

//*** Curried function to calculate total price including tax

const calTotalPrice = (rate) => (price) => (price + price * rate).toFixed(2);

// Pre-configured functions which presets some arguments and pass functions around with some arguments pre-filled.
const USATPrice = calTotalPrice(0.07); // 7% tax for USA
const CanadaTPrice = calTotalPrice(0.05); // 5% tax for Canada
const EuropeTPrice = calTotalPrice(0.2); // 20% tax for Europe

// Use the pre-configured functions
console.log(`USA Tota Price: $${USATPrice(100)}`); // $107.00
console.log(`Canada Total Price: $${CanadaTPrice(100)}`); // $105.00
console.log(`Europe Total Price: $${EuropeTPrice(100)}`); // $120.00

//___________________________________________________

//*** Real-Life Application: prices come from the user's shopping cart and their location determines the tax

const calTotalPrice = (taxRate) => (price) => price + price * taxRate;

const regionTaxRates = {
    USA: 0.07,
    Canada: 0.05,
    Europe: 0.2,
};

const cart = [100, 200, 300];
const userRegion = "Canada";

const calTPrice = calTotalPrice(regionTaxRates[userRegion]);

// Create/Return a new array by applying taxCalculator function to each element of the cart
const cartWithTax = cart.map(calTPrice);

console.log(`Cart with tax: $${cartWithTax}`);

//---To mutate the original array as well as return the new array
const cart = [100, 200, 300];

const cartWithTax = cart.map((price, index, arr) => { //price argument is a copied value of the the cart element, not a reference for it for the direct mutation.
  arr[index] = price + price * 0.05;  // ✅ mutate original array
  return arr[index];                  // ✅ return updated value
});

console.log("Cart:", cart);
console.log("Cart with Tax:", cartWithTax);
