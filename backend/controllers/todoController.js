const mongoose = require('mongoose');
const Todo = require('../models/todo');

module.exports = {
    async createTodo(req, res) {
        const { title } = req.body;

        const todo = await Todo.create({
            title,

        })
        return res.json(todo);
    },
    async getAllTodo(req, res) {
        try {
            const todos = await Todo.find().sort({ _id: -1 })

            if (todos) {
                return res.json(todos)
            }
        } catch (error) {
            return res.status(400).json({ message: 'There is any todos yet' })
        }
    },

    async delete(req, res) {
        const { todotId } = req.params;
        try {
            await Todo.findByIdAndDelete(todotId)
            return res.status(204).send()

        } catch (error) {
            return res.status(400).json({ message: 'We do have any todo with the ID' })
        }
    }, async completed(req, res) {

        await Todo.findOneAndUpdate({ _id: req.params.id },
            { $set: { isCompleted: true, } },
            (error, todo) => {
                if (error) {
                    res.send(error)
                } res.json(todo)
            });
    }

}


