const express = require('express'); // this basically imports the express package into our codebase; requires express package so that we can use it all throughout our project
const app = express(); // defines or creates the backend application for us
const PORT = 3000; // defines the port number where our server will be listening for incoming requests

console.log('Hello from Express.js'); // logs a message to the console to indicate that the server is running  

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`)); // tells our application to start listening for incoming requests from clients (like web browsers)

// By default, the app.listen() method listens on port 3000
// You can specify a different port by passing a number as an argument, e.g., app.listen(4000); 