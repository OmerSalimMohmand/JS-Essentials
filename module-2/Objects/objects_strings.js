//*** Objects

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person('Omer', 'Mohmand');
// console.log(person1.getFullName());

//____________________________________________________

//*** Object Literals for creating ad hoc objects

const person = {
    firstName: 'Omer',
    lastName: 'Mohmand',
    'middle name': 'Salim',
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.getFullName());
//---Accessing Properties:
console.log(person['middle name']);
const propertyName = 'firstName';
console.log(person[propertyName])

//____________________________________________________

//*** Function Constructor

// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// const person1 = new Person('Omer', 'Mohmand');
// console.log(`Person 1 Detail: ${person1}`);

