// This file is where we are going to define all of the endpoints for handling the authentication functionalities

import express from 'express'
import bcrypt from 'bcryptjs' // This is for encrypting the passwords; for the application's holistic security
import jwt from 'jsonwebtoken' // Allow us to create a JSON token – an alphanumeric key; a secure password that we can associate with the user's authentication without needing to sign up again
import db from '../db.js'

// How to configure endpoints/routes when you're not defining them in the current file
const router = express.Router()

// Now, we are using the router instead of app (located in server.js) to create our endpoints
// This allows us to separate the files and uphold organization
router.post('/register', (req, res) => {})

// Contains the logic to login the user when we hit the endpoint 
router.post('/login', (req, res) => {})

export default router