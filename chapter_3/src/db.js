import { DatabaseSync } from 'node:sqlite'

const db = new DatabaseSync(':memory:')

// Execute SQL commands using the db.exec() method
db.exec(`
    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        username TEXT UNIQUE, 
        password TEXT
    )
    `)

db.exec(`
    CREATE TABLE todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        user_id INTEGER,
        task TEXT,
        completed BOOLEAN DEFAULT 0,
        FOREIGN KEY(user_id) REFERENCE users(id)
    )
    `)

export default db 
// Line 24 allows us to interact with the database variable created on line 3 from other folders & files
// Exports the 'db' object so it can be imported and used in other files.
// Allows you to share a variable, function, or object between MODULES
// Also allows us to keep a tidy project directory
// You'll quickly know where to reference the code 
// Your code isn't just jammed into one file 
// Everything is compartmentalized