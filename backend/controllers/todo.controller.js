import db from '../models/index.js';
const Todo = db.Todo;

export const createTodo = async (req, res) => {
    try {
        const { Title, Description } = req.body;
        const newTodo = await Todo.create({ Title, Description });
        res.status(200).json(newTodo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getAllTodo = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.update(req.body, { where: { id } });
        res.status(200).json({ message: 'Updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.destroy({ where: { id } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
