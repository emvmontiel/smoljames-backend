// This file is where we are going to define all of the endpoints for handling the authentication functionalities

import express from 'express'
import bcrypt from 'bcryptjs' // This is for encrypting the passwords; for the application's holistic security
import jwt from 'jsonwebtoken' // Allow us to create a JSON token – an alphanumeric key; a secure password that we can associate with the user's authentication without needing to sign up again
import prisma from '../@prisma/client'


// How to configure endpoints/routes when you're not defining them in the current file (server.js)
// The router is like a subsection of our app that we can use to create our methods
const router = express.Router()

// Now, we are using the router instead of app (located in server.js) to create our endpoints
// This allows us to separate the files and uphold organization
// Register a new user at /auth/register endpoint
router.post('/register', async (req, res) => {
    const { username, password } = req.body // Gives us access to the JSON body of the incoming network request
    // console.log(username, password)
    // res.sendStatus(201)

    const hashedPassword = bcrypt.hashSync(password, 8);
    console.log(hashedPassword);
    // res.sendStatus(201);

    // Saves the new user and hashed password to db
    // The prepare method allows us to inject values into SQL queries
    try {
        // The communication between the server and database is an asynchronous process
        // We have to make sure that our endpoints are aynchronous
        const user = await prisma.user.create({
            data: {
                username, 
                password: hashedPassword
            }
        })
        
        // Creates an automatic/default/first to do for the user
        const defaultTodo = `Hi! Add your first task here ;)`
        await prisma.todo.create({
            data: {
                task: defaultTodo, 
                userId: user.id
            }
        })

        // Creates a token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' })
        res.json({ token })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
})

// Contains the logic to login the user when we hit the endpoint 
router.post('/login', async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await prisma.user.findUnique({
            where: {
                username: username
            }
        })

        // Handles requests that do not have an associated username
        if (!user) { 
            return res.status(404).send({ message: "User not found" }) 
        }

        // Compares the passwords and ensures that they are equivalent
        const passwordIsValid = bcrypt.compareSync(password, user.password)
        if (!passwordIsValid) {
            return res.status(401).send({
                message: "Invalid password"
            })
        }
        console.log(user)

        // Successful authentication
        const token = jwt.sign(
            { id: user.id }, process.env.JWT_SECRET, 
            { expiresIn: '24h' })
            res.json({ token })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
})

export default router