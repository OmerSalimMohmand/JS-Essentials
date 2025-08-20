// const fruits = ["orange", "banana", "watermelon", "pear", "strawberries"];

// fruits.push("melon", "mango");
// fruits.pop();
// console.log(fruits);

// const deletedItems = fruits.splice(1,3);
// console.log(fruits); // remained items
// console.log(deletedItems); // deleted items

// const deletedElements = fruits.splice(0, 2);
// cars.unshift(...deletedElements)
// console.log(fruits);
// console.log(deletedElements)

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

// numbers.sort((a, b) => a - b);  //Arguments order (a, b) matters. if comparison funcion returns positive swap else don't swap
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

//*** Array Methods:

// const users = [
//     {name: 'Omer', email: 'omer@gmail.com', age: 30},
//     {name: 'Lima', email: 'lima@yahoo.com', age: 45},
//     {name: 'Yama', email: 'yama@hotmail.com', age: 34},
//     {name: 'Ali', email: 'ali@outlook.com', age: 36}
// ];
// const user_emails = users.map((user) => user.email);
// console.log(user_emails)

// const minAge = 34;
// const maxAge = 36;

// const eligible_users = users.filter((user) => user.age >= minAge && user.age <= maxAge);
// console.log(eligible_users);

// const eligible_users = users.filter((user) => user.age >= minAge && user.age <= maxAge).map(eu => eu.name)
// console.log(eligible_users);

// const orderPrices = [40, 20, 50, 10];
// const totalPrice = orderPrices.reduce((total, price) => total + price, 0);
// console.log(totalPrice);

// const employees = [
//     { id: 1, name: 'Alice', Eid: 'EMP001', 'Contact details': 'alice@example.com', Role: 'Manager', Designation: 'Project Manager', Experience: '5 years' },
//     { id: 2, name: 'Bob', Eid: 'EMP002', 'Contact details': 'bob@example.com', Role: 'Engineer', Designation: 'Software Engineer', Experience: '3 years' },
//     { id: 3, name: 'Charlie', Eid: 'EMP003', 'Contact details': 'charlie@example.com', Role: 'Analyst', Designation: 'Data Analyst', Experience: '2 years' },
// ];

// const employee = employees.find((e) => e.id === 2);
// console.log(`Details of the employee\nname: ${employee.name}\nEid: ${employee.Eid}\nContact details: ${employee['Contact details']}\nRole: ${employee.Role}\nDesignation: ${employee.Designation}\nExperience: ${employee.Experience}`);
