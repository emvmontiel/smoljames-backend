import express from 'express'

const app = express()
const PORT = process.env.PORT || 5000; // Checks if there is a port envirnment variable; if there isn't, it defaults to 5000

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})

console.log("Hello World!")