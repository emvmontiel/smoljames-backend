import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

const app = express()
const PORT = process.env.PORT || 5000; // Checks if there is a port envirnment variable; if there isn't, it defaults to 5000

const __filename = fileURLToPath(import.meta.url) // Gets file path from the current module's URL
const __dirname = dirname(__filename) // Gets directory name from the file path

// Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, '../public'))) // Locates public directory; configure Express to serve static assets located in the '../public' folder

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
}) 


app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
    console.log(`Click here: http://localhost:${PORT}/`)
})

// console.log("Hello World!")