//--- Using Promise

const { default: axios } = require("axios");

// const axios = require('axios');

// axios.get('https://jsonplaceholder.typicode.com/posts')
// .then((posts)=>{
//     console.log(posts.data);
// })
// .catch((e)=>{
//     console.log(e)
// })

//--- Using async/await

async function getPosts() {
    try {

        // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        // const posts = await response.json()
        // console.log('Response:', posts);

      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log('Response:', response.data);


    } catch (error) {
      console.error('Error:', error);
    }
  }

getPosts();
console.log("Program continuous...!");