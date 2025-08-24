const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
.then((posts)=>{
    console.log(posts.data);
})
.catch((e)=>{
    console.log(e)
})