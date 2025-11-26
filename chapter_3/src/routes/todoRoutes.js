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
router.post('/', (req, res) => {
    const { task } = req.body
    const insertTodo = db.prepare(`
        INSERT INTO todos (user_id, task)
        VALUES (?, ?)
        `)
    const result = insertTodo.run(req.userId, task)
    res.json({ id: result.lastInsertRowid, task , completed: 0 })
});

// Update
// Nov 26 2025 16:57
// https://youtu.be/9BD9eK9VqXA?t=14490
router.put('/:id', (req, res) => {
    const { completed } = req.body
    const { id } = req.params
});

// Delete
router.delete('/:id', (req, res) => {});

export default router