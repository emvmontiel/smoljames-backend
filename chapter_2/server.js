const express = require('express'); // imports the express package
const app = express(); // creates an express app instance; creates the backend application for us
const PORT = 3001; // port for the server to listen on

app.get('/', (req, res) => {
    console.log('I hit an endpoint!', req.method); // logs to console when the endpoint is hit
    res.status(201).send(`<a href='/dashboard'>Dashboard</a>
        <a href='/settings'>Settings</a>`); // sends an HTTP status code of 201 back to the client
});

app.get('/dashboard', (req, res) => {
    console.log('I hit another endpoint!'); // logs to console when the endpoint is hit
    res.send(`Good day, what's your name?
        <a href='/'>Home</a>
        <a href='/settings'>Settings</a>`
    ); // sends an HTTP status code of 200 back to the client
});

app.get('/settings', (req, res) => {
    console.log('I hit one. I am on fire today!');
    res.send(`<h1>this is html code</h1>
        <a href='/'>Home</a>
        <a href='/dashboard'>Dashboard</a>`
    );
});

// Start listening on the specified port
app.listen(PORT, () => console.log(`Server has started on: http://localhost:${PORT}`));
