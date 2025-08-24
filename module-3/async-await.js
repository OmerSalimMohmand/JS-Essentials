async function getUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json(); // also returns a Promise
      console.log("Users data:", users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  
  getUsers();
  console.log("Program is still running...");
  