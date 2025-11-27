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

//***Notes
// await halts the execution for the promise response and throws a synchronous exception to be caught
// by the try-catch synchronous error handling
// fetch method only throws network errors, not server errors. If the server responds, even with
// an HTTP error status like: 404 Not Found (due to the wrong URL path) 500 Internal Server Error
// the fetch Promise resolves successfully. The resolved response object simply has its response.ok
// property set to false and its response.status set to the error code.
