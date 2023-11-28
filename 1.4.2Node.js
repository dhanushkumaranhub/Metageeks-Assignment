
Node.js API Integration (5 points):

● Create a Node.js function that fetches data from an external API (e.g.,
JSONPlaceholder) and returns a list of users along with their posts.


  Node.js function that fetches data from an external API and returns a list of users along with their posts, you can use the axios library for making HTTP requests

npm install axios

js:

const axios = require('axios');

// Fetch data from the JSONPlaceholder API
const fetchData = async () => {
  try {
    // Fetch users
    const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = usersResponse.data;

    // Fetch posts
    const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = postsResponse.data;

    // Combine users and posts based on user id
    const usersWithPosts = users.map((user) => {
      const userPosts = posts.filter((post) => post.userId === user.id);
      return { ...user, posts: userPosts };
    });

    return usersWithPosts;
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
    throw error;
  }
};

// Example usage: Fetch and log user data with posts
fetchData()
  .then((usersWithPosts) => {
    console.log(usersWithPosts);
  })
  .catch((error) => {
    console.error('Failed to fetch data:', error);
  });




......................................................................................................................................................

Explanation:

Axios Library:
The script uses the axios library to make HTTP requests to the JSONPlaceholder API.
  
Fetch Data Function:
The fetchData function uses axios.get to fetch users and posts from the JSONPlaceholder API.
It then combines users and posts based on the user id to create a list of users with their posts.
  
Error Handling:
The script includes error handling to log and handle any errors that may occur during the data fetching process.
  
Example Usage:
An example usage is provided, where the fetchData function is called, and the resulting data (users with posts) is logged to the console











