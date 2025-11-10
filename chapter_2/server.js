const express = require('express'); // imports the express package
const app = express(); // creates an express app instance; creates the backend application for us
const PORT = 3001; // port for the server to listen on

let data = ['estelle'];

// Middleware
app.use(express.json()); // configures our server to expect json data as an incoming request

app.get('/', (req, res) => {
    console.log('I hit an endpoint!', req.method); // logs to console when the endpoint is hit
    res.status(201); // sends an HTTP status code of 201 back to the client
    res.send(`
        <body style="background:green; color:white;">
            <h1>DATA:</h1>
            <p>${JSON.stringify(data)}</p>
            <a href='/dashboard'>Dashboard</a>
            <a href='/settings'>Settings</a> 
        </body>
        `)
});

app.post('/api/data', (req, res) => {
    const newData = req.body;
    res.sendStatus(201);
    console.log(newData)
    data.push(newData.name)
})

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

app.get('/api/data', (req, res) => {
    console.log('This endpoint is for data.')
    res.send(data)
});

app.delete('/api/data', (req, res) => {
    // data.pop();
    const x = data.pop();
    console.log("Popped " + x);
    console.log(data);
    res.sendStatus(201);
})

// Start listening on the specified port 
app.listen(PORT, () => console.log(`Server has started on: http://localhost:${PORT}`));
