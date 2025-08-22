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

// const person = {
//     firstName: 'Omer',
//     lastName: 'Mohmand',
//     'middle name': 'Salim',
//     getFullName: function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// console.log(person.getFullName());
// //---Accessing Properties:
// console.log(person['middle name']);
// const propertyName = 'firstName';
// console.log(person[propertyName]);

// console.log(person.firstName);
// console.log(person["firstName"])
// console.log(person.getFullName())
// console.log(person['getFullName']());

//____________________________________________________

//*** Function Constructor

// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// const person1 = new Person('Omer', 'Mohmand');
// console.log(`Person 1 Detail: ${person1}`);

// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;

//     this.getFullName = function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const p1 = new Person("Omer", "Salim");
// console.log(p1.getFullName());

//____________________________________________________

//*** Filter, Map, Find

// const students = [
//     {name: "Omer", age: 30},
//     {name: "Ali", age: 25},
//     {name: "Rizwan", age: 18},
//     {name: "Farzad", age: 19},
//     {name: "Parwin", age: 20}
// ];

// const adults = students.filter(student => student.age >= 20)
// console.log(adults);

// const nameAge = students.map(student => `${student.name} (${student.age})`);
// console.log(nameAge);

// const student = students.find(student => student.name === "Farzad");
// console.log(student);

//____________________________________________________

//*** Nested Objects and Arrays

const student1 = {
    name: 'Omer',
    age: 30,
    skills: ['JavaScript', 'React', 'Node'],
    projects: [
        {title: 'Project A', completed: true},
        {title: 'Project B', completed: false},
        {title: 'Project C', completed: true},
    ]
};

console.log(`${student1.name} is proficient in ${student1.skills[0]}`);
console.log(`Completed projects: ${(student1.projects.filter(project => project.completed)).map(completed_project => completed_project.title)}`);
