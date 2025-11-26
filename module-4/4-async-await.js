async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); // returns a Promise
    const users = await response.json(); // also returns a Promise
    console.log("Users Data:\n", users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

getUsers();
console.log("Program is still running...");
