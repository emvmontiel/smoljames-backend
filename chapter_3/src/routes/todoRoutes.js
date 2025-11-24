// Hellooooooo, it is now the 19th of Novembaaaaaaa
import express from 'express'
import db from '../db.js'

const router = express.Router()

// Get
// All todos associated with the user
router.get('/', (req, res) => {
    const getTodos = db.prepare(`
        SELECT * FROM todos
        WHERE user_id = ?`)
    const todos = getTodos.all(req.userId)
    res.json(todos)
});

// Create
router.post('/', (req, res) => {});

// Update
router.put('/:id', (req, res) => {});

// Delete
router.delete('/:id', (req, res) => {});

export default router