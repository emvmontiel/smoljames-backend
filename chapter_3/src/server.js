import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';

const app = express()
const PORT = process.env.PORT || 5000; // Checks if there is a port envirnment variable; if there isn't, it defaults to 5000

const __filename = fileURLToPath(import.meta.url) // Gets file path from the current module's URL
const __dirname = dirname(__filename) // Gets directory name from the file path

// Middleware – allows us to read the body of the incoming network request
app.use(express.json())

app.use(express.static(path.join(__dirname, '../public'))) // Locates public directory; configure Express to serve static assets located in the '../public' folder

// Retrieves HTML file from the /public directory
app.get('/', (req, res) => {
   
    // Allows our code to locate/find files/folders on our device
    // __dirname    > directory
    // public       > folder name
    // index.html   > file name
    res.sendFile(path.join(__dirname, 'public', 'index.html')) 
}) 

// Instead of writing down here all of the endpoints, we can just invoke the following.
// For any route with the /auth path, we just use authRoutes
// We need to import authRoutes because it is another file in a different location
// Takes all the routes defined in the authRoutes and concatenates it on the end of the /auth path 
app.use('/auth', authRoutes)
app.use('/todos', todoRoutes)

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
    console.log(`Click here: http://localhost:${PORT}/`)
})

// console.log("Hello World!")