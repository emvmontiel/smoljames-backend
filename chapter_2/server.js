const express = require('express'); // imports the express package
const app = express(); // creates an express app instance
const PORT = 3001; // port for the server to listen on

app.get('/', (req, res) => {
    console.log('I hit an endpoint!', req.method); // logs to console when the endpoint is hit
    res.sendStatus(201); // sends an HTTP status code of 200 back to the client
});

app.get('/dashboard', (req, res) => {
    console.log('I hit another endpoint!'); // logs to console when the endpoint is hit
    res.send(`Good day, what's your name?`); // sends an HTTP status code of 200 back to the client
});

// Start listening on the specified port
app.listen(PORT, () => console.log(`Server has started on: http://localhost:${PORT}`));

