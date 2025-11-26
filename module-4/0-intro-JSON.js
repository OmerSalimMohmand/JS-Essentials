// const personJSON = {
//   "name": "John Doe",
//   "age": 30,
//   "email": "john@example.com",
//   "address": {
//     "street": "123 Main St",
//     "city": "Anytown",
//     "country": "USA"
//   },
//   "tags": ["JavaScript", "Node.js", "Web Development"],
//   "isStudent": false,
//   "workExperience": null
// };

// // console.log(personJSON)
// const jsonString = JSON.stringify(personJSON);
// console.log(jsonString);


// const github_user = {
//     username: "OmerSalimMohmand",
//     email: "omersalim.tech@gmail.com"
// }
// const jsonString = JSON.stringify(github_user);
// console.log(jsonString);

const jsonString = '{"username":"omersalim", "email":"omersalim.tech@gmail.com"}';
const user = JSON.parse(jsonString);

console.log(user)