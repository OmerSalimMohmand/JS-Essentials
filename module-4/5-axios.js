// Import axios library in node.js environment
// const { default: axios } = require("axios");
const axios = require("axios");

//--- Using Promise
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((posts) => {
    console.log(posts.data);
  })
  .catch((e) => {
    console.log(e);
  });

//--- Using async/await
async function getPosts() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getPosts();
console.log("Program continues...");
