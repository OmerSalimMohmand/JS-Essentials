//--- using vanila xhr

const xhr = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/postss";

xhr.open("GET", url, true);
xhr.responseType = "json";

xhr.onload = () => {
  // check for success status (200-299)
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log(xhr.response);
  } else {
    console.log(new Error(`HTTP Error: ${xhr.status} ${xhr.statusText}`));
  }
};

xhr.onerror = () => {
  reject(new Error("Network Error or Request Failed"));
};

xhr.send();

// --- using xhr with Promises for Async operation
const getPromise = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  const url = "https://jsonplaceholder.typicode.com/postss";

  xhr.open("GET", url, true);
  xhr.responseType = "json";

  xhr.onload = () => {
    // check for success status (200-299)
    if (xhr.status >= 200 && xhr.status < 300) {
      resolve(xhr.response);
    } else {
      reject(new Error(`HTTP Error: ${xhr.status} ${xhr.statusText}`));
    }
  };

  xhr.onerror = () => {
    reject(new Error("Network Error or Request Failed"));
  };

  xhr.send();
});

getPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Promise Rejected::", error);
  });

//---using fetch api that works on promises under the hood. It returns a promise enabling us
// to execute further steps asynchronously using a then-catch chain
const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
  .then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//---using fetch with async-await
const url = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
  try {
    const response = await fetch(url);
    //   console.log(response);
    //To handle 404 error
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const posts = await response.json();
    console.log(posts);
  } catch (e) {
    console.log(e);
  }
}
getPosts();
console.log("Program is still running...");

//---Using axios with promises
const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/posts/1";

axios
  .get(url) //axios get method throws both network as well as server errors
  .then((response) => {
    // console.log(response);
    console.log(response.data);
  })
  .catch((e) => {
    console.log("Error:::", e);
  });

//---Using axios with async-await
const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/postss/";
async function getPost(id) {
  try {
    const post = await axios.get(url + id);
    console.log(post.data);
  } catch (e) {
    console.log("Error:::", e.code);
  }
}

getPost(1);
console.log("Program continues...");
