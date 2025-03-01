// const fruits = ["orange", "banana", "watermelon", "pear", "strawberries"];

// fruits.push("melon", "mango");
// fruits.pop();
// console.log(fruits);

// const deletedItems = fruits.splice(1,3);
// console.log(fruits); // remained items
// console.log(deletedItems); // deleted items

// const recombinedItems = fruits.concat(deletedItems);
// console.log(recombinedItems);

// const deletedItems = fruits.splice(1,3, "pineapple", "apple");
// console.log(fruits);
// console.log(deletedItems);

// const middleFruits = fruits.slice(1, 4);
// console.log(fruits);
// console.log(middleFruits);

//_______________________________________________

const fruits = Array("orange", "banana", "watermelon", "apple", "strawberries");

// fruits.shift();
// console.log(fruits);

// fruits.unshift("mango", "pear");
// console.log(fruits);

// fruits.length = 3;
// console.log(fruits);

const numbers = Array(5, 2, 9, 1, 6);

// numbers.sort((a, b) => a - b);  //if comparison funcion returns positive swap else don't swap
// console.log(numbers);

// numbers.sort((a, b) => b - a);
// console.log(numbers);

// fruits.sort();
// console.log(fruits);

// fruits.sort((a, b) => a.localeCompare(b));
// fruits.sort((a, b) => b.localeCompare(a));
// console.log(fruits);

// const sortAscending = true;
// numbers.sort((a, b) => sortAscending ? a - b : b - a);
// console.log(numbers);

// const people = [
//     {name: 'Omer', age: 25},
//     {name: 'Ali', age: 25},
//     {name: 'Ahmad', age: 23},
//     {name: 'Zahra', age: 18},
//     {name: 'Khalil', age: 20}
// ]

// people.sort((a, b) => a.age - b.age);
// console.log(people);

// Sort by age, but if ages are equal, sort by name
// people.sort((a, b) => a.age === b.age ? a.name.localeCompare(b.name) : a.age - b.age);
// console.log(people);

