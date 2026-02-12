
import express from 'express'
import { createTodo, updateTodo, deleteTodo, getAllTodo } from '../controllers/todo.controller.js'

const router = express.Router()

router.post("/", createTodo)
router.put('/:id', updateTodo)
router.delete('/:id', deleteTodo);
router.get('/', getAllTodo)

export default router