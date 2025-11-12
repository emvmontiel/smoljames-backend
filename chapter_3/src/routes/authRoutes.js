// This file is where we are going to define all of the endpoints for handling the authentication functionalities

import express from 'express'
import bcrypt from 'bcryptjs' // This is for encrypting the passwords; for the application's holistic security
import jwt from 'jsonwebtoken' // Allow us to create a JSON token – an alphanumeric key; a secure password that we can associate with the user's authentication without needing to sign up again
import db from '../db'

// How to configure endpoints/routes when you're not defining them in the current file

const router = express.Router()

export default router