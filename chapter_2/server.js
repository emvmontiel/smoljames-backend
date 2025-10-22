const express = require('express') // this basically imports the express package into our codebase; requires express package so that we can use it all throughout our project
const app = express() // defines or creates the backend application for us
const PORT = 3001 // defines the port number where our server will be listening for incoming requests

app.get('/', (req, res) => {
    console.log('I hit an endpoint!')
    // req.sendStatus(200) // sends a status code of 200 (OK) back to the client
});

// By default, the app.listen() method listens on port 3000
// You can specify a different port by passing a number as an argument, e.g., app.listen(4000); 

console.log('This is a new line')
console.log('This is another line')

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`)) // tells our application to start listening for incoming requests from clients (like web browsers)
