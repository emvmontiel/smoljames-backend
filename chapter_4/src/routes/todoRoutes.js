// Hellooooooo, it is now the 19th of Novembaaaaaaa
// Update: Dec 3 2025 13:46
import express from 'express' 
import prisma from '../@prisma/client'

const router = express.Router()

// Get
// All todos associated with the user
router.get('/', async (req, res) => {
    const todos = await prisma.todo.findMany({
        where: {
            userId: req.userId
        }
    })
    res.json(todos)
});

// Create
router.post('/', async (req, res) => {
    const { task } = req.body
    const todo = await prisma.todo.create({
        data: {
            task, 
            userId: req.userId
        }
    })
    res.json(todo)
});

// Update
// Nov 26 2025 16:57
// https://youtu.be/9BD9eK9VqXA?t=14490
router.put('/:id', async (req, res) => {
    const { completed } = req.body
    const { id } = req.params
    const updatedTodo = await prisma.todo.update({
        where: {
            id: parseInt(id),
            userId: req.userId
        },
        data: {
            completed: !!completed
        }
    })
    res.json(updatedTodo)
});

// Delete
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const userId = req.userId
    await prisma.todo.delete({
        where: {
            id: parseInt(id),
            userId
        }
    })
    res.send({ message: "Deleted successfully" })
});

export default router