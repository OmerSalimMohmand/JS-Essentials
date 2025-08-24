// Fetch user data from a fake API
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.status);
    }
    return response.json(); // Parse JSON (returns a promise)
  })
  .then(user => {
    console.log("👤 User Info:");
    console.log("Name:", user.name);
    console.log("Email:", user.email);
    console.log("City:", user.address.city);
  })
  .catch(error => {
    console.error("❌ Fetch error:", error);
  });
